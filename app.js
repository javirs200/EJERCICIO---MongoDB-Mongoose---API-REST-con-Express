const express = require('express')
const app = express()
const port = 3000

// Rutas
const entriesApiRoutes = require("./routes/entries.routes")
const authorsApiRoutes = require("./routes/authors.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({ extended: true }));

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


app.get('/', (req, res) => {
  res.send('please check the api')
})

// Rutas
//API [GET] http://localhost:3000/api/entries
//API [PUT] http://localhost:3000/api/entries/ + {title,content,date,category}
//API [DELETE] http://localhost:3000/api/entries/:title
app.use('/api/entries',entriesApiRoutes);

//API [GET] http://localhost:3000/api/authors
app.use('/api/authors',authorsApiRoutes);


// Para rutas no existentes
app.use('*',error404);

app.listen(port, () => {
  console.log(`listen on: http://localhost:${port}/api/entries`)
})