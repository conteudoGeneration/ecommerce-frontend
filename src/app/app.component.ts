import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  logado:boolean

  ngOnInit(): void {
    if (localStorage.getItem('token').includes("Basic")) {
      this.logado = true
    } else {
      this.logado = false
    }
  }

}

