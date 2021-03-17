const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes')


// API routing
router.use('/api', apiRoutes)

// if no API routes used then send over react app
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router