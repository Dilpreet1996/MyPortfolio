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
  
    about:'About Me'
   
})
});

module.exports = router;
