
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { skip, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  color:boolean=false
  arr = []
  apiKey: string = 'AIzaSyDS1a8nGk1trBcw8Nfu0KnkqrQBeN2K3TA';
  constructor(private http: HttpClient,private _router: Router) { }
  getVideosForSearch(value: any): Observable<any> {
    // let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    let url = '/api/search?part=snippet&maxResults=50&q=' + value + '&key=' + this.apiKey
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  getPopularVideos(): Observable<any> {
    let url = '/api/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=US&key=' + this.apiKey
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  getParticularVideo(videoId:any): Observable<any> {
    let url = '/api/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+videoId+'&key=' + this.apiKey //
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  getRelatedVideos(videoId:any):Observable<any>{
    let url = '/api/search?part=snippet&relatedToVideoId='+videoId+'&type=video&key=' + this.apiKey
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  searcharr(val: any) {
    this.arr.splice(0)
    this.arr = val
  }
  getsearchdata() {
    return this.arr
  }

  getColorstatus() {
    this.color =  !this.color
  }
  sendColorStatus() {
    console.log("color",this.color)
    return this.color  
  }
}