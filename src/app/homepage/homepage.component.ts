import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router: Router) {} // o que isso aqui faz?

  carregarPagina() {
    this.router.navigate(['sobre'])
  }
}
