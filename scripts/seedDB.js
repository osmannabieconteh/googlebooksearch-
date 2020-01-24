const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist');

const bookSeed = [
	{
		title: 'Purple Hibiscus',
		author: 'Chimamanda Ngozi Adich',
		synopsis:
			'Fifteen-year-old Kambili and her older brother Jaja lead a privileged life in Enugu, Nigeria. They live in a beautiful house, with a caring family, and attend an exclusive missionary school. They are completly shielded from the troubles of the world, as Kambili reveals in her tender-voiced account, things are less perfect than they appear. Although her Papa is generous and well respected, he is fanatically religious and tyrannical at home—a home that is silent and suffocating.',
		date: new Date(Date.now())
	},
	{
		title: 'Americanah',
		author: ' Chimamanda Ngozi Adichie',
		synopsis:
			'Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, where despite her academic success, she is forced to grapple with what it means to be black for the first time. Quiet, thoughtful Obinze had hoped to join her, but with post-9/11 America closed to him, he instead plunges into a dangerous, undocumented life in London. Fifteen years later, they reunite in a newly democratic Nigeria, and reignite their passion—for each other and for their homeland.',
		date: new Date(Date.now())
	},
	{
		title: 'The Thing Around Your Neck ',
		author: ' Chimamanda Ngozi Adichie',
		synopsis:
			'Searing and profound, suffused with beauty, sorrow, and longing, the stories in The Thing Around Your Neck map, with Adichies emmotional  wisdom , the collision of two cultures and the deeply human struggle to reconcile them.',

		date: new Date(Date.now())
	},
	{
		title: 'Homegoing',
		author: ' Yaa Gyasi',
		synopsis:
			'A novel of breathtaking sweep and emotional power that traces three hundred years in Ghana and along the way also becomes a truly great American novel. Extraordinary for its exquisite language, its implacable sorrow, its soaring beauty, and for its monumental portrait of the forces that shape families and nations, Homegoing heralds the arrival of a major new voice in contemporary fiction.',
		date: new Date(Date.now())
	},
	{
		title: 'Disgrace',
		author: ' J.M. Coetzee',
		synopsis:
			'A novelist of stunning precision and efficiency, Distrace  loses none of its fedelity to the social and political complexities of South Africa, even while it explores the troubling tensions between grenrations, sexes, and races. This is a novel of almost frightening perception frpm the writer of brutally clear prose',
		date: new Date(Date.now())
	},
	{
		title: 'Half of a Yellow Sun',
		author: 'Chimamanda Ngozi Adichie ',
		synopsis:
			'A masterly, haunting new novel from a writer heralded by The Washington Post Book World as “the 21st-century daughter of Chinua Achebe,” Half of a Yellow Sun re-creates a seminal moment in modern African history: Biafra’s impassioned struggle to establish an independent republic in Nigeria in the 1960s, and the chilling violence that followed'
	},
	{
		title: 'Things Fall Apart ',
		author: ' Chinua Achebe',
		synopsis:
			'A simple story of a "strong man" whose life is dominated by fear and anger, Things Fall Apart is written with remarkable economy and subtle irony. Uniquely and richly African, at the same time it reveals Achebes keen awareness of the human qualities common to men of all times and places',
		date: new Date(Date.now())
	},
	{
		title: 'The Joys Of Motherhood',
		author: '',
		synopsis:
			'For decades the Magistrate has been a loyal servant of the Empire, running the affairs of a tiny frontier settlement and ignoring the impending war with the barbarians. When interrogation experts arrive, however, he witnesses the Empires cruel and unjust treatment of prisoners of war. Jolted into sympathy for their victims, he commits a quixotic act of rebellion that brands him an enemy of the state',
		date: new Date(Date.now())
	},
	{
		title: 'So Long A Letter',
		author: 'Mariama Bâ',
		synopsis:
			'This novel is in the form of a letter, written by the widowed Ramatoulaye and describing her struggle for survival. It is the winner of the Noma Award',
		date: new Date(Date.now())
	},
	{
		title: 'No Longer At Ease',
		author: ' Chinua Achebe',
		synopsis:
			'Obi Okonkwo is an idealistic young man who has now returned to Nigeria for a job in the civil service. However in his new role he finds that the way of government seems to be corruption. Obi manages to resist the bribes offered to him, but when he falls in love with an unsuitable girl, he sinks further into emotional and financial turmoil',
		date: new Date(Date.now())
	}
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
