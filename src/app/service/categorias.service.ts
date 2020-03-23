import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getAllCategorias(){
    return this.http.get("http://localhost:8080/categorias")
  }

  getByIdCategoria(id: number){
    return this.http.get(`http://localhost:8080/categorias/${id}`)
  }

  postCategoria(categoria: Categoria){
    return this.http.post("http://localhost:8080/categorias", categoria)
  }

  putCategoria( categoria: Categoria){
    return this.http.put("http://localhost:8080/categorias", categoria)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:8080/categorias/${id}`)
  }

  findByName(descricao:string){
    return this.http.get(`http://localhost:8080/categorias/nome/${descricao}`)
  }
 
}
