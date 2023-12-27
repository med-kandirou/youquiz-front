import { Component } from '@angular/core';
import { Salle } from 'src/app/core/models/Salle.model';
import { Router } from '@angular/router';
import { ParticipationService } from 'src/app/core/services/participation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(private partServ:ParticipationService,private route:Router){}
  ngOnInit(): void {
    this.findParticipatesByStudOut(3,"in");
  }

  participates:Salle[];


  findParticipatesByStudOut(studentId:number,status:string){
    this.partServ.findParticipatesByStudent(studentId,status).subscribe((data:any)=>{
      this.participates=data;
    })
  }

  navigateToRoom(room_id:number) {
    this.route.navigate(['/student/room/'+room_id+'']);
  }
}
