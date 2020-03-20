import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-find-all-produto',
  templateUrl: './find-all-produto.component.html',
  styleUrls: ['./find-all-produto.component.css']
})
export class FindAllProdutoComponent implements OnInit {

  listaProdutos: Produto[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produto[])=>{
      console.log(resp);
      this.listaProdutos= resp;
    },err =>{
        alert(`Erro cod: ${err.message}`);
    })
  }

}
