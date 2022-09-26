import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  constructor(private _youTubeService: MyserviceService,private route: Router) { }
  status: boolean = false;
  colorStatus: boolean = false;
  Accountstatus: boolean = false;
  Popularvideos:any= [];
  Searchvideos:any=[];

  showSidebar() {
  this.status = !this.status;
   console.log(this.status)
  }
  Myaccount() {
    this.Accountstatus = !this.Accountstatus;
     console.log(this.Accountstatus)
    }
  ngOnInit() {
  }
  Search(value:any){
    this._youTubeService
    .getVideosForSearch(value)
    .subscribe(lista => {
      for (let element of lista["items"]) {
        this.Searchvideos.push(element)
      }
    });
    console.log(value,this.Searchvideos)
    this._youTubeService.searcharr(this.Searchvideos)
    this.route.navigate(['search'])
  }

  onTrending(){
    this.route.navigate(['trend'])
  }
  onHome(){
    this.route.navigate([''])
  }
  changeColor(){
    this._youTubeService.getColorstatus();
    this.colorStatus = !this.colorStatus;
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate(['trend']);
  });
  }
}

