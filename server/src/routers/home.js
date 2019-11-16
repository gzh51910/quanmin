const express = require('express');

const Router = express.Router();

// 引入数据库
const mongodb = require('../db/mongodb');
const {
    formatData
} = require('../utils')



Router.get('/fenye', async (req, res) => {
    let colName = 'fenye';
    console.log("req.query", req.query);

    let
        {index} = req.query
    console.log("query", index);
   let a= index*1
   console.log(typeof(a));
   
    let data = await mongodb.find(colName, {index:a})
    res.send({
        data
    })
})


Router.get('/', async (req, res) => {
    let colName = 'homecomand';
    let data = await mongodb.find(colName, {});
    res.send(formatData({
        data
    }))
})




module.exports = Router