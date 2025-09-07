import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
users$!:Observable<User[]>;

constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users$=this.usersService.getUsers();
  }
}


