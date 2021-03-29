import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup
  constructor(private authService:AuthServiceService,private router: Router) { }

  ngOnInit(): void {
      this.initForm()
  }

  initForm() {
    this.formGroup = new FormGroup(
      {
       username: new FormControl('',[Validators.required]),
       password: new FormControl('',[Validators.required]) 
      }
    )
  }
  loginProcess() {
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result){
          console.log(result);
          this.router.navigateByUrl("/dashboard");          
          // alert(result.token);
        } else {
            console.log(result);
            // this.router.navigateByUrl("/home");
            // alert(result.token)
        }
      })
    }
  }
}
