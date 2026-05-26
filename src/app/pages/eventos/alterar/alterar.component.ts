import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../../core/services/eventos.service';
import { Evento } from '../../../core/services/types/types';

@Component({
  selector: 'app-alterar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alterar.component.html',
  styleUrl: './alterar.component.css'
})
export class AlterarComponent implements OnInit {

  form!: FormGroup;
  idEvento!: number | string;
  imagemPreview: string | null = null;   // <-- AQUI

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: EventosService
  ) {}

  ngOnInit(): void {
    this.idEvento = this.route.snapshot.paramMap.get('id')!;

    this.form = this.fb.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      banda: ['', Validators.required],
      genero: ['', Validators.required],
      capacidade: [0, Validators.required],
      precoIngresso: [0, Validators.required],
      imagem: ['']
    });

    this.service.buscarPorId(this.idEvento).subscribe((evento: Evento) => {
      if (evento) {
        this.form.patchValue(evento);
        this.imagemPreview = evento.imagem || null;
      }
    });
  }

  aoSelecionarImagem(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const arquivo = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagemPreview = reader.result as string;

        this.form.patchValue({
          imagem: reader.result as string
        });
      };

      reader.readAsDataURL(arquivo);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const eventoAtualizado: Evento = {
        id: Number(this.idEvento),
        ...this.form.value
      };

      this.service.editar(eventoAtualizado).subscribe(() => {
        this.router.navigate(['/eventos-listagem']);
      });
    }
  }
}