import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { SeguimientosController } from '@controllers/seguimientos.controller';

export class SeguimientosRoute implements Routes {
  public path = '/seguimientos';
  public router = Router();
  public seguimientos = new SeguimientosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.seguimientos.getSeguimientos);
    // this.router.get(`${this.path}/:id`, AuthMiddleware, this.posts.getUserById);
    // this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateUserDto, 'body'), this.posts.createUser);
    // this.router.put(`${this.path}/:id`, AuthMiddleware, ValidationMiddleware(CreateUserDto, 'body', true), this.posts.updateUser);
    // this.router.delete(`${this.path}/:id`, AuthMiddleware, this.posts.deleteUser);
  }
}
