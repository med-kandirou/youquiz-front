import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseService } from 'src/app/core/services/response.service';
import { Response } from 'src/app/core/models/Response.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-response',
  templateUrl: './save-response.component.html',
  styleUrls: ['./save-response.component.css']
})
export class SaveResponseComponent implements OnInit{

  @Input()
  responseForm!: FormGroup;
  @Output() close = new EventEmitter<void>();

  closeModel():void{
    this.close.emit();
  }

  constructor(private serviceResponse:ResponseService) {}
  ngOnInit(): void { }


  onSubmit() {
    if (this.responseForm.valid) {
      const formData: FormData = this.responseForm.value;
      console.log(formData);
      this.serviceResponse.save(formData).subscribe((data:any)=>{
        Swal.fire({
          title: "succes",
          text: `${data.textResponse} ajouté`,
          icon: "success"
        });
      });
      this.closeModel()
    } else {
      console.log("log");
    }
  }
}
