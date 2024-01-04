const express = require('express');

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.path = "/api/formulas"
        this.middlewares()
        this.routes()
        
    }


    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.path, require('../routes/formulas'))
    }

    listen(){
        this.app.listen(this.port, ()=>{ 
            console.log(`App run in port ${this.port}`)
        })
    }
}

module.exports=  Server