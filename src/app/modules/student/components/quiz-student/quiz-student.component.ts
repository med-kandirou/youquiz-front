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
  totalpoint:number=0; 
  selectResponse(question_id: number, response_id: number) {
    let validation = this.validations.find(item =>
      item.question && item.response &&
      item.question.id === question_id && item.response.id === response_id
    );
    if(this.currentTemporidsation.question.type.toString()=='MulipleAnswer'){
      var ele = document.getElementById(response_id.toString());
      if (ele) {
        if (ele.classList.contains("bg-slate-300")) {
            ele.classList.remove("bg-slate-300");
        } else {
            ele.classList.add("bg-slate-300");
        }
      } 
    }
    else{
      var elements = document.querySelectorAll(".response");
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("bg-slate-300");
      }
      document.getElementById(response_id.toString())?.classList.add("bg-slate-300");
    }
    
  }
  
    

  getTemorisationbytest(test_id:number){
    this.tempoService.getByTest(test_id).subscribe((data:Temporisation[])=>{
      this.temporisations=data;
      this.currentTemporidsation=this.temporisations[this.index];
      this.getResponsebyQuestion(this.currentTemporidsation.question.id);
    })
  }


  nextQuestion(){
    if(this.temporisations.length>this.index){
      this.index++;
      this.currentTemporidsation=this.temporisations[this.index];
      this.getResponsebyQuestion(this.currentTemporidsation.question.id);
      if(this.temporisations.length-1==this.index){
        this.lastQuestion=true
      }
      return
    }
  }


  getResponsebyQuestion(question_id:number){
    this.validationServ.getByQuestion(question_id).subscribe((data:Validation[])=>{
      this.validations=data;
    })
    this.startTimer(this.currentTemporidsation.time);
  }

  restOftime:number;
  startTimer(time:number) {
    this.restOftime=time*60
      setInterval(() => {
        if(this.restOftime > 0) {
          this.restOftime--;
        }
        else if(this.restOftime == 0) {
          this.restOftime==0;
        }
      },1500)
  }


}
