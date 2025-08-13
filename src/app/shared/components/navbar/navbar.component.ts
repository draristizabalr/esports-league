import { Component, computed, inject, signal } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // Properties
  readonly themesOptions = ['default', 'retro', 'cyberpunk', 'valentine', 'aqua'];

  // Signals
  theme = signal(window.localStorage.getItem('theme') ?? 'default');

  // Computed
  routes = computed(() => routes.filter((route) => route.path !== '**' && route.path !== ''));

  toggleTheme(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const theme = checkbox.value;
    this.theme.set(theme);

    window.localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle(theme);
  }
}
