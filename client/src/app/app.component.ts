import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
})
export class AppComponent implements OnInit {
  
  private accountService = inject(AccountService);


  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(): void {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }


}
