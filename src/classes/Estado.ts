import { Categoria } from './Categoria'
import { Ingreso } from './Ingreso'
import { LogDiario } from './LogDiario'

export class Estado {
  form = false;
  currentForm = '';
  catFormData: Categoria = {};
  logFormData: LogDiario = {};
  ingFormData: Ingreso = {};
  cats: Categoria[] = [];
  ings: Ingreso[] = [];
  logs: LogDiario[] = [];
};
