import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/core/models/Media.model';
import { MediaService } from 'src/app/core/services/media.service';

@Component({
  selector: 'app-media-section',
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.css']
})
export class MediaSectionComponent implements OnInit{
  constructor (private service : MediaService){}


  ngOnInit(): void {
    this.getAll(this.currentPage,this.currentSize);
  }

  currentPage: number=0;
  currentSize: number=3;
  totalPages: number=0;

  medias:Media[]=[] 

  getAll(page:number,size:number):void{
    this.service.getMedias(page,size).subscribe((data:any)=>{
      this.totalPages=data.totalPages;
      this.medias=data.content;
    });
  }

  delete(media_id:number):void{
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
