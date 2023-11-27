import { Component,OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit{

  constructor(private service:QuestionService){}

  currentPage: number=0;
  currentSize: number=3;
  totalPages: number=0;

  ngOnInit(): void {
    this.getQuestions(this.currentPage,this.currentSize);
  }

  questions:Question[]=[]

  getQuestions(page:number,size:number):void{
    this.service.getQuestions(page,size).subscribe((data:any)=>{
      this.totalPages=data.totalPages;
      this.questions=data.content;
      console.log(data.content);
    })
  }

  deleteQuestion(question_id:number):void{
    this.service.delete(question_id).subscribe((data:Question)=>{
      this.getQuestions(this.currentPage,this.currentSize);
    })
  }

  paginate(page:number):void{
    this.currentPage=page;
    this.getQuestions(page,this.currentSize)
  }

  nextPage(currentPage:number):void{
    if(currentPage+1==this.totalPages){
      return
    }
    this.currentPage=currentPage+1;
    this.getQuestions(this.currentPage,this.currentSize);
  }

  previousPage(currentPage:number){
    if(currentPage==0){
      return
    }
    this.currentPage=currentPage-1;
    this.getQuestions(this.currentPage,this.currentSize);
  }

}
