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
  detail: "I'm a professional illustrator from Waterloo",
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
    education: 'I have Diploma and B.Tech from Punjab Technical Board and BCET University India, Moreover currently i am doing Post-Graduate Diploma in Mobile Solutions Development from Conestoga College at Waterloo, Canada',
    strength:'My Hobbies are Running, Traveling and Coding while my Interest is to learn new things all the times and in term of my strength which is  Self Motivated, Hardworker,  Honest.',

   
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

module.exports = router;
