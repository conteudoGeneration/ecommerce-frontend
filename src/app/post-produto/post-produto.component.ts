import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-post-produto',
  templateUrl: './post-produto.component.html',
  styleUrls: ['./post-produto.component.css']
})
export class PostProdutoComponent implements OnInit {
  
  novo: boolean = false;
  id:number;
  listaCategorias: Categoria[]
  idCat:number;
  categoria: Categoria = new Categoria(0,"")
  produto: Produto = new Produto(0,"",0,0,null)


  constructor(private route: ActivatedRoute, private router: Router, private categoriasService: CategoriasService, private prudutosService: ProdutosService) { }

  ngOnInit() {
    this.findAllCategoria()
    
    this.id = this.route.snapshot.params["id"];
    
    if (this.id == undefined){
      this.novo = true;
    } else {
      this.findById(this.id);
      this.novo = false;
      
    }

  }

  findAllCategoria(){
    this.categoriasService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCategorias= resp;
    })
  }

  getIdCategoria(){
    this.categoriasService.getByIdCategoria(this.idCat).subscribe((resp: Categoria)=>{
      this.categoria = resp;
      console.log("essa é a categoria" + this.categoria.id)
    })
  }

  findById(id:number){
    this.prudutosService.getByIdProduto(this.id).subscribe((resp: Produto)=>{
      this.produto=resp
      console.log("essa é o produto" + this.produto.id)
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  save(){
    if (this.novo) {
      this.produto.categoria.id = this.categoria.id;
      this.prudutosService.postProduto(this.produto).subscribe((resp: Produto)=>{
        this.produto= resp;
        this.router.navigate(['/produtos']);
      })
      
    } else {
      this.prudutosService.putProduto(this.produto).subscribe((resp: Produto)=>{
        this.produto= resp;
        this.router.navigate(['/produtos']);
      })
    }
  }


}
