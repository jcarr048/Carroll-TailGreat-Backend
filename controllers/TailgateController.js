const { Tailgate } = require('../models')

const getAllTailgates = async (req, res) => {
  try {
    const tailgates = await Tailgate.findAll()
    res.send(tailgates)
  } catch (error) {
    throw error
  }
}

const getTailgateDetails = async (req, res) => {
  try {
    const tailgates = await Tailgate.findByPk(req.params.tailgate_id)
    res.send(tailgates)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllTailgates,
  getTailgateDetails
}
