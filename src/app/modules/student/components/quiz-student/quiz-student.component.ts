import { Component, OnInit } from '@angular/core';
import { TemporisationService } from 'src/app/core/services/temporisation.service';
import { Temporisation } from 'src/app/core/models/temporisation.model';
import { ValidationService } from 'src/app/core/services/validation.service';
import { Validation } from 'src/app/core/models/Validation.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(private tempoService:TemporisationService,private validationServ:ValidationService,private _router: Router){}

  ngOnInit(): void {
    this.getTemorisationbytest(1);
  }
  totalpoint:number=0; 

  
  selectResponse(response_id: number) {
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

  getmesResponses(question_id: number) {
    const elements = document.querySelectorAll(".response");
    for (let i = 0; i < elements.length; i++) {
        let validation = this.validations.find(item =>
            item.question.id === question_id && item.response.id === Number(elements[i].getAttribute("id"))
        );
        if (validation) {
            this.myresponses.push({id: validation.id,response: validation.response,question: validation.question
            });
        }
    }
  }

  myresponses: Validation[]=[];
  nextQuestion(question_id: number) {
    this.getmesResponses(question_id);
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
    clearInterval(this.intervalID);
    this.startTimer(this.currentTemporidsation.time);
  }

  restOftime:number;
  intervalID:any
  startTimer(time:number) {
    this.restOftime=time*60
      this.intervalID=setInterval(() => {
        if(this.restOftime > 0) {
          this.restOftime--;
        }
        if(this.restOftime<=10){
          document.querySelector("#timer")?.classList.remove("bg-green-400")
          document.querySelector("#timer")?.classList.add("bg-red-400")
        }
        if(this.restOftime==0){
          clearInterval(this.intervalID);
          this.nextQuestion(this.temporisations[this.index].question.id);
        }
      },1000)
  }

  ids_validation:number[]=[]
  finish(question_id:number) {
    this.getmesResponses(question_id);
    this.myresponses.filter(res=>{
      this.ids_validation.push(res.id);
    })
    this.validationServ.validateResponses(this.ids_validation).subscribe((score:number)=>{
      var icon:any
      var text:any
      var title:any
      if(this.currentTemporidsation.test.canSeeResult){
        if(score>=this.currentTemporidsation.test.successScore){
          icon="success";
          text="You successfully passed the quiz with a score: "+score+" / "+this.currentTemporidsation.test.successScore+"";
          title="Good job!"
        }else{
          icon="error";
          text="You lost the quiz with a score: "+score+" / "+this.currentTemporidsation.test.successScore+"";
          title="Oops..."
        }
      }
      else{
        icon="question";
        text="We will provide you with the results shortly";
        title="You passed the exam"
      }
      Swal.fire({
        title: title,
        text: text,
        icon: icon
      }).then((result) => {
        if (result.isConfirmed) {
          this._router.navigate(['student/assignement'])
        }
      })
      
    });
  }
    


}
