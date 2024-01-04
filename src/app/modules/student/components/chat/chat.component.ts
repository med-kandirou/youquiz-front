import { Component } from '@angular/core';
import { Salle } from 'src/app/core/models/Salle.model';
import { Router } from '@angular/router';
import { ParticipationService } from 'src/app/core/services/participation.service';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/core/models/Student.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  student$: any;

  constructor(private partServ:ParticipationService,private route:Router,private store: Store<{ student: Student }>){
    this.student$ = store.select('student');
  }
  myId:number;
  ngOnInit(): void {
    this.myId = this.student$.actionsObserver._value.code;
    this.findParticipatesByStudOut(this.myId, 'in');
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
