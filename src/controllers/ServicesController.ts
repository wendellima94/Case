import {Request, Response, NextFunction} from 'express';

import ServiceModel from '../model/ServiceModel';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newService =  await ServiceModel.create(req.body);

    res.status(200).json({
      newService
    })
  } catch(err) {
    res.status(404).json({
      errors: {
        message: 'Não foi possivel criar este serviço', err
      }
    })
  }
};

export const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findService = await ServiceModel.findById(req.params._id);

    return res.send({ findService });
  } catch (error) {
    res.status(400).send({ error })
  }
}
export const searchAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findAllService = await ServiceModel.find();

    return res.send({ findAllService });
  } catch (error) {
    res.status(400).send({ error })
  }
}