import { Component,OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit{

  ngOnInit(): void {
    this.getQuestions(0,3);
  }

  questions:Question[]=[]

  getQuestions(page:number,size:number):void{

  }
  deleteQuestion(question_id:number):void{

  }

}
