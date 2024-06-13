import { Component } from '@angular/core';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GiftsComponent } from './Gifts/gifts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, GiftsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tecnica';
}
