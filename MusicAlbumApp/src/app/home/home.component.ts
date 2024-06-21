import { Component, OnInit } from '@angular/core';
import { DiskService } from '../services/disk/disk.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DiskInfo } from '../interfaces/diskInfo';
import { DiskComponent } from '../disk/disk.component';
import { FormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiskComponent,FormsModule,ScrollingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  /*public weathers: WeatherForcasts = {} as WeatherForcasts;
  public currentWeather: WeatherInfo = {} as WeatherInfo;
  public currentCity: City = {} as City;*/

  //control = new FormControl('');
  currentRoute: string | undefined;
  disks: DiskInfo[] = [];
  searchQueue:string[]=[];
  filteredDisks: Observable<DiskInfo[]> | undefined;
  currentQueue:Observable<string[]>|undefined;
 searchTerm: any;


    constructor(private diskService:DiskService,
      private router:Router
    ){}


  ngOnInit(): void {
   this.currentRoute = this.router.url;
   this.diskService.setCurrentRoute(this.currentRoute);

   this.searchQueue = this.diskService.getQueue();
    
   /*this.diskService.getAlbumByName(this.searchTerm).subscribe(disks => {
    this.disks =disks;
    console.log("Disks From data search",this.disks);
   });*/


   /* this.diskService.getDemoData().subscribe(disks => {
      this.disks = disks;
      console.log("Disks From data",this.disks);
    });*/
    console.log("~~~~~~~~~~~ Home Page Component ~~~~~~~~~")
  }

  goToRegistrationPage():void{
    this.diskService.setCurrentRoute("Registration");
    this.router.navigate(['Registration']);
  }

  searchAlbumByName():void{
    if(this.searchTerm === ""){
      this.disks = [];
    }
    else{
      if(this.diskService.getQueueLength()<5){
        this.diskService.insertToQueue(this.searchTerm);
      }
      else{
        this.diskService.removeFromQueue();
        this.diskService.insertToQueue(this.searchTerm);
      }
      

      this.filteredDisks = 
      this.diskService.getAlbumByName(this.searchTerm).pipe(map(disks => {
        return disks;
  
      }));
       this.filteredDisks.subscribe(disks => {
        this.disks = disks;
        console.log("Disks From data",this.disks);
    });
    }
    
}

}
