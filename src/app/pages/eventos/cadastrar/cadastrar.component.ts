import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService } from '../../../core/services/eventos.service';
import { Evento } from '../../../core/services/types/types';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {

  imagemPreview: string | null = null;

  evento: Evento = {
    nome: '',
    data: '',
    banda: '',
    genero: '',
    capacidade: 0,
    precoIngresso: 0,
    imagem: ''
  } as Evento;

  constructor(
    private service: EventosService,
    private router: Router
  ) {}

  private gerarIdNumerico(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  aoSelecionarImagem(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const arquivo = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagemPreview = reader.result as string;
        this.evento.imagem = reader.result as string;
      };

      reader.readAsDataURL(arquivo);
    }
  }

  submeter() {
    this.evento.id = this.gerarIdNumerico();

    this.service.incluir(this.evento).subscribe(() => {
      this.router.navigate(['/eventos-listagem']);
    });
  }
}