import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  questionForm: FormGroup =this.fb.group({});

  constructor(private fb: FormBuilder,private levelService:LevelService,private subjectService:SubjectService,private serviceQuestion:QuestionService) {}

  levels:Level[]=[]
  subjects:Subject[]=[]

  ngOnInit() {
    this.initForm();
    this.levelService.getLevels().subscribe((data:Level[])=>{
      this.levels=data;
    })
    this.subjectService.getSubjects().subscribe((data:Subject[])=>{
      this.subjects=data;
    })
  }

  private initForm() {
    this.questionForm = this.fb.group({
      numberOfResponses: [null, [Validators.required, Validators.min(0)]],
      numberOfCorrectResponses: [null, [Validators.required, Validators.min(0)]],
      questionText: ['', Validators.required],
      type: ['', Validators.required],
      subject_id: ['', Validators.required],
      level_id: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      const formData: FormData = this.questionForm.value;
      this.serviceQuestion.save(formData).subscribe((data:Question)=>{
        Swal.fire({
          title: "succes",
          text: `${data.questionText} ajouté`,
          icon: "success"
        });
      });
    
    } else {
      console.log("log");
    }
  }
}
