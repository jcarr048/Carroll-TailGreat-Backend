const { Host, Tailgate } = require('../models')
const middleware = require('../middleware')

const GetHosts = async (req, res) => {
  try {
    const hosts = await Host.findAll({
      include: [{ model: Tailgate, as: 'owner' }]
    })
    res.send(hosts)
  } catch (error) {
    throw error
  }
}

const GetHostbyId = async (req, res) => {
  try {
    const host = await Host.findByPk(req.params.host_id, {
      include: [{ model: Tailgate, as: 'owner' }]
    })
    res.send(host)
  } catch (error) {
    throw error
  }
}

const RegisterHost = async (req, res) => {
  try {
    const { hostName, email, password, firstName, lastName, age } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const host = await Host.create({
      hostName,
      email,
      passwordDigest,
      firstName,
      lastName,
      age
    })
    res.send(host)
  } catch (error) {
    throw error
  }
}

const LoginHost = async (req, res) => {
  try {
    const host = await Host.findOne({
      where: {
        hostName: req.body.hostName
      },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(host.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: host.id,
        username: host.hostName,
        email: host.email
      }
      let token = middleware.createToken(payload)
      return res.send({ ...payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const UpdateHost = async (req, res) => {
  try {
    let hostId = parseInt(req.params.user_id)
    let updatedHost = await Host.update(req.body, {
      where: { id: hostId },
      returning: true
    })
    res.send(updatedHost)
  } catch (error) {
    throw error
  }
}

const DeleteHost = async (req, res) => {
  try {
    let hostId = parseInt(req.params.host_id)
    await Host.destroy({ where: { id: hostId } })
    res.send({ message: `Deleted user with an id of ${hostId}` })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  GetHosts,
  GetHostbyId,
  RegisterHost,
  LoginHost,
  UpdateHost,
  DeleteHost,
  CheckSession
}
