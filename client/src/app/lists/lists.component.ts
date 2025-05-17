import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, RouterModule , FormsModule],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  likedByUsers = [
    {
      id: 1,
      username: 'lina22',
      age: 24,
      gender: 'female',
      city: 'Tunis',
      country: 'Tunisia',
      photoUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    {
      id: 2,
      username: 'amine99',
      age: 27,
      gender: 'male',
      city: 'Sfax',
      country: 'Tunisia',
      photoUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
    },
    {
      id: 3,
      username: 'sarah.m',
      age: 23,
      gender: 'female',
      city: 'Sousse',
      country: 'Tunisia',
      photoUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    }
  ];

  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  get filteredUsers() {
    if (!this.searchTerm) return this.likedByUsers;
    return this.likedByUsers.filter(user =>
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
