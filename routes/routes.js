const express       = require('express'),
      router        = express.Router()
      indexRoute    = require('./index/index'),
      createRoute   = require('./create/create'),
      showRoute     = require('./show/show'),
      postRoute     = require('./post/post'),
      editRoute     = require('./edit/edit'),
      updateRoute   = require('./update/update'),
      deleteRoute   = require('./delete/delete')
      ;


router.use('/', indexRoute);
router.use('/', createRoute);
router.use('/', showRoute);
router.use('/', postRoute);
router.use('/', editRoute);
router.use('/', updateRoute);
router.use('/', deleteRoute);

module.exports = router;