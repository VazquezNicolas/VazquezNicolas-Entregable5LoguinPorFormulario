const {Router} = require('express')
const Users = require('../../dao/model/Users.model')
const router = Router()

router.post('/', async (req,res) => {
    try {
        const{first_name, last_name, email, age, password, rol} = req.body
        const newUserInfo = {first_name, last_name, email, age, password,rol }
        newUserInfo.rol = "usuario"
        const user = await Users.create(newUserInfo)
        
        res.status(201).json ({status: 'succes', message: user})
    } catch (error) {
        res.status(500).json ({status: 'error', error: 'Internal server error'})
    }
})


module.exports = router