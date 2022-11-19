import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';
import { TrainControlService } from '../_services/train-control.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Inputs
  email!: string;
  password !: string;
  name !: string;
  username !: string;

  // Validaciones
  missingEmail !: boolean;
  missingPassword !: boolean;
  missingName !: boolean;
  missingUsername !: boolean;
  error !: boolean;
  hide = true;
  invalidPassword !: boolean;

  user !: any;
  signUpResponse !: any;

  // Variables usadas con los requests
  

  constructor(private auth : AuthGuardService, private trainControlSrv : TrainControlService, private route : Router) { }

  ngOnInit(): void {
  }

  register(){
    this.restoreFlags();

    if(this.username == null || this.username.length < 1){
      this.missingUsername = true;
    }

    if(this.password == null || this.password.length < 1){
      this.missingPassword = true;
    }

    if(this.email == null || this.email.length < 1){
      this.missingEmail = true;
    }

    if(this.name == null || this.name.length < 1){
      this.missingName = true;
    }

    if(!this.missingPassword && !this.missingUsername){
      
      this.user = {username: this.username, password: this.password, name: this.name, email: this.email}

      this.auth.signUp(this.user).pipe(first())
      .subscribe(response => {
        this.signUpResponse = response;
        console.log(this.user)
        if (this.signUpResponse.data.valid == true){
          this.auth.setUsername(this.username);
          this.route.navigate(['/seats']);
        }
        else{
          this.invalidPassword = true;
        }
      })

      
    }
  }
   

  restoreFlags(){
    this.missingPassword = false;
    this.missingUsername = false;
    this.invalidPassword = false;
    this.missingEmail = false;
    this.missingName = false;
  }

}