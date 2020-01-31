import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/model';
import { UserService } from './user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html'
})
export class UserComponentComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router)
   { }
  username:string;

  user:IUser={};

  ngOnInit() {
  }

  login(user:IUser)
  {
      this.userService.login(user).subscribe((res)=>{

        console.log("res",res);
        
          this.router.navigate(['welcome']);

      });
  }

}
