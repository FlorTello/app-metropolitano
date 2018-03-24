const express = require('express');

const appMetropolitano = express();

const bodyParser = require('body-parser');

appMetropolitano.use(bodyParser.json());


const station = require('./station/station.route');
const district = require('./district/district.route');
const trunk = require('./trunk/trunk.route');
const trunkDetail = require('./trunkDetail/trunk-detail.route');

// Add headers

appMetropolitano.use('/station', station);
appMetropolitano.use('/district', district);
appMetropolitano.use('/trunk', trunk);
appMetropolitano.use('/trunk-detail', trunkDetail);


const port = process.env.API_PORT || 5000;

appMetropolitano.listen(port, () => {
  console.log(`Server Metropolitano running on port ${port}!`);
});
module.exports = appMetropolitano;
