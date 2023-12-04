import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/core/models/Assignment.model';
import { STUDENT_ID } from 'src/app/core/services/api.config';
import { AssignementService } from 'src/app/core/services/assignement.service';
import * as moment from 'moment';
@Component({
  selector: 'app-assignment-student',
  templateUrl: './assignment-student.component.html',
  styleUrls: ['./assignment-student.component.css']
})
export class AssignmentStudentComponent implements OnInit{
  constructor(private assiService:AssignementService){}

  ngOnInit(): void {
    this.getAssigbyStudent(STUDENT_ID);
  }
  assignements:Assignment[]=[]
  getAssigbyStudent(student_id:number){
    this.assiService.getByStudent(student_id).subscribe((data:Assignment[])=>{
      this.assignements=data;
      console.log(new Date("2024-11-16T00:00:00").toLocaleTimeString())
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
}
