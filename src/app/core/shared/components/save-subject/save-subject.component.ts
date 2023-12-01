import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/core/models/Question.model';
import { Subject } from 'src/app/core/models/Subject.model';
import { QuestionService } from 'src/app/core/services/question.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-subject',
  templateUrl: './save-subject.component.html',
  styleUrls: ['./save-subject.component.css']
})
export class SaveSubjectComponent {
  constructor(private subjectService:SubjectService) {}

  subjects:Subject[]=[]
  @Input() subjectForm!: FormGroup;
  

  ngOnInit() {
    this.subjectService.getSubjects().subscribe((data:Subject[])=>{
      this.subjects=data;
    })
  }

  
  onSubmit() {
    if (this.subjectForm.valid) {
      const formData: FormGroup = this.subjectForm.value;
      console.log(formData);
        this.subjectService.save(formData).subscribe((data:Subject)=>{
          Swal.fire({
            title: "succes",
            text: `${data.title} Added`,
            icon: "success"
          });
        });
    } else {
      console.log("log");
    }
  }
}
