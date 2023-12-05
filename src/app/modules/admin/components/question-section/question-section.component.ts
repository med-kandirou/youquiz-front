import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Question } from 'src/app/core/models/Question.model';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit{


  constructor(private service:QuestionService,private fb:FormBuilder){}

  currentPage: number=0;
  currentSize: number=3;
  totalPages: number=0;
  isVisible: Boolean=false;
  isFormVisible: Boolean=false;
  idtoDelete:number=0;
  questionForm!: FormGroup;

  ngOnInit(): void {
    this.initform();
    this.getQuestions(this.currentPage,this.currentSize);
  }

  questions:Question[]=[]

  initform():void{
    this.questionForm=this.fb.group({
      id: [0],
      numberOfResponses: [null, [Validators.required, Validators.min(0)]],
      numberOfCorrectResponses: [null, [Validators.required, Validators.min(0)]],
      questionText: ['', Validators.required],
      type: ['', Validators.required],
      subject_id: ['', Validators.required],
      level_id: ['', Validators.required],
    });
  }

  getOne(question_id:number):void{
    this.service.getOne(question_id).subscribe((data:Question)=>{
      this.questionForm=this.fb.group({
        id: [data.id],
        numberOfResponses: [data.numberOfResponses, [Validators.required, Validators.min(0)]],
        numberOfCorrectResponses: [data.numberOfCorrectResponses, [Validators.required, Validators.min(0)]],
        questionText: [data.questionText, Validators.required],
        type: [data.type, Validators.required],
        subject_id: [data.subject.id, Validators.required],
        level_id: [data.level.id, Validators.required],
      });
    })
    this.isFormVisible=true;
  }
    


  getQuestions(page:number,size:number):void{
    this.service.getQuestions(page,size).subscribe((data:any)=>{
      this.totalPages=data.totalPages;
      this.questions=data.content;
    })
  }

  
  deleteQuestion(question_id:number):void{
    this.service.delete(question_id).subscribe((data:Question)=>{
      this.getQuestions(this.currentPage,this.currentSize);
    })
  }

  getIdtoDelete(question_id:number){
    this.isVisible=true;
    this.idtoDelete=question_id;
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
    this.getQuestions(this.currentPage,this.currentSize);
  }

  

}
