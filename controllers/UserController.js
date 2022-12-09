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
    const { userName, email, password, firstName, lastName, age } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      userName,
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

module.exports = {
  GetUsers,
  GetUserbyId,
  RegisterUser
}
