import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
user$!:Observable<User>;

constructor(private usersService:UsersService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params=>{
        const id = Number(params.get('id'));
        return this.usersService.getUserById(id);
      })
    )
  }
}
