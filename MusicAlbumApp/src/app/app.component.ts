import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiskService } from './services/disk/disk.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  currentRoute: string  = "HomePage";
  title = 'MusicAlbumApp';

  constructor(private diskService:DiskService,
    private router:Router){}

  ngOnInit(): void {
      this.diskService.getCurrentRoute().subscribe(currentRoute => {
      this.currentRoute=currentRoute;
      console.log("current Route",this.currentRoute);
    });
    this.diskService.setCurrentRoute(this.currentRoute);
     
   }
}
