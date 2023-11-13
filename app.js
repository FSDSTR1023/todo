//ÉSTE CÓDIGO LO COGEMOS Y PEGAMOS DE https://expressjs.com/en/starter/hello-world.html
const express = require('express')  //auqi decimos queremos el paquete express
const app = express()           // aqui decimos lo vamos a guardar y ejecutar en una aplicacion app
const port = 3000              // lo vamos a poner en este puerto

app.get('/', (req, res) => {        // mi app va a responder a las peticiones .get con la direccion: ('/', que va aqui) 
                                    //y esto va a tener una request req (solicitud) y una respuesta res. 
                                    //la solicitud vendrá del cliente fronten y la respuesta es el mensaje hello wordld
  
    res.send('Hello World!')

})
app.get('/patata', (req, res) => { 
    res.send('he creado patata???... <br> bueno, buenoo, bueno...<br> menuda patata instalar nodemon <br> HACERLO DESDE TERMINAL BASH')     

})
app.get('/hola', (req, res) => { 
    res.status(403)    
    res.json({
        msg: "no tienes acceso",
     })
})
app.get('/tasks', (req, res) => { 
        res.json([{
            title:"preparar maletas",
            

        }

        ])
       
     
})

app.post('/', (req, res) => { 
    res.send("hola post")
})

app.listen(port, () => {            //nuestra aplicaicón va a escuchar en un puerto (que es el que tenemos arriba)
  console.log(`Example app listening on port ${port}`)  //aqui nos va a decir en en eel console log en que puerto nos está escuchando
})