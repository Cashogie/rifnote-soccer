const express = require("express")
const app = express();
const unirest = require('unirest')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EplTableRoutes = require("./routes/Epl-Table")

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", EplTableRoutes)

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({ message: 'UnAuthorized'});
    }
  });
  
  const port = 8080;
  
  app.listen(port, () => {
      console.log('A Nodejs API is listening on port: ', port );
  });