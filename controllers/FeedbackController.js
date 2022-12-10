const { Feedback } = require('../models')

const GetAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findAll()
    res.send(feedback)
  } catch (error) {
    throw error
  }
}

const CreateFeedback = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let tailgateId = parseInt(req.params.tailgateId)

    let feedbackBody = {
      userId,
      tailgateId,
      ...req.body
    }
    let feedback = await Feedback.create(feedbackBody)
    res.send(feedback)
  } catch (error) {
    throw error
  }
}

const DeleteFeedback = async (req, res) => {
  try {
    let feedbackId = parseInt(req.params.feedback_id)
    await Feedback.destroy({ where: { id: feedbackId } })
    res.send({ message: `Deleted feedback with an id of ${feedbackId}` })
  } catch (error) {
    throw error
  }
}

const UpdateFeedback = async (req, res) => {
  try {
    let feedbackId = parseInt(req.params.feedback_id)
    let updatedFeedback = await Feedback.update(req.body, {
      where: { id: feedbackId },
      returning: true
    })
    res.send(updatedFeedback)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllFeedback,
  CreateFeedback,
  DeleteFeedback,
  UpdateFeedback
}
