const express = require('express')
const router = express().Router()


router.get('/todos', (req,res)=>{
    res.send('hello')
})

module.exports = router