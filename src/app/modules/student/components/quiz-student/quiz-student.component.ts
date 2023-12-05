import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemporisationService } from 'src/app/core/services/temporisation.service';
import { Temporisation } from 'src/app/core/models/temporisation.model';
import { ValidationService } from 'src/app/core/services/validation.service';
import { Validation } from 'src/app/core/models/Validation.model';

@Component({
  selector: 'app-quiz-student',
  templateUrl: './quiz-student.component.html',
  styleUrls: ['./quiz-student.component.css']
})
export class QuizStudentComponent implements OnInit{
  temporisations:Temporisation[]=[]
  validations:Validation[]=[]
  currentTemporidsation:Temporisation
  index:number=0
  lastQuestion: boolean=false;

  constructor(private tempoService:TemporisationService,private validationServ:ValidationService){}

  ngOnInit(): void {
    this.getTemorisationbytest(1);
  }

  getTemorisationbytest(test_id:number){
    this.tempoService.getByTest(test_id).subscribe((data:Temporisation[])=>{
      this.temporisations=data;
      this.currentTemporidsation=this.temporisations[this.index];
      this.getResponsebyQuestion(this.currentTemporidsation.question.id);
    })
  }
  getValidations(question_id:number){
    this.tempoService.getByTest(question_id).subscribe((data:Temporisation[])=>{
      this.temporisations=data;
      this.currentTemporidsation=this.temporisations[this.index];
    })
  }

  nextQuestion(){
    if(this.temporisations.length!=this.index){
      this.currentTemporidsation=this.temporisations[this.index++];
      this.getResponsebyQuestion(this.currentTemporidsation.question.id);
      return
    }
    this.lastQuestion=true
  }


  getResponsebyQuestion(question_id:number){
    this.validationServ.getByQuestion(question_id).subscribe((data:Validation[])=>{
      this.validations=data;
    })
  }
  
}
