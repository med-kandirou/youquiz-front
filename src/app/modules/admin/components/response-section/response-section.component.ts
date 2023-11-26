import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/core/models/Response.model';
import { ResponseService } from 'src/app/core/services/response.service';



@Component({
  selector: 'app-response-section',
  templateUrl: './response-section.component.html',
  styleUrls: ['./response-section.component.css']
})
export class ResponseSectionComponent implements OnInit{

  constructor(private service:ResponseService){}

  currentPage: number=0;
  currentSize: number=3;
  totalPages: number=0;

  ngOnInit(): void {
    this.getResponses(this.currentPage,this.currentSize);
  }

  responses:Response[]=[]

  getResponses(page:number,size:number):void{
    this.service.getResponses(page,size).subscribe((data:any)=>{
      this.totalPages=data.totalPages;
      this.responses=data.content;
    })
  }

  deleteResponse(response_id:number):void{
    this.service.delete(response_id).subscribe((data:any)=>{
      console.log(data);
      this.getResponses(this.currentPage,this.currentSize);
    })
  }
}
