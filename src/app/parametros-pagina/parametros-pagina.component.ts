import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros-pagina',
  templateUrl: './parametros-pagina.component.html',
  styleUrls: ['./parametros-pagina.component.css']
})
export class ParametrosPaginaComponent implements OnInit{

  id: number | null = null
  nome: string | null = ''
  idade: number | null = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id'))
      })

      this.route.queryParamMap.subscribe(params => {
        this.nome = params.get('nome')
        this.idade = Number(params.get('idade'))
      })
  }
}
