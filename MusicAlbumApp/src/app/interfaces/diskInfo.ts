export interface DiskInfo {
    img: string,
    name: string,
    release_date:{
        $date:string
    } 
    tracks:TrackInfo[]
  }

  export interface TrackInfo{
    duration:number,
    name:string
  }

  