import { model, Schema, Document } from 'mongoose';
import { SeguimientosSet } from '@interfaces/seguimientos.interface';

const SeguimientosSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  idRastreo: {
    type: String,
    require: true,
  },
  idFolio: {
    type: String,
    require: true,
  },
  nombre: {
    type: String,
    require: true,
  },
  puesto: {
    type: String,
    require: true,
  },
  area: {
    type: String,
    require: true,
  },
  tel: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  asunto: {
    type: String,
    require: true,
  },
  filename: {
    type: Array,
    require: true,
  },
});

export const SeguimientosModel = model<SeguimientosSet & Document>('seguimientos', SeguimientosSchema);
