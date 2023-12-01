import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/core/models/Question.model';
import { Media } from 'src/app/core/models/Media.model';
import { QuestionService } from 'src/app/core/services/question.service';
import { MediaService } from 'src/app/core/services/media.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-media',
  templateUrl: './save-media.component.html',
  styleUrls: ['./save-media.component.css']
})
export class SaveMediaComponent {
  constructor(private fb: FormBuilder,private questionService:QuestionService,private mediaService:MediaService) {}

  questions:Question[]=[]
  @Input() mediaForm!: FormGroup;
  

  ngOnInit() {
    this.questionService.all().subscribe((data:Question[])=>{
      this.questions=data;
    })
    
  }

  
  onSubmit() {
    if (this.mediaForm.valid) {
      const formData: FormGroup = this.mediaForm.value;
      console.log(formData);
        this.mediaService.save(formData).subscribe((data:any)=>{
          Swal.fire({
            title: "succes",
            text: `media ajouté`,
            icon: "success"
          });
        });
    } else {
      console.log("log");
    }
  }
}
