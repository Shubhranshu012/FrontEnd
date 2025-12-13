import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-add.html',
  styleUrls: ['./user-add.css'],
})
export class UserAdd {
  user: any = { name: '', email: '' };

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser(this.user).subscribe(() => {
      alert('User added');
      this.user = { name: '', email: '' };
      window.history.back();
    });
  }
}