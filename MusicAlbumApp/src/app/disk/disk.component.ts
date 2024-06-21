import { Component, Input, OnInit } from '@angular/core';
import { DiskInfo } from '../interfaces/diskInfo';
import { DiskService } from '../services/disk/disk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disk',
  standalone: true,
  imports: [],
  templateUrl: './disk.component.html',
  styleUrl: './disk.component.scss'
})
export class DiskComponent implements OnInit {

  @Input() disk:DiskInfo = {} as DiskInfo;

  constructor(private diskService:DiskService,
    private router:Router
  ){

  }
  ngOnInit(): void {
    console.log("~~~~~~~~~~~ Disk Component ~~~~~~~~~~");
  }

  goToDiskDetails(disk:DiskInfo){

    this.diskService.setSelectedDisk(disk);
    console.log("Going To Disk Details", disk);
    this.diskService.setCurrentRoute("DiskInformation");
    this.router.navigate(['DiskInformation']);

  }

  

}
