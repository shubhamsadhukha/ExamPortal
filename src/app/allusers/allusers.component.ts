import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

export interface user {
    first_name: String,
    last_name: String,
    email: String,
    role: String
}


@Component({
    selector: 'app-allusers',
    templateUrl: './allusers.component.html',
    styleUrls: ['./allusers.component.css']
  })
  export class AllUsersComponent implements OnInit {

    private userData:user[] = [];
    private errorMessage:any = '';

      ngOnInit(){
          this.getUserData();
      }

      constructor(public userservice : UserService){

    }

    public getUserData(): void {
      this.userservice.getAllUsers()
        .map(response => response)
        .subscribe(allusers => this.userData = allusers, 
                   error => this.errorMessage = <any>error);
    }
  }