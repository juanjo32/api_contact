const boom = require('@hapi/boom');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;


/*const express = require('express');
const app = express();
const port=3000
app.get('/',(req, res)=>{
    res.send('Aqui estamos');
})*/

