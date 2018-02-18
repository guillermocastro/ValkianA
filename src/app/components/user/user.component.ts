import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean=false;

  constructor(private dataService:DataService) { 
    console.log('Constructor run');
  }
    

  ngOnInit() {
    console.log('ngOnInit() run');
    this.name='Valkian';
    this.email='valkianceo@outlook.com';
    this.age=55;
    this.address={
      street:'33 Clement Close',
      city:'London',
      state:'Great London'
    }
    this.hobbies=['Sex','Drugs','Rock and Roll'];
    this.hello='Hello';

    this.dataService.getPosts().subscribe((posts)=>{
      //console.log(posts);
      this.posts=posts;
    });
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0;i<this.hobbies.length;i++){
      if (this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
  toggleEdit(){
    this.isEdit=!this.isEdit;
  }
  onClick(){
    this.name='Guillermo Castro';
    console.log('HELLO');
  }
}
interface Address{
    street:string;
    city:string;
    state:string;
}
interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}