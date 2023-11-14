const express = require('express')
const app = express()
const port = 3000

// Rutas
const providersApiRoutes = require("./routes/providers.routes")
const productsApiRoutes = require("./routes/products.routes")

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
//API CRUD http://localhost:3000/api/providers
app.use('/api/providers',providersApiRoutes);

//API CRUD http://localhost:3000/api/products
app.use('/api/products',productsApiRoutes);


// Para rutas no existentes
app.use('*',error404);

app.listen(port, () => {
  console.log(`listen on: http://localhost:${port}/api/`)
})