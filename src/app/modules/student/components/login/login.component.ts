import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: any;
  constructor(private fb:FormBuilder,private stdServ:StudentService){}
  ngOnInit(): void {
    this.initform();
  }

  
  initform():void{
    this.loginForm=this.fb.group({
      firstName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    this.stdServ.login(this.loginForm.value).subscribe((data:any)=>{
      console.log(data);
    })
  }

}
