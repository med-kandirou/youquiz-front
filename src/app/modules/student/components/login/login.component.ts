import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/core/models/Student.model';
import { StudentService } from 'src/app/core/services/student.service';
import { login } from 'src/app/core/store/actions/student.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: any;

  student$: any;
  constructor(private fb:FormBuilder,private stdServ:StudentService,private store: Store<{ student: Student }>,private _router: Router){
    this.student$ = store.select('student');
  }
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
      this.store.dispatch(login(data));
      this.store.select('student').subscribe(data=>{
        console.log(data.code)
      })
      this._router.navigate(['student/chat'])
    })
  }

}
