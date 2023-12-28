import { Component } from '@angular/core';
import { Salle } from 'src/app/core/models/Salle.model';
import { ParticipationService } from 'src/app/core/services/participation.service';
import { SalleService } from 'src/app/core/services/salle.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { Message } from 'src/app/core/models/Message.model';
import { MessageService } from 'src/app/core/services/message.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {

  constructor(private fb: FormBuilder,private messageSer:MessageService,private partServ:ParticipationService,private salleServ:SalleService,private ActivatedRoute :ActivatedRoute,private route :Router){}
  
  myId:number= 1;
  idRoom:number;
  ngOnInit(): void {
    this.findParticipatesByStudOut(this.myId,"in");
    this.idRoom=this.ActivatedRoute.snapshot.params['idRoom'];
    this.getRoom(this.idRoom);
    this.getMessagesByRoom(this.idRoom);
  }

  participates:Salle[];
  messages:Message[];
  currentRoom:Salle;

  findParticipatesByStudOut(studentId:number,status:string){
    this.partServ.findParticipatesByStudent(studentId,status).subscribe((data:any)=>{
      this.participates=data;
    })
  }

  getMessagesByRoom(room_id:number){
    this.messageSer.getMessagesByRoom(room_id).subscribe((data:Message[])=>{
      this.messages=data;
      console.log(this.messages)
    })
  }

  getRoom(roomId:number){
    this.salleServ.getOne(roomId).subscribe((data:any)=>{
      this.currentRoom=data;
    })
  }

  content:string=''
  form:any;
  sendMessage() {
    this.form = this.fb.group({
      content: [this.content, Validators.required],
      participateID: this.fb.group({
        student: this.fb.group({
          code: this.myId
        }),
        salle: this.fb.group({
          id: this.idRoom
        })
      })
    });
    this.messageSer.save(this.form).subscribe((data:Message)=>{
      console.log(data)
    });
    
  }

}
