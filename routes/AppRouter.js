const Router = require('express').Router()
const FeedbackRouter = require('./FeedbackRouter')
const HostRouter = require('./HostRouter')
const TailgateRouter = require('./TailgateRouter')
const UserRouter = require('./UserRouter')

// Router.use('/feedback', FeedbackRouter)
Router.use('/hosts', HostRouter)
Router.use('/tailgates', TailgateRouter)
Router.use('/users', UserRouter)

module.exports = Router
