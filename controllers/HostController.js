const { Host, Tailgate } = require('../models')
const middleware = require('../middleware')
console.log(middleware)
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

module.exports = {
  GetHosts,
  GetHostbyId,
  RegisterHost
}
