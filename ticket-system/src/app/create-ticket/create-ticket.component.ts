import { AuthServiceService } from './../auth-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  formGroupss:FormGroup;
  constructor(private http:HttpClient,private authService:AuthServiceService,private router: Router) { }

  ngOnInit(): void {
    this.formGroupss = new FormGroup({
      issue: new FormControl(),
      comment: new FormControl(),
      priority: new FormControl()
   });
  }
  createTicket(){
    this.authService.createTicket(this.formGroupss.value).subscribe(result=>{
      console.log(result);
    });
    this.router.navigateByUrl("/usertickets");
  }

}
