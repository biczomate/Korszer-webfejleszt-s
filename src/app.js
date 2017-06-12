const Battle = require("./battle");
const Warrior = require("./warrior");
const Priest = require("./priest");
const IllegalActionError = require("./illegalaction-error");
const Sword = require("./sword");
const Dagger = require("./dagger");
const Staff = require("./staff");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var heroes = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
})

app.post('/heroes', function (req, res) {
  let hero = null;
  if (Object.keys(req.body).length === 0) {
    res.status(400).send('Error. JSON');
    return;
  }
  try {
    if (req.body.type == 'warrior') {
      hero = new Warrior(req.body.hp);
    } else if (req.body.type == 'priest') {
      hero = new Priest(req.body.hp);
    } else {
      res.status(400).send('Error: Bad type!');
      return;
    }
  } catch (e) {
    if (e instanceof RangeError) {
      res.status(400).send('Error: Bad HP!');
      return;
    }
    console.log(e);
  }
  switch (req.body.weapon) {
    case 'Sword':
      hero.addWeapon(new Sword());
      break;
    case 'Dagger':
      hero.addWeapon(new Dagger());
      break;
    case 'Staff':
      hero.addWeapon(new Staff());
      break;
  }
  heroes.push(hero);

  res.status(201).json({ id: heroes.length });
})

app.get('/heroes', function (req, res) {
  let array = [];
  for (var i = 0; i < heroes.length; i++) {
    let hero = heroes[i].toJSON();
    hero['id'] = i + 1;
    array.push(hero);
  }
  res.status(200).json(array);
})

app.get('/battle', function (req, res) {
  let battle = new Battle(heroes[req.query.hero1 - 1], heroes[req.query.hero2 - 1]);
  battle.fight();
  res.status(200).json({ winner_id: heroes.indexOf(battle.getWinner()) + 1 });
})

module.exports = app;