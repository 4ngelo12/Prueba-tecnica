import { Component } from '@angular/core';
import { GiftService } from '@app/core/services/gift/gift.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
  providers: [GiftService]
})
export class GiftsComponent {
  buscar!: string;

  constructor(private giftServices: GiftService) {
    this.giftServices.buscarGifs();
  }

  busqueda() {
    this.giftServices.buscarGifs(this.buscar);
    this.buscar = '';
  }

  get resultados() {
    return this.giftServices.resultados;
  }
}
