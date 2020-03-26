import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  vendedor:boolean
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    if (localStorage.getItem('vendedor') == "true"){
      this.vendedor = true
    } else {
      this.vendedor = false
    }
  }



  logout(){
    localStorage.clear()
    this.router.navigate(['/home'])
    location.assign('/home')   
  }

}
