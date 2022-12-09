const { Tailgate, Host } = require('../models')

const GetAllTailgates = async (req, res) => {
  try {
    const tailgates = await Tailgate.findAll()
    res.send(tailgates)
  } catch (error) {
    throw error
  }
}

const GetTailgateDetails = async (req, res) => {
  try {
    const tailgates = await Tailgate.findByPk(req.params.tailgate_id)
    res.send(tailgates)
  } catch (error) {
    throw error
  }
}

const CreateTailgate = async (req, res) => {
  try {
    let host_id = parseInt(req.params.tailgate_id)
    let tailgateBody = {
      host_id,
      ...req.body
    }
    const newTailgate = await Tailgate.create(tailgateBody)
    res.send(newTailgate)
  } catch (error) {
    throw error
  }
}

const DeleteTailgate = async (req, res) => {
  try {
    let tailgateId = parseInt(req.params.tailgate_id)
    await Tailgate.destroy({ where: { id: tailgateId } })
    res.send({ message: `Deleted tailgate with id of ${tailgateId}` })
  } catch (error) {
    throw error
  }
}

const UpdateTailgate = async (req, res) => {
  try {
    let tailgateId = parseInt(req.params.tailgate_id)
    let updatedTailgate = await Tailgate.update(req.body, {
      where: { id: tailgateId },
      returning: true
    })
    res.send(updatedTailgate)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTailgates,
  GetTailgateDetails,
  DeleteTailgate,
  UpdateTailgate,
  CreateTailgate
}
