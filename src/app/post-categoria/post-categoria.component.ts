import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {
  
  id:number;
  novo: boolean = false;
  categoria: Categoria = new Categoria()

  constructor(private route: ActivatedRoute, private router:Router, private categoriasService: CategoriasService) { }

  ngOnInit() {
    
    if (localStorage.getItem('token').includes("Basic") && localStorage.getItem('vendedor') == "false" ){
      alert('Faça o login primeiro')
      this.router.navigate(['/login'])
    }else {
        this.id = this.route.snapshot.params["id"];
    
      if (this.id == undefined){
        this.novo = true;
      } else {
        this.findById(this.id);
        this.novo = false;
        
      } 
    }
    
  
  }

  

  findById(id:number){
    this.categoriasService.getByIdCategoria(this.id).subscribe((resp: Categoria)=>{
      this.categoria=resp
      console.log(this.categoria);
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  save(){
    if (this.novo) {
      this.categoriasService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
        this.categoria= resp;
        this.router.navigate(['/categorias']);
      })
      
    } else {
      this.categoriasService.putCategoria(this.categoria).subscribe((resp: Categoria)=>{
        this.categoria= resp;
        this.router.navigate(['/categorias']);
      })
    }
  }

}
