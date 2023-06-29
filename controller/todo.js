const models = require("../models");
const { Op } = require("sequelize");
const {Todo} = require("../models")

exports.geTtodo = (_, res) => {
  try {
    const todo = Todo.findAll()
    res.send({result:true, data: todo});    
  } catch (error) {
    res.send({result:false,data:error})
  }

};
exports.posttodo = (req, res) => {
  const {title} = req.body
  try {
    Todo.create({
      title
    })
    res.send({resutl:true});
  } catch (error) {
   res.send({result:false}) 
  }
};
exports.patchtodo = (req, res) => {
  const {title, done} = req.body
  console.log(req.params)
  try {
      Todo.update(
        {
        title: title,
        done: done
        },
        {
          where:{
            id: Number(req.params.todoId)
          }
        }
        )
        res.send({result:true})
      } catch (error) {
        res.send({result:false})
    }
};
exports.deletetodo = (req, res) => {
  try {
    Todo.destroy({
      where:{
        id: Number(req.params.todoId)
      }
    })
    res.send({result:true})
  } catch (error) {
    res.send({result:false})
  }

};
