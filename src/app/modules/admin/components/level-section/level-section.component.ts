import { Component,OnInit } from '@angular/core';
import { Level } from 'src/app/core/models/Level.model';
import { LevelService } from 'src/app/core/services/level.service';

@Component({
  selector: 'app-level-section',
  templateUrl: './level-section.component.html',
  styleUrls: ['./level-section.component.css']
})
export class LevelSectionComponent implements OnInit{
  constructor(private levelService: LevelService) { }  

  levels: Level[] = [];

  ngOnInit() {
   this.getLevels();
  }

  getLevels(): void {
    this.levelService.getLevels().subscribe((data: Level[]) => {
      this.levels=data;
      console.log(this.levels);
    });
  }

  deleteLevel(level_id: number) {
    alert('Deleted'+level_id);
    this.ngOnInit();
  }
}
