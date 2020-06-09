const db = require('../config/db')
const { response } = require('express')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM user'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    post: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO user SET ?'
        db.query(sql, [data], (err) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let id = req.body.id;
        console.log("id", id)
        let sql = 'Delete from user where id = ' + id;
        db.query(sql,  (err)=> {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}