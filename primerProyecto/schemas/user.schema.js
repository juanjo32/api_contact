const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(15);
const telephone = Joi.number().integer().min(10);
const platform = Joi.number().integer().min(1).max(3);

const createUserSchema = Joi.object({
  name: name.required(),
  telephone: telephone.required(),
  platform: platform.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  telephone: telephone,
  platform: platform,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }