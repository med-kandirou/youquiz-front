import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  @Output() ConfirmDelete = new EventEmitter<boolean>();

  sendData() {;
    this.ConfirmDelete.emit(true);
  }

  close() {
    throw new Error('Method not implemented.');
  }
}
