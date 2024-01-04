const validar=(req,res,next)=>{

    const {c1, c2, c3, c4, c5, c6, API , ygs, T, p, rs} = req.body

    if(c1 == null ||c2 == null || c3 == null || c4 == null || c5==null || c6 == null || API ==null || ygs == null || T == null || p == null || rs == null ){
        return res.status(500).json({
            "message": "validar enviar solo numeros y datos completos"
        })
    } else {
        next()
    }


}

module.exports = {validar}