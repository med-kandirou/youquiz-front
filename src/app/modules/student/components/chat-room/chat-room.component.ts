import { Component } from '@angular/core';
import { Salle } from 'src/app/core/models/Salle.model';
import { ParticipationService } from 'src/app/core/services/participation.service';
import { SalleService } from 'src/app/core/services/salle.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { Message } from 'src/app/core/models/Message.model';
import { MessageService } from 'src/app/core/services/message.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  stompClient: any;

  constructor(private fb: FormBuilder,private messageSer:MessageService,private partServ:ParticipationService,private salleServ:SalleService,private ActivatedRoute :ActivatedRoute,private route :Router){}
  
  myId:number= 1;
  idRoom:number;
  ngOnInit(): void {
    this.findParticipatesByStud(this.myId,"in");
    this.idRoom=this.ActivatedRoute.snapshot.params['idRoom'];
    this.getRoom(this.idRoom);
    this.getMessagesByRoom(this.idRoom);
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const socket = new SockJS('http://localhost:8080/ws'); 
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      console.log('WebSocket Connected');
      this.onConnected();
    });
  }

  participates:Salle[];
  messages:Message[];
  currentRoom:Salle;
  form:any;


  findParticipatesByStud(studentId:number,status:string){
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
  sendMessage() {
    var payload = {
      id: null,  
      content: this.content,
      participateID: {
        student: {
          code: this.myId
        },
        room: {
          id: this.idRoom
        }
      }
    };
    this.stompClient.send('/app/chat.sendMessage/'+this.idRoom, {}, JSON.stringify(payload)); 
  }

  onConnected() {
    this.stompClient.subscribe('/room/'+this.idRoom+'', (data:any)=>{
      const receivedData = JSON.parse(data.body);
      this.messages.push(receivedData)
      this.content='';
    });

    // this.stompClient.send("/app/chat.addUser",
    //     {},
    //     JSON.stringify({sender: "Mohamed", type: 'JOIN'})
    // )
  }








}
