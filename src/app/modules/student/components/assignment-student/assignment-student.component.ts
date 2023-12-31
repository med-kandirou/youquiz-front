import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/core/models/Assignment.model';
import { STUDENT_ID } from 'src/app/core/services/api.config';
import { AssignementService } from 'src/app/core/services/assignement.service';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assignment-student',
  templateUrl: './assignment-student.component.html',
  styleUrls: ['./assignment-student.component.css']
})
export class AssignmentStudentComponent implements OnInit{
  constructor(private assiService:AssignementService,private router: Router){}

  ngOnInit(): void {
    this.getAssigbyStudent(STUDENT_ID,false);
  }
  assignements:Assignment[]=[]
  getAssigbyStudent(student_id:number,isPassed:boolean){
    this.assiService.getByStudent(student_id,isPassed).subscribe((data:Assignment[])=>{
      this.assignements=data;
    })
  }

  checkDate(assi: Assignment): boolean {
      const currentDate = moment();
      const start = moment(assi.dateStart);
      const end = moment(assi.dateEnd);
      if (currentDate.isBetween(start, end, 'day', '[]')) {
          return true;
      } else {
          return false;
    }
  }

  passTest(assignment_id:number){
    this.router.navigate([`/student/quiz/${assignment_id}`])
  }

}
