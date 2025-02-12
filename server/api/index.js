const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/spotify', require('./spotify'))
router.use('/spotify/search', require('./spotify'))
router.use('/mood', require('./mood'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
