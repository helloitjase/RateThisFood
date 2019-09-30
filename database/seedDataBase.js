const mongoose = require('mongoose');
const moment = require('moment');

mongoose.connect('mongodb://localhost/RateThisFood', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Mango Connected');
});

const foodSchema = new mongoose.Schema({
  Food: String,
  Pictures: [
    {
      Picture: String,
      Restaurant: String,
      Reviewer: String,
      Date: String,
    },
  ],
  Reviews: [
    {
      Reviewer: String,
      Rating: Number,
      Cost: Number,
      Date: String,
      Restaurant: String,
      Review: String,
    },
  ],
});


const matcha = ['https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matcha1.jpg', ' https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matcha2.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/Matcha3.jpg'];
const blackSesame = ['https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/black-sesame-soft-serve/blacksesam1.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/black-sesame-soft-serve/blacksesameujitime.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/black-sesame-soft-serve/somismoi+black+sesame+.jpg'];
const vanilla = ['https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/vanilla-soft-serve/costcovanillasoftserve.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/vanilla-soft-serve/fosterfreezevanillasoftserve.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/vanilla-soft-serve/yogurtpark+vanilla+soft+server.jpg'];

const Dessert = mongoose.model('desserts', foodSchema);

const matchaEntry = new Dessert({
  Food: 'matcha-soft-serve',
  Pictures: [
    {
      Picture: matcha[0],
      Restaurant: 'Tea Master Matcha Cafe & Green Tea Shop',
      Reviewer: 'Jimmy Li',
      Date: '2018-09-30',
    },
    {
      Picture: matcha[1],
      Restaurant: 'Nana\'s Green Tea',
      Reviewer: 'Roma Seo',
      Date: '2019-06-17',
    },
    {
      Picture: matcha[2],
      Restaurant: 'Amausaan Uji Matcha',
      Reviewer: 'Jason Chen',
      Date: '2019-09-29',
    },
  ],
  Reviews: [
    {
      Reviewer: 'Jimmy Li',
      Rating: 4,
      Cost: 5,
      Date: '2018-09-30',
      Restaurant: 'Tea Master Matcha Cafe & Green Tea Shop',
      Review: 'Much yum, Cheap',
    },
    {
      Reviewer: 'Roma Seo',
      Rating: 5,
      Cost: 9,
      Date: '2019-06-17',
      Restaurant: 'Nana\'s Green Tea',
      Review: 'This was a great place for a first date! 10/10 would recommend!',
    },
    {
      Reviewer: 'Jason Chen',
      Rating: 1,
      Cost: 1,
      Date: '2019-09-29',
      Restaurant: 'Amausaan Uji Matcha',
      Review: 'Yums Yums in my Tums Tums',
    },
  ],
});

const blackSesameEntry = new Dessert({
  Food: 'black-sesame-soft-serve',
  Pictures: [
    {
      Picture: blackSesame[0],
      Restaurant: 'unknown',
      Reviewer: 'Bob Builder',
      Date: '2017-01-01',
    },
    {
      Picture: blackSesame[1],
      Restaurant: 'Uji Time Dessert',
      Reviewer: 'Holly Paul',
      Date: '2014-03-28',
    },
    {
      Picture: blackSesame[2],
      Restaurant: 'Somi Somi',
      Reviewer: 'Adrienne Lau',
      Date: '2019-07-29',
    },
  ],
  Reviews: [
    {
      Reviewer: 'Bob Builder',
      Rating: 0,
      Cost: 0,
      Date: '2017-01-01',
      Restaurant: 'unknown',
      Review: 'You can\'t build anything out of this?!?!?!',
    },
    {
      Reviewer: 'Holly Paul',
      Rating: 5,
      Cost: 15.5,
      Date: '2014-03-28',
      Restaurant: 'Uji Time Dessert',
      Review: 'This was totally a good place, I would totally come back here again.',
    },
    {
      Reviewer: 'Adrienne Lau',
      Rating: 5,
      Cost: 30,
      Date: '2019-07-29',
      Restaurant: 'Somi Somi',
      Review: 'Not as lit as Arena, but definitely pretty lit.',
    },
  ],
});
const vanillaEntry = new Dessert({
  Food: 'vanilla-soft-serve',
  Pictures: [
    {
      Picture: vanilla[0],
      Restaurant: 'Costco',
      Reviewer: 'Regina Tran',
      Date: '2018-12-20',
    },
    {
      Picture: vanilla[1],
      Restaurant: 'Fosters Freeze',
      Reviewer: 'Rebecca Cheung',
      Date: '2015-12-27',
    },
    {
      Picture: vanilla[2],
      Restaurant: 'Yogurt Park',
      Reviewer: 'Daniel Lin',
      Date: '2019-07-29',
    },
  ],
  Reviews: [
    {
      Reviewer: 'Regina Tran',
      Rating: 3,
      Cost: 6,
      Date: '2018-09-30',
      Restaurant: 'Costco',
      Review: 'Omg the servers here were so nice!',
    },
    {
      Reviewer: 'Rebecca Cheung',
      Rating: 4,
      Cost: 2,
      Date: '2015-12-27',
      Restaurant: 'Fosters Freeze',
      Review: 'I took some pretty nice photos here, the ice cream aight too.',
    },
    {
      Reviewer: 'Daniel Lin',
      Rating: 4.5,
      Cost: 50,
      Date: '2019-07-29',
      Restaurant: 'Yogurt Park',
      Review: 'Bro, the ice cream here was soooo good.',
    },
  ],
});

// matchaEntry.save();
// blackSesameEntry.save();
// vanillaEntry.save();

Dessert.insertMany([matchaEntry, blackSesameEntry, vanillaEntry])
  .then(() => {
    console.log('entrees entered');
  });
