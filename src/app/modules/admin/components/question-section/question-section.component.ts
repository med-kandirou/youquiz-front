import { Component,OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';
import { QuestionService } from 'src/app/core/services/question.service';
import { ConfirmationComponent } from 'src/app/core/shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit{

  isVisible: Boolean=false;

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
    })
  }

  idtoDelete:number=0;

  deleteQuestion(question_id:number):void{
    this.service.delete(question_id).subscribe((data:Question)=>{
      this.getQuestions(this.currentPage,this.currentSize);
    })
  }

  getIdtoDelete(question_id:number){
    this.isVisible=true;
    this.idtoDelete=question_id;
    console.log(question_id);
  }

  receiveData():void{
    this.isVisible=false;
    this.deleteQuestion(this.idtoDelete);
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

  closeModal() {
    this.isVisible=false;
  }

}
