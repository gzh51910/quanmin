const express = require('express');

const Router = express.Router();

// 引入数据库
const mongodb = require('../db/mongodb');
// const mongodb = require('../db/mongodb.js') ;
const {
    formatData
} = require('../utils')
// 
const colName = 'xihuan';

// @查询所有商品
// @查询所有商品
Router.get('/', async (req, res) => {
    // page     index
    // 1        0
    // 2        10
    // 3        20
    // 推导公式：index = (page-1)*size;
    // 语句：find().skip(index).litmit(size)
    
    let {
        page=1, pagesize = 10, type
    } = req.query;
console.log(type);

    // 根据分页和每页数量计算跳过的索引值
    let index = (page - 1) * pagesize
    // mongodb查询数据库
    let data = await mongodb.find(colName,{type},{skip:index,limit:pagesize});
    // let data = await mongodb.find(colName,{type});

    res.send(formatData({data}))
})


// Router.post('/',async (req,res)=>{
//     let {type,imgsrc,name,id,desc,level,price} = req.body;

//     // 写入数据：
  
//     let data = await mongodb.insert({type,imgsrc,name,id,desc,level,price});
//     res.send(result)
// })
Router.get('/:id',(req,res)=>{
    
    let {id} = req.params;
    // 查询数据：
    let sql = `select * from goods where id=${id}`;
    // connection.connect();
    // connection.query(sql,  (error, result)=> {
    //     if (error) throw error;
    //     res.send(result);
    //     // 关闭连接，释放资源
    //     connection.end();
    // });

    // pool.query(sql,(err,result)=>{
    //     res.send(result);
    // })

    query(sql,function(data){
        res.send(data)
    });
})




module.exports = Router