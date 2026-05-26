import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventosService } from '../../core/services/eventos.service';
import { ClientesService } from '../../core/services/clientes.service';
import { PedidosService } from '../../core/services/pedidos.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-ingressos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingressos.component.html',
  styleUrls: ['./ingressos.component.css']
})
export class IngressosComponent implements OnInit {

constructor(
  private eventosService: EventosService,
  private clientesService: ClientesService,
  private pedidosService: PedidosService
) {}

  filtroAtivo = 'todos';
  overlayAberto = false;
  compraFinalizada = false;

  nome = '';
  email = '';
  cpf = '';
  telefone = '';

  genreLabel: any = {
    rock: 'Rock',
    jazz: 'Jazz',
    classico: 'Clássico',
    rap: 'Rap'
  };

  eventos: any[] = [];

  carrinho: any[] = [];


  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos() {
    this.eventosService.listar().subscribe(res => {

        this.eventos = res.map((e: any) => ({
      id: e.id,
      nome: e.nome,
      banda: e.banda,
      data: e.data,
      cap: e.capacidade,
      preco: e.precoIngresso,
      vagas: e.capacidade,
      genero: e.genero,
      imagem: e.imagem
}));

    });
  }


  get eventosFiltrados() {
    if (this.filtroAtivo === 'todos') return this.eventos;

    return this.eventos.filter(
      e => e.genero === this.filtroAtivo
    );
  }

  get totalCarrinho() {
    return this.carrinho.reduce(
      (s, c) => s + c.qty, 0
    );
  }

  get valorTotal() {
    return this.carrinho.reduce(
      (s, c) => s + c.qty * c.preco, 0
    );
  }

  filtrar(genero: string) {
    this.filtroAtivo = genero;
  }

  estaNoCarrinho(id:any) {
    return this.carrinho.some(
      c => c.id === id
    );
  }

  addToCart(id: number) {

    const item = this.carrinho.find(
      c => c.id === id
    );

    if (item) {
      item.qty++;
      return;
    }

    const evento = this.eventos.find(
      e => e.id === id
    );

    if (evento) {
      this.carrinho.push({
        ...evento,
        qty: 1
      });
    }
  }

  changeQty(id: number, delta: number) {

    const item = this.carrinho.find(
      c => c.id === id
    );

    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
      this.removeItem(id);
    }
  }

  removeItem(id: number) {
    this.carrinho =
      this.carrinho.filter(
        c => c.id !== id
      );
  }

  openCart() {
    this.overlayAberto = true;
  }

  closeCart() {
    this.overlayAberto = false;
  }

  closeCartOutside(event: any) {
    if (event.target.classList.contains('overlay')) {
      this.closeCart();
    }
  }
  
finalizar() {

  if (!this.nome || !this.email || !this.telefone) {
    alert('Preencha todos os campos');
    return;
  }

  const cliente = {
    nome: this.nome,
    email: this.email,
    telefone: this.telefone,
    cpf: this.cpf
  };

  // busca todos os clientes
  this.clientesService.listar().subscribe((clientes: any[]) => {

    // procura pelo email (pode trocar por cpf)
    const clienteExistente = clientes.find(
      c => c.email === this.email
    );

    if (clienteExistente) {
      // já existe -> usa o id dele
      this.criarPedidos(clienteExistente.id);

    } else {
      // não existe -> cria cliente novo
      this.clientesService.incluir(cliente)
        .subscribe((novoCliente: any) => {
          this.criarPedidos(novoCliente.id);
        });
    }

  });
}

criarPedidos(clienteId: number) {

  const pedidos = this.carrinho.map(item => ({
    clienteId: clienteId,
    eventoId: item.id,
    data: new Date().toISOString().split('T')[0],
    total: item.preco * item.qty
  }));

  const requisicoes = pedidos.map(p =>
    this.pedidosService.incluir(p)
  );

  forkJoin(requisicoes)
    .subscribe(() => {

      this.compraFinalizada = true;
      this.carrinho = [];

      this.nome = '';
      this.email = '';
      this.telefone = '';
      this.cpf = '';

    });
}
}