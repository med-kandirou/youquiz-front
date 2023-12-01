import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/core/models/Subject.model';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-subject-section',
  templateUrl: './subject-section.component.html',
  styleUrls: ['./subject-section.component.css']
})
export class SubjectSectionComponent implements OnInit{

  constructor(private service:SubjectService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.initform()
    this.getSubjects();
  }

  subjects:Subject[]=[]
  subjectForm!:FormGroup

  initform():void{
    this.subjectForm=this.fb.group({
      id: [0],
      title: [null, [Validators.required, Validators.min(0)]],
      parent_id: [null],
    });
  }

  getOne(subject_id:number):void{
    this.service.getOne(subject_id).subscribe((data:Subject)=>{
        this.subjectForm=this.fb.group({
        id: [data.id],
        title: [data.title, [Validators.required, Validators.min(0)]],
        parent_id: [data.parent?.id ?? null]
      });
    })
  }

  getSubjects():void{
    this.service.getSubjects().subscribe((data:Subject[])=>{
      this.subjects=data;
    })
  }

  deleteSubject(Subject_id:number):void{
    this.service.delete(Subject_id).subscribe((data:Subject)=>{
      this.getSubjects();
    })
  }

}
