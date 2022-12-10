const { Feedback } = require('../models')

const GetAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findAll({})
    res.send(feedback)
  } catch (error) {
    throw error
  }
}

// const CreateFeedback = async (req, res) => {
//   try {
//     let userId = parseInt(req.params.user_id)
//     let tailgateId = parseInt(req.params.tailgateId)

//     let feedbackBody = {
//       userId,
//       tailgateId,
//       ...req.body
//     }
//     let feedback = await Feedback.create(feedbackBody)
//     res.send(feedback)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetAllFeedback
  //   CreateFeedback
}
