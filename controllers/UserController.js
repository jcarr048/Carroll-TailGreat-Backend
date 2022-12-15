const { User, Feedback } = require('../models')
const middleware = require('../middleware')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Feedback, as: 'user_feedback' }]
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserbyId = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id, {
      include: [{ model: Feedback, as: 'user_feedback' }]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const RegisterUser = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, age } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      username,
      email,
      passwordDigest,
      firstName,
      lastName,
      age
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const LoginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)

      return res.send({ ...payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Deleted user with an id of ${userId}` })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  console.log(res.locals)
  const { payload } = res.locals
  res.send(payload)
}

// const AttendTailgate = async (req, res) => {
//   try {

//   }
// }

module.exports = {
  GetUsers,
  GetUserbyId,
  RegisterUser,
  LoginUser,
  UpdateUser,
  DeleteUser,
  CheckSession
}
