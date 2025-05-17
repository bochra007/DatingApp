import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports:  [CommonModule, RouterModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent  implements OnInit {

  members = [
    { id: 1, username: 'lina22', photoUrl: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { id: 2, username: 'amine99', photoUrl: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { id: 3, username: 'sarah.m', photoUrl: 'https://randomuser.me/api/portraits/women/12.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

