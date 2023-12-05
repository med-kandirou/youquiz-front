import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Media } from 'src/app/core/models/Media.model';
import { MediaService } from 'src/app/core/services/media.service';

@Component({
  selector: 'app-media-section',
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.css']
})
export class MediaSectionComponent implements OnInit{
  constructor (private service : MediaService,private fb : FormBuilder){}

  
  currentPage: number=0;
  currentSize: number=3;
  totalPages: number=0;
  medias:Media[]=[] 
  mediaForm!:FormGroup;
  ngOnInit(): void {
    this.initform();
    this.getAll(this.currentPage,this.currentSize);
  }

  initform():void{
    this.mediaForm=this.fb.group({
        id: [0],
        src: [null, [Validators.required]],
        mediaType: [null, [Validators.required]],
        question_id: [null, Validators.required],
    });
  }

  getOne(question_id:number):void{
    this.service.getOne(question_id).subscribe((data:Media)=>{
      this.mediaForm=this.fb.group({
        id: [data.id],
        src: [data.src, [Validators.required]],
        mediaType: [data.mediaType, [Validators.required]],
        question_id: [data.question.questionText, Validators.required],
      });
    })
  }

  
  getAll(page:number,size:number):void{
    this.service.getMedias(page,size).subscribe((data:any)=>{
      this.totalPages=data.totalPages;
      this.medias=data.content;
    });
  }

  deleteMedia(media_id:number):void{
    this.service.delete(media_id).subscribe((data:any)=>{
      console.log(data);
      this.getAll(this.currentPage,this.currentSize);
    });
  }

  paginate(page:number):void{
    this.currentPage=page;
    this.getAll(page,this.currentSize)
  }

  nextPage(currentPage:number):void{
    if(currentPage+1==this.totalPages){
      return
    }
    this.currentPage=currentPage+1;
    this.getAll(this.currentPage,this.currentSize);
  }

  previousPage(currentPage:number){
    if(currentPage==0){
      return
    }
    this.currentPage=currentPage-1;
    this.getAll(this.currentPage,this.currentSize);
  }

}
