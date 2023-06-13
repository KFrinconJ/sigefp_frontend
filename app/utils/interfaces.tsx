//Interfaces Generales

export interface User {
  nombre: string;
  apellido: string;
  cargo: string;
  password: string;
  mail: string;
  rol_id: string;
  contrato_id: number | null;
  vinculacion: number | null;
}

export interface UserDelete {
  mail: string;
  id: string;
}

export interface Oficina {
  id: string;
  nombre: string;
  usuario: string;
}

export interface Adscripcion {
  id: string;
  nombre: string;
  usuario: string;
}

export interface ProgramaAcademico {
  id: string;
  nombre: string;
  nivel: string;
  adscripcion: string;
  modalidad: string;
  area: string;
}

export interface PeriodoAcademico {
  id: string;
  fechaInicial: Date;
  fechaFinal : Date;
  estado: boolean;
  cantidadSemanas: number;
  nombre: string;
  horas: number;
}

export interface FuncionSustantiva {
  id:string;
  nombre: string;
  programaAcademico: string;
  oficina: string;
}


export interface SubFuncionSustantiva {
  id: string;
  nombre: string;
  horas: number;
  periodoAcademico: string;
  funcionSustantiva: string;
}
// Interfaces para los Inputs

interface BaseInputProps {
  id: string;
  label: string;
  value: string | number;
  name: string;
  htmlFor: string;
  onChange: (value: string) => void;
}

//Input Type Select

export interface SelectFieldProps extends BaseInputProps {
  apiUrl: string;
}

export interface Option {
  id: string;
  title: string;
}
