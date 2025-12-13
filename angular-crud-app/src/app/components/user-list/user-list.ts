import { Component } from '@angular/core';
import { UserService } from '../../services/user';
import { CommonModule, NgFor } from '@angular/common';

@Component({//decorator
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  standalone: true
})
export class UserList {
  users : any= [];

  constructor(private userService: UserService) {}//DI
  ngOnInit() {//callback method
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      
      this.users = data;
    });
  }

}