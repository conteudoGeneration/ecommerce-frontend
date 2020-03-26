import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[];

  constructor(private produtosService: ProdutosService, private router: Router) {}

  ngOnInit(): void {
    this.findAllProdutos()
  }

  findAllProdutos(){
       
    this.produtosService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos= resp;
      

    })
  }

 
}
