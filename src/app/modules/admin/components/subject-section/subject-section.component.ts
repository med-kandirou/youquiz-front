import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/core/models/Subject.model';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-subject-section',
  templateUrl: './subject-section.component.html',
  styleUrls: ['./subject-section.component.css']
})
export class SubjectSectionComponent implements OnInit{

  constructor(private service:SubjectService){}

  ngOnInit(): void {
    this.getSubjects();
  }

  subjects:Subject[]=[]

  getSubjects():void{
    this.service.getSubjects().subscribe((data:Subject[])=>{
      this.subjects=data;
      console.log(this.subjects);
    })
  }

  deleteSubject(Subject_id:number):void{
    this.service.delete(Subject_id).subscribe((data:Subject)=>{
      console.log(data);
      this.getSubjects();
    })
  }

}
