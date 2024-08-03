const router = require("express").Router();
const bookRoutes = require('../Controllers/bookController')

router.get("/getAllBook",bookRoutes.getALLBook)
router.get('/getSpecificBook',bookRoutes.getSpecificBook)
router.post('/createBook',bookRoutes.createBook)
router.put('/updateBook',bookRoutes.updateBook)
router.delete('/deleteBook',bookRoutes.deleteBook)

module.exports = router;