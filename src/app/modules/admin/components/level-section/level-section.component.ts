import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Level } from 'src/app/core/models/Level.model';
import { LevelService } from 'src/app/core/services/level.service';

@Component({
  selector: 'app-level-section',
  templateUrl: './level-section.component.html',
  styleUrls: ['./level-section.component.css']
})
export class LevelSectionComponent implements OnInit{
  
  constructor(private levelService: LevelService,private fb:FormBuilder) { }  

  levels: Level[] = [];
  levelForm!: FormGroup;
  isFormVisible: Boolean=false;
  ngOnInit() {
   this.getLevels();
   this.initform();
  }

  initform():void{
    this.levelForm=this.fb.group({
      id: [0],
      description: [null, [Validators.required, Validators.min(0)]],
      pointMin: [null, [Validators.required, Validators.min(0)]],
      pointMax: [null, [Validators.required, Validators.min(0)]]
    });
  }

  getOne(level_id:number):void{
    this.levelService.getOne(level_id).subscribe((data:Level)=>{
      this.levelForm=this.fb.group({
        id: [data.id],
        description: [data.description, [Validators.required, Validators.min(0)]],
        pointMin: [data.pointMin, [Validators.required, Validators.min(0)]],
        pointMax: [data.pointMax, [Validators.required, Validators.min(0)]]
      });
    })
    this.isFormVisible=true;
  }

  getLevels(): void {
    this.levelService.getLevels().subscribe((data: Level[]) => {
      this.levels=data;
    });
  }

  deleteLevel(level_id: number) {
    this.levelService.delete(level_id).subscribe((data: Level) => {
      this.getLevels();
    });
  }
}
