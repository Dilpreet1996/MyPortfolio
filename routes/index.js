var express = require('express');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { Home: 'Home', 
  Projects: 'Projects',
  AboutMe: 'AboutMe',
  LOGO: 'Dilpreet Singh |',
  Contact: 'Contact',
  IMAGE: 'https://raw.githubusercontent.com/Dilpreet1996/MyPortfolio/master/assests/image.jpg',
  ALT: "dil's image",
  name: 'Dilpreet Singh',
  detail: "I'm a professional Programmer and UI/UX Designer from Waterloo",
  about:'About Me',
  
 
 
});




});

router.get('/about', (req,res,next) =>{
  res.render('about',{
    Home: 'Home', 
    Projects: 'Projects',
    AboutMe: 'AboutMe',
    LOGO: 'Dilpreet Singh |',
    Contact: 'Contact',
    IMAGE: 'https://raw.githubusercontent.com/Dilpreet1996/MyPortfolio/master/assests/image.jpg',
    ALT: "dil's image",
    carrerObjective:'To enhance my knowledge and skills by working with your company and to use that skills for the growth and development of your company.',
    about:'About Me',
    education: 'I have Diploma and B.Tech from Punjab Technical Board and BCET University India, Moreover currently I am pursuinggit Post-Graduate Diploma in Mobile Solutions Development from Conestoga College at Waterloo, Canada',
    strength:'My Hobbies are Running, Traveling and Coding while my Interest is to learn new things all the times and in term of my strength which is  Self Motivated, Hardworker,  Honest.',
    birthday: '27th of September 1996',
    website: ' https://eportfoliomain.herokuapp.com/',
    number: '+16476171448',
    city: 'Waterloo, Canada',
    age:'25',
    degree:'Bachelor of Engineering and Technology in C.S.E',
    status:'Available',
    mail:'dilpreetsingh.ds277@gmail.com'


   
});
});
router.get('/contacts',(req,res,next) => {
  res.render('contacts',
  { 
    Home: 'Home', 
    Projects: 'Projects',
    AboutMe: 'AboutMe',
    LOGO: 'Dilpreet Singh |',
    Contact: 'Contact',
    IMAGE: 'https://raw.githubusercontent.com/Dilpreet1996/MyPortfolio/master/assests/image.jpg',
    ALT: "dil's image",
    location: "H.no 393, Waterloo",
    about:'About Me',
    Email:'dilpreetsingh.ds277@gmail.com',
    number:'+16476171448',
    sub:'Submit!',
    contactGet:'Fell free to contact me or I will get back to you ASAP, please fill the contact form'
  });

});

router.get('/myProjects',(req,res,next) => {
  res.render('myProjects',
  { 
    Home: 'Home', 
    Projects: 'Projects',
    AboutMe: 'AboutMe',
    LOGO: 'Dilpreet Singh |',
    Contact: 'Contact',
    IMAGE: 'https://raw.githubusercontent.com/Dilpreet1996/MyPortfolio/master/assests/image.jpg',
    ALT: "dil's image",
    project:"My Projects",
    about:'About Me',
    ui:'In this Project I have Created a Design for a Music WebSite',
    pl:"Project Link",
    ct:"UI/UX Projets",
    st:"Adobe XD",
    ui1:"It's an Android App which I have build by using a Java Programming Language",
    st1:"Andiod Project",
    ct1:"Andiod Project",
    ui2:"It's an GUI Java Based Project for Management releated purpose",
    ct2:"Java Project",
    st2:"Java Based Project"
  
  });

});

module.exports = router;
