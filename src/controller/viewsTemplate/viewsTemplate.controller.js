const {Router} = require('express')

const router = Router()

router.get('/signup', (req,res) => {
    res.render('signUp.handlebars')
})

module.exports = router