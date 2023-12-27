import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/core/models/Salle.model';
import { ParticipationService } from 'src/app/core/services/participation.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit{
  constructor(private partServ:ParticipationService){}
  ngOnInit(): void {
    this.findParticipatesByStudOut(1,"out");
  }

  participates:Salle[];


  findParticipatesByStudOut(studentId:number,status:string){
    this.partServ.findParticipatesByStudent(studentId,status).subscribe((data:any)=>{
      this.participates=data;
    })
  }

  subscribe(arg0: number) {
    throw new Error('Method not implemented.');
  }

}
