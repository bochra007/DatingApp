import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {

  members = [
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
    },
    {
      id: 4,
      username: 'walid.dev',
      age: 30,
      gender: 'male',
      city: 'Gabès',
      country: 'Tunisia',
      photoUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
