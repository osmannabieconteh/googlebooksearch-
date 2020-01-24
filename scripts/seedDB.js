const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist');

const bookSeed = [
	{
		title: 'Purple Hibiscus',
		author: 'Chimamanda Ngozi Adich',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'Americanah',
		author: ' Chimamanda Ngozi Adichie',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'The Thing Around Your Neck ',
		author: ' Chimamanda Ngozi Adichie',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'Homegoing',
		author: ' Yaa Gyasi',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'Disgrace',
		author: ' J.M. Coetzee',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'Half of a Yellow Sun',
		author: 'Chimamanda Ngozi Adichie ',
		synopsis: ''
	},
	{
		title: 'Things Fall Apart ',
		author: ' Chinua Achebe',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'The Joys Of Motherhood',
		author: '',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'So Long A Letter',
		author: 'Mariama Bâ',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		title: 'No Longer At Ease',
		author: ' Chinua Achebe',
		synopsis: '',
		date: new Date(Date.now())
	},
	{
		
];

db.Book
	.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
