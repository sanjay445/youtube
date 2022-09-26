import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchdata',
  templateUrl: './searchdata.component.html',
  styleUrls: ['./searchdata.component.css']
})
export class SearchdataComponent implements OnInit {

  constructor(private _youTubeService: MyserviceService, private _router: Router) { }
  colorstatus:any
  Searchvideos:any=[];
  ngOnInit(): any {
    this.colorstatus=this._youTubeService.sendColorStatus()
    console.log("zzz",this.colorstatus)
      this.Searchvideos=this._youTubeService.getsearchdata()
      console.log("Search component",this.Searchvideos)
    }
    clickVideo = (videodet: any) => {
      
      this._router.navigateByUrl(`video/${videodet.id.videoId}`)
    }

}
