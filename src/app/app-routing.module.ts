import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from  './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FindAllProdutoComponent } from './find-all-produto/find-all-produto.component';
import { FindAllCategoriaComponent } from './find-all-categoria/find-all-categoria.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { FindByNameCategoriaComponent } from './find-by-name-categoria/find-by-name-categoria.component';
import { PostProdutoComponent } from './post-produto/post-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:  'full' },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path:'produtos', component: FindAllProdutoComponent },
  { path:'categorias', component: FindAllCategoriaComponent },
  { path:'postCategorias', component: PostCategoriaComponent },
  { path:'postCategorias/:id', component: PostCategoriaComponent },
  { path:'deleteCategoria/:id', component: DeleteCategoriaComponent },
  { path: 'findByNameCategoria', component: FindByNameCategoriaComponent },
  { path:'postProdutos', component: PostProdutoComponent },
  { path:'postProdutos/:id', component: PostProdutoComponent },
  { path:'deleteProduto/:id', component: DeleteProdutoComponent }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
