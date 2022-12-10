const Router = require('express').Router()
// const middleware = require('../middleware')
const controller = require('../controllers/FeedbackController')

Router.get('/', controller.GetAllFeedback)
