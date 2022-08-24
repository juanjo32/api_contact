const Joi = require('joi');
const { platform } = require('os');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const numberC = Joi.string().min(10);
const platform = Joi.string().min(5)

const createUserSchema = Joi.object({
  name: name.required(),
  numberC: numberC.required(),
  platform: platform.required()
});

const updateUserSchema = Joi.object({
  name: name,
  numberC: numberC,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
