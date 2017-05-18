const getTheData = require('../app/base')

var self = module.exports = (function() {
    var router = express.Router()

    // middleware to use for all requests
    router.use(function(req, res, next) {
        Logger.debug("Cluster worker [" + cluster.worker.id + "] running")
        // do logging
        // Logger.debug(filename , "::", (new Date).toUTCString() + '===>API Call made:' + req.method);
        next() // make sure we go to the next routes and don't stop here
    })

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get("/", function(req, res) {
        res.send({
            message: "This is the Route"
        })
    })

    // more routes for our API will happen here
    // on routes that end in /
    // ----------------------------------------------------
    router.route("/list")
        .get(function(req, res) {
            getTheData.getAPage("homepage").then(function(homepage) {
                res.send(homepage)
            }).catch((err) => setImmediate(() => {
                Logger.error(err)
            }))
        })
        .post(function(req, res) {
            // nothing
        })
        .put(function(req, res) {
            // nothing
        })
        .delete(function(req, res) {
            // nothing
        })
    router.route("/list2")
        .get(function(req, res) {
            getTheData.getAPage2("homepage2").then(function(homepage) {
                res.send(homepage)
            }).catch((err) => setImmediate(() => {
                Logger.error(err)
            }))
        })

    return router
})()