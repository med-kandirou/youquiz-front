import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Level } from 'src/app/core/models/Level.model';
import { LevelService } from 'src/app/core/services/level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-level',
  templateUrl: './save-level.component.html',
  styleUrls: ['./save-level.component.css']
})
export class SaveLevelComponent {
  constructor(private serviceLevel: LevelService) {}

  @Input() levelForm!: FormGroup;
  @Output() close = new EventEmitter<void>();

  closeModel():void{
    this.close.emit();
  }


  onSubmit() {
    if (this.levelForm.valid) {
      const formData: FormGroup = this.levelForm.value;
      console.log(formData);
        this.serviceLevel.save(formData).subscribe((data:Level)=>{
          Swal.fire({
            title: "succes",
            text: `${data.description} ajouté`,
            icon: "success"
          });
        });
        this.closeModel();
    } else {
      console.log("log");
    }
  }
}
