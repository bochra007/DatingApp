import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import pour ngModel
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-chat',
  standalone: true, // ✅ Important pour standalone component
  imports: [CommonModule, FormsModule], // ✅ Ajoute ça ici
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  member: any;
  messages: any[] = [];
  newMessage: string = '';

  ngOnInit(): void {
    this.member = {
      id: 1,
      username: 'Anna',
      photoUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
    };

    this.messages = [
      { text: 'Salut ! Comment vas-tu ?', sender: 'other' },
      { text: 'Très bien merci ! Et toi ?', sender: 'me' },
      { text: 'Je vais bien 😊 Tu fais quoi ce soir ?', sender: 'other' },
      { text: 'Pas grand-chose, envie de discuter !', sender: 'me' },
    ];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'me' });
      this.newMessage = '';

      // Fake reply auto (tu peux l'enlever plus tard)
      setTimeout(() => {
        this.messages.push({ text: 'Haha, cool 😄', sender: 'other' });
      }, 1500);
    }
  }
}
