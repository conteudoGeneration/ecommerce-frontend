import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProdutos(){
    return this.http.get("http://localhost:8080/produtos")
  }
  getByIdProduto(id: number){
    return this.http.get(`http://localhost:8080/produtos/${id}`)
  }

  postProduto(produto: Produto){
    return this.http.post("http://localhost:8080/produtos", produto)
  }

  putProduto( produto: Produto){
    return this.http.put("http://localhost:8080/produtos", produto)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:8080/produtos/${id}`)
  }

  findByName(nome:string){
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}`)
  }
}
