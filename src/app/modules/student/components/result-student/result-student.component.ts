import { Component } from '@angular/core';
import { Assignment } from 'src/app/core/models/Assignment.model';
import { STUDENT_ID } from 'src/app/core/services/api.config';
import { AssignementService } from 'src/app/core/services/assignement.service';

@Component({
  selector: 'app-result-student',
  templateUrl: './result-student.component.html',
  styleUrls: ['./result-student.component.css']
})
export class ResultStudentComponent {
  constructor(private assiService:AssignementService){}

  ngOnInit(): void {
    this.getAssigbyStudent(STUDENT_ID,true);
  }
  assignements:Assignment[]=[]
  getAssigbyStudent(student_id:number,isPassed:boolean){
    this.assiService.getByStudent(student_id,isPassed).subscribe((data:Assignment[])=>{
      this.assignements=data;
    })
  }

}
