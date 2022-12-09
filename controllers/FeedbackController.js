const { Feedback } = require('../models')

const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findAll({})
    res.send(feedback)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllFeedback
}
