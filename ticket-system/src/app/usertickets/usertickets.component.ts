import { AuthServiceService } from './../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: number;
  position: string;
  weight: string;
  symbol: string;
  category:string;
  priority:string;
}


@Component({
  selector: 'app-usertickets',
  templateUrl: './usertickets.component.html',
  styleUrls: ['./usertickets.component.css']
})
export class UserticketsComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    // {position: "1", name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
  ];
  response: any;
  temp:any;
  dataSource:any;
  constructor(private authService:AuthServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.Users()
  }
  Users() {
    this.authService.getUsers().subscribe(users=>{
      if(users){
        console.log(users);
        this.response = users.map((user)=>{
          // console.log(user);
          this.temp= { position:user[0], name:user[1], weight: user[2], symbol: user[3],priority:user[4],category:user[5]};
          // console.log({ position:user[0], name:user[1], weight: user[2], symbol: user[3]});
          this.ELEMENT_DATA.push(this.temp);
          console.log(this.ELEMENT_DATA);
          this.dataSource = this.ELEMENT_DATA;
        });
        // this.router.navigateByUrl("/home");          
        // alert(result.token);
      } else {
          console.log(users);
          // this.router.navigateByUrl("/home");
          // alert(result.token)
      }
    })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','priority',"category"];
}
