var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { Home: 'Home', 
  Projects: 'Projects',
  AboutMe: 'AboutMe',
  LOGO: 'Dilpreet Singh |',
  Contact: 'Contact',
  IMAGE: 'K:\ePortfolio\assests\image.jpg',
  ALT: "dil's image"
 
});
});

/*router.get('/about', (req,res,next) =>{
  res.render('about',{title:'About this page', paragraph:'This is about my Project'})
});
*/
module.exports = router;
