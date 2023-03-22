import IRoles from "./IRoles";

export default interface IUsuarios {
  idusuario:   number;
  nombre:      string;
  email:       string;
  contrasenia: string;
  foto:        string;
  estado:      number;
  edad:        number;
  descripcion: string;
  idrol:       number;
  createdAt:   Date;
  updatedAt:   Date;
  rol:         IRoles
}