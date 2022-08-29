const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(15);
const telephone = Joi.number().integer().min(10);

const createColabSchema = Joi.object({
  name: name.required(),
  telephone: telephone.required(),
  
});

const updateColabSchema = Joi.object({
  name: name,
  telephone: telephone,
});

const getColabSchema = Joi.object({
  id: id.required(),
});

module.exports = { createColabSchema, updateColabSchema, getColabSchema }