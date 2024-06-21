import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { DiskInfo,TrackInfo } from '../../interfaces/diskInfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiskService {

private queue:string[] =  [];

  private currentRoute = new BehaviorSubject<string>("/HomePage");

  private _currentRoute$ = this.currentRoute.asObservable();

  private selectedDisk = new BehaviorSubject<DiskInfo>({
    name: "",
    img: "",
    release_date:{$date:""},
    tracks:[{duration:0,
              name:""}]

  });

  private _selectedDisk$ = this.selectedDisk.asObservable();

  constructor(private http: HttpClient) {  }

 

  insertToQueue(value:string){
    this.queue.unshift(value);
  }

  removeFromQueue(){
    this.queue.pop();
  }

  getQueueLength():number{
    return this.queue.length;
  }

  getQueue(){
    return this.queue;
  }

  getCurrentRoute(): Observable<string> {
    return this._currentRoute$;
  }

  setCurrentRoute(latestValue: string) {
    this.currentRoute.next(latestValue);
  }

  getSelectedDisk(): Observable<DiskInfo> {
    return this._selectedDisk$;
  }

  setSelectedDisk(latestValue: DiskInfo) {
    this.selectedDisk.next(latestValue);
  }

  getDemoData() {
    return this.http.get<DiskInfo[]>('/assets/musicAlbums.json')
      .pipe(map(disks => {
        return disks;

      }))
  };

  getAlbumByName(name:string):Observable<DiskInfo[]>{
     let filterdDisks =this.http.get<DiskInfo[]>('/assets/musicAlbums.json')
    .pipe(map(disks => {
       let filldisk = disks.filter(d=>d.name.includes(name));
      return filldisk;

    }));
    return filterdDisks;
  }

}
