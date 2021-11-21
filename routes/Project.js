const express = require('express')

const router = express.Router();

router.get('/', (req,res,next)=> {
    res.render('Project/index',{title:'My Projects'})
})

module.exports = router