import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, RegisterComponent], // ✅ nécessaire pour *ngIf
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] ,
})
export class HomeComponent  implements OnInit {
  http = inject(HttpClient);
  registerMode = false;
  users:any;

  ngOnInit(): void {
      this.getUser();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

    getUser() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed")
    });
  }


  cancelRegister(event: boolean){
    this.registerMode = event ; 
  }

}
