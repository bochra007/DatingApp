import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: any;
  members = [
    {
      id: 1,
      username: 'lina22',
      age: 24,
      gender: 'female',
      city: 'Tunis',
      country: 'Tunisia',
      photoUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
      bio: "Je suis une développeuse passionnée par la tech et les voyages."
    },
    {
      id: 2,
      username: 'amine99',
      age: 27,
      gender: 'male',
      city: 'Sfax',
      country: 'Tunisia',
      photoUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
      bio: "J'adore le sport et la programmation."
    },
    // Ajoute d'autres membres si besoin
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.member = this.members.find(m => m.id === id);
  }

    goToChat(): void {
    this.router.navigate(['/chat']);
    // Pour une navigation vers un chat privé : this.router.navigate(['/messages', this.member.id]);
  }
}
