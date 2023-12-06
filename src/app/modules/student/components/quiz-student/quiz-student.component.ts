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

  temporisations:Temporisation[]
  validations:Validation[]
  
  currentTemporidsation:Temporisation
  index:number=0
  lastQuestion: boolean=false;
  constructor(private tempoService:TemporisationService,private validationServ:ValidationService){}

  ngOnInit(): void {
    this.getTemorisationbytest(1);
  }
  totalpoint:number=0; 
  
  selectResponse(question_id: number, response_id: number) {
    if(this.currentTemporidsation.question.type.toString()=='MulipleAnswer'){
      var ele = document.getElementById(response_id.toString());
      if (ele) {
        if (ele.classList.contains("response")) {
            ele.classList.remove("response");
        } else {
            ele.classList.add("response");
        }
      } 
    }
    else{
      var elements = document.querySelectorAll(".response");
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("response");
      }
      document.getElementById(response_id.toString())?.classList.add("response");
    }
  }
  
    

  getTemorisationbytest(test_id:number){
    this.tempoService.getByTest(test_id).subscribe((data:Temporisation[])=>{
      this.temporisations=data;
      this.currentTemporidsation=this.temporisations[this.index];
      this.getResponsebyQuestion(this.currentTemporidsation.question.id);
    })
  }

  myresponses: Validation[][] = [];
  validation: Validation;
  nextQuestion(question_id: number) {
    let elements = document.querySelectorAll(".response");
    for (let i = 0; i < elements.length; i++) {
        let validation = this.validations.filter(item =>
            item.question && item.response &&
            item.question.id === question_id && item.response.id === Number(elements[i].getAttribute("id"))
        );
        if (validation.length > 0) {
            this.myresponses.push(validation);
            console.log(this.myresponses);
        }
    }
    //to next
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

  //get response of a question
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
