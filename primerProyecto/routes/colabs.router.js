const express = require('express');

const ColabsService = require('./../services/colabs.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createColabSchema, updateColabSchema, getColabSchema } = require('./../schemas/colabs.schema');



const routerc=express.Router();
const service = new ColabsService();

routerc.get('/', async (req, res) => {
  const colabs = await service.find()
   res.json(colabs);
});

routerc.get('/:id',validatorHandler(getColabSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const colab = await service.findOne(id);
    res.json(colab);
  } catch (error) {
    next(error);
  }
});
routerc.post('/', validatorHandler(createColabSchema,'body'), async (req, res) => {
  const body = req.body;
  const newColab = await service.create(body);
  res.status(201).json(newColab);
});
routerc.patch('/:id', validatorHandler(getColabSchema, 'params'), validatorHandler(updateColabSchema, 'body'), async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const colab = await service.update(id, body);
    res.json(colab);
    
  } catch (error) {
    next(error);
  }
});

routerc.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const r = await service.delete(id);
  res.json(r);
});

module.exports=routerc;
