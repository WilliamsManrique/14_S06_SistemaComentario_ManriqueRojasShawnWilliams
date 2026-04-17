import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

  comentarios: any[] = [];
  contador = 0;

  nuevoComentario = {
    name: '',
    email: '',
    body: ''
  };

  mensaje = '';

  constructor(private apiService: ApiService) {
    this.obtenerComentarios();
  }

  obtenerComentarios() {
    this.apiService.getComentarios().subscribe(data => {
      this.comentarios = data;
      this.contador = data.length;
    });
  }


  enviarComentario() {

    const comentario = {
      name: this.nuevoComentario.name,
      email: this.nuevoComentario.email,
      body: this.nuevoComentario.body,
      fecha: new Date().toLocaleString()
    };

    this.apiService.crearComentario(comentario).subscribe(() => {

      this.comentarios.unshift(comentario);
      this.contador = this.comentarios.length;

      this.mensaje = "✔ Comentario enviado correctamente";

      this.nuevoComentario = { name: '', body: '', email: '' };

      setTimeout(() => this.mensaje = '', 3000);
    });
  }

  eliminarComentario(index: number) {
  this.comentarios.splice(index, 1);
  this.contador = this.comentarios.length;
  this.mensaje = "🗑 Comentario eliminado";

  setTimeout(() => this.mensaje = '', 2000);
}

}
