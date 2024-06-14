import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datos, IGifts } from '@app/core/interfaces/gifts';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  apiKey = 'WWXS9ODICKkWJvxptRFeu8bdwCqtoWbW';
  resultados: Datos[] = [];
  historial: string[] = [];

  constructor(private http: HttpClient) { }

  buscarGifs(query: string = "Superman", limit: number = 12) {
    this.http.get<IGifts>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=${limit}`)
      .subscribe(resp => {
        this.agregarHistorial(query);
        this.resultados = resp.data;
    })
  }

  agregarHistorial(busqueda: string) {
    if (this.historial.includes(busqueda) && busqueda !== '') {
      this.historial = this.historial.filter(h => h !== busqueda);
      this.historial.unshift(busqueda); 
    } else {
      this.historial.unshift(busqueda);
    }

    this.historial = this.historial.splice(0, 10);
    localStorage.setItem('historial', this.historial.join(','));
  }

  getLeerHistorial() {
    const historial = localStorage.getItem('historial') || '';
    this.historial = historial.split(',');
    return this.historial;
  }

  borrarHistorial() {
    localStorage.removeItem('historial');
    this.historial = [];
  }
}
