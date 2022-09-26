import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videoDetails: any = []
  RelatedVideosDetails: any = []
  videoId: any;
  color: any = false;
  constructor(private _youTubeService: MyserviceService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.color = this._youTubeService.sendColorStatus()
    console.log("video",this.color)
    this._route.params.subscribe(params => {
      console.log("video component", params['id'])
      this.videoId = params['id']
    })

    this._youTubeService
      .getParticularVideo(this.videoId)
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videoDetails.push(element)
        }
      });
    console.log("video Details in video page", this.videoDetails)
    this.getrelvideo()
  }

  getrelvideo() {
    this._youTubeService
      .getRelatedVideos(this.videoId)
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.RelatedVideosDetails.push(element)
        }
      });
    console.log("Related video Details in video page", this.RelatedVideosDetails)
  }

  clickVideo = (videodet: any) => {
    console.log("clicked")
    this.videoId = videodet.id.videoId
    this.RelatedVideosDetails.splice(0)
    this.getrelvideo()
    this._router.navigateByUrl(`video/${videodet.id.videoId}`)

    this.videoDetails.splice(0)
    this._youTubeService
      .getParticularVideo(this.videoId)
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videoDetails.push(element)
        }
      });
  }
}
