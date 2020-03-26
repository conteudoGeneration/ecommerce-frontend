import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = new UsuarioLogin ()

  constructor(private router: Router, private authService: AuthService, private location: Location) { }

  ngOnInit() {

    
  }

  logar(){
    this.authService.logar(this.userLogin).subscribe((resp: UsuarioLogin)=>{
      this.userLogin = resp
      localStorage.setItem("token", this.userLogin.token)
      localStorage.setItem("vendedor", this.userLogin.vendedor.toString())
      this.router.navigate(['/home'])
      location.assign('/home')     
    }, err =>{
      alert('campos inválidos')
    }
    )}
}
