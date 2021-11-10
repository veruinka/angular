import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  @ViewChild('form') regForm : NgForm;
  vardas:string="Jonas";
  constructor() { }
  user:{
    name:string,
    email:string,
    age:number,
    password:string,
    gender:string
  };
  public minMetai=2020;

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Submitinam formą");
    console.log(this.regForm);
   
    this.user={
      name:this.regForm.value.name,
      email:this.regForm.value.email,
      age:this.regForm.value.age,
      password:this.regForm.value.password,
      gender:this.regForm.value.gender,
    }
    /*
    console.log(this.user);
    this.regForm.reset();
    */
  }

  randomPassword(){
    /*
    this.regForm.form.patchValue({
      password:(Math.random()*100000),
      name:"Jonas"
    });
    */
   /*
    this.regForm.form.setValue({
      password:"",
      name:"",
      email:"",
      age:"",
      sex:"",
      aprasymas:"",
      gender:""
    });
   */
    this.regForm.reset();
   // this.regForm.controls.name.reset();
 
  }

}
