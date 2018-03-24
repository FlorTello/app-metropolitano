const express = require('express');

const router = express.Router();

const path = require('path');

const dataStations = require('../data/station');
const dataDistricts = require('../data/district');
const dataTrunks = require('../data/trunk');
const dataTrunksUnit = require('../data/trunk-unit');
const dataDetailTrunk = require('../data/detail-trunk');


function filterTurn(turn){
  return dataDetailTrunk.map(e => {
    if(e.turn === turn){
      return e.schedule;
    }
  }).filter(e => e !== undefined).reduce(a =>{
    return a;
  });
}

router.post('/schedule', (req, res) =>{
  const turn = req.body.turn;
  const schedule = filterTurn(turn);
  res.send(schedule).json();
});

router.get('/list', (req, res) => {
  const id = req.body.id;
    switch(req.query.for){
case 'DISTRICT':
          const filter = dataStations.filter(s => s.id == id);
          console.log(filter);
          res.json(filter)
        break;
    }
  res.sendFile(path.resolve('./src/station/mock/list.json'));
});

function filterTrunkTurn(turn){
  return dataDetailTrunk.filter(e => e.turn == turn);
}


console.log(filterTurn('Mañana'));
// router.get('/list', (req, res) => {
//     switch(req.query.for){
//         case 'DISTRICT':
//           res.sendFile(path.resolve('./src/station/mock/list.json'));
//         break;
//         case default:
//             res.sendFile(path.resolve('./src/station/mock/list.json'));
//         break;
//     }
//
// });

module.exports = router;
