import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FindAllProdutoComponent } from './find-all-produto/find-all-produto.component';
import { HttpClientModule } from '@angular/common/http'; //import do HttpClientModule
import { FormsModule } from '@angular/forms';
import { FindAllCategoriaComponent } from './find-all-categoria/find-all-categoria.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FindAllProdutoComponent,
    FindAllCategoriaComponent,
    PostCategoriaComponent,
    DeleteCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
