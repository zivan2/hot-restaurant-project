var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation = [

]

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/reservations/:reservation', (req, res) => {
  const chosen = req.params.reservation;

for (let i = 0; i < reservation.length; i++) {
  if (chosen === reservation[i].routeName) {
    return res.json(reservation[i]);
  }
}

return res.json(false);
});

app.post('/api/reservation', (req, res) => {
  const newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
  console.log(newReservation);

  characters.push(newReservation);
  res.json(newReservation);
});