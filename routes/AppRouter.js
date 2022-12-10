const Router = require('express').Router()
const HostRouter = require('./HostRouter')
const TailgateRouter = require('./TailgateRouter')
const UserRouter = require('./UserRouter')
const FeedbackRouter = require('./FeedbackRouter')

Router.use('/hosts', HostRouter)
Router.use('/tailgates', TailgateRouter)
Router.use('/users', UserRouter)
Router.use('/feedback', FeedbackRouter)

module.exports = Router
