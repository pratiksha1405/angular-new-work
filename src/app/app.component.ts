import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  User:any
  constructor(){
 this.User = 
 [{UserId:101,
  Name:"Ross",
  City:"Chennai",
  Age:28,
  Salary:20000
 },
 {UserId:178,
  Name:"Chandler",
  City:"Mumbai",
  Age:29,
  Salary:15000
 },
 {UserId:156,
 Name:"Joey",
 City:"Pune",
 Age:30,
 Salary:25000
},
{UserId:203,
Name:"Rachel",
City:"Lucknow",
Age:25,
Salary:30000
},
{UserId:621,
Name:"Monica",
City:"Delhi",
Age:31,
Salary:28000
},
{UserId:534,
Name:"Pheobe",
City:"Kanpur",
Age:35,
Salary:19000
}
 ]};


delFunc(event){
  let obj;
this.obj+=event.target.obj+ ' | ';

alert("Enter the Id to delete the user");

         
}

}
