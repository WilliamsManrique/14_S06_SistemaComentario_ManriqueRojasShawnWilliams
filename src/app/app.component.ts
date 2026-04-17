import { Component } from '@angular/core';
import { ComentariosComponent } from './comentarios/comentarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComentariosComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
