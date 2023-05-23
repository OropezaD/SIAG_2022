import { NextFunction, Request, Response } from 'express';
import { SeguimientosModel } from '@models/seguimientos.model';

export class SeguimientosController {
  public getSeguimientos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query.query;
      const posts = await SeguimientosModel.find({ asunto: { $regex: new RegExp(`${query}`, 'i') } }).limit(20);
      res.status(200).json(posts);
    } catch (error) {
      console.log('llegamos');
      next(error);
    }
  };
}
