import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  buscar!: string;

  busqueda() {
    // this.animappService.buscarGifs(this.buscar);
    this.buscar='';
  }
}
