const { res, json } = require("express")

const aceiteBajoSatudado = async (req,res)=>{ 

    const {c1, c2, c3, c4,c5,c6, ygs, T, API, p , rs } = req.body

    const resultado = ((c1) + (c2 * rs) + (c3 * T) + (c4 * ygs) + (c5 * API)) / (c6 * p)

    res.status(201).json({
        "solucion": resultado
    })

}

module.exports ={ aceiteBajoSatudado }