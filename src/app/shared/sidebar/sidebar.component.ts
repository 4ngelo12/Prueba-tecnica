import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { GiftService } from '@app/core/services/gift/gift.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styles: [
    `.sidebar {
      transition: all .4s ease-in-out;
    }
  
    .sidenav-collapsed {
        width: 0px;
    }
  `
  ],
  providers: [GiftService]
})
export class SidebarComponent {
  collapsed = true;

  // Comparar el tamaño de la pantalla
  private breakpointObserver = inject(BreakpointObserver);
  private isMobile$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  isMobile = toSignal(this.isMobile$, { initialValue: false });

  constructor(private giftService: GiftService) {
  }

  get historial() {
    return this.giftService.getLeerHistorial();
  }

  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }

  eliminarHistorial(): void {
    this.giftService.borrarHistorial();
  }
}
