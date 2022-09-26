import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  Popularvideos: any = [];
  color: any = false;
  constructor(private _youTubeService: MyserviceService, private _router: Router) { }

  ngOnInit(): void {
    this.color = this._youTubeService.sendColorStatus()
    this._youTubeService
      .getPopularVideos()
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.Popularvideos.push(element)
        }
      });
    console.log(this.Popularvideos)
  }
  clickVideo = (videodet: any) => {
    this._router.navigateByUrl(`video/${videodet.id}`)
  }
}
