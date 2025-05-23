import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tienda del Diego';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.init().then((authenticated) => {
      console.log('✅ Usuario autenticado:', authenticated);
    });
  }
}
