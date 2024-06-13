import { Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent {

}
