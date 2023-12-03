import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Level } from 'src/app/core/models/Level.model';
import { Question } from 'src/app/core/models/Question.model';
import { Subject } from 'src/app/core/models/Subject.model';
import { LevelService } from 'src/app/core/services/level.service';
import { QuestionService } from 'src/app/core/services/question.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-question',
  templateUrl: './save-question.component.html',
  styleUrls: ['./save-question.component.css']
})
export class SaveQuestionComponent {

  constructor(private levelService:LevelService,private subjectService:SubjectService,private serviceQuestion:QuestionService) {}

  levels:Level[]
  subjects:Subject[]
  @Input() questionForm: FormGroup;
  

  ngOnInit() {
    this.levelService.getLevels().subscribe((data:Level[])=>{
      this.levels=data;
    })
    this.subjectService.getSubjects().subscribe((data:Subject[])=>{
      this.subjects=data;
    })
  }

  @Output() close = new EventEmitter<void>();

  closeModel():void{
    this.close.emit();
  }
  
  onSubmit() {
    if (this.questionForm.valid) {
      const formData: FormGroup = this.questionForm.value;
        this.serviceQuestion.save(formData).subscribe((data:Question)=>{
          Swal.fire({
            title: "succes",
            text: `${data.questionText} ajouté`,
            icon: "success"
          });
        });
        this.closeModel();
    } else {
      console.log("log");
    }

  }
}
