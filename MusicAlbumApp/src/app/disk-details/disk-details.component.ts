import { Component, OnInit } from '@angular/core';
import { DiskInfo } from '../interfaces/diskInfo';
import { DiskService } from '../services/disk/disk.service';
import { Router } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-disk-details',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './disk-details.component.html',
  styleUrl: './disk-details.component.scss'
})
export class DiskDetailsComponent implements OnInit {

  public selectedDisk: DiskInfo = {} as DiskInfo;


  constructor(private diskService:DiskService,
    private router:Router
  ){}

  ngOnInit(): void {
     this.diskService.getSelectedDisk().subscribe(currentDisk => {
      this.selectedDisk.name = currentDisk.name,
        this.selectedDisk.img = currentDisk.img,
        this.selectedDisk.release_date = currentDisk.release_date
        this.selectedDisk.tracks = currentDisk.tracks
    });

  }

  returnToList(){
    this.diskService.setCurrentRoute("HomePage");
    this.router.navigate(['HomePage']);
  }

}
