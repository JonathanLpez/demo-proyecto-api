const {Router} = require('express')
const router = Router()

const {validar} = require('../middlewares/index')

const { aceiteBajoSatudado }= require('../controllers/formula.controller')

router.get("/aceitesaturado",[validar] ,aceiteBajoSatudado)

router.get("/grasa", (req,res)=>{

    
    res.status(200).json({
        "message": "grasa"
    })
})

module.exports = router

