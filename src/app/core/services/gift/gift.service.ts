import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datos, IGifts } from '@app/core/interfaces/gifts';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  apiKey = 'qT9irSevErRjBnALZbvEoav7YSh95Tph';
  resultados: Datos [] = [];

  constructor(private http: HttpClient) { }

  buscarGifs(query: string = "Superman", limit: number = 12) {
    console.log(query);
    this.http.get<IGifts>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=${limit}`)
      .subscribe(resp => {
        // console.log(resp);
        this.resultados = resp.data;
        
      })
  }
}
