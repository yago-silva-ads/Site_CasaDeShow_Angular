export interface Evento {
  id?: number;
  nome: string;
  data: string;
  banda: string;
  capacidade: number;
  precoIngresso: number;
  genero: string;
  imagem?: string;
}

export interface Cliente {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
}
export interface Pedido {
  id?: number;
  clienteId: number;
  eventoId: number;
  data: string;
  total: number;
}