import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  @Output() ConfirmDelete = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  sendData() {
    this.ConfirmDelete.emit();
  }

  closeModal(){
    this.close.emit();
  }
}
