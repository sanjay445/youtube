import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('getsearch')
  getsearch!: ElementRef;
  @Output() searchvalue = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSearch(){
    const valueInput = this.getsearch.nativeElement.value
    console.log(valueInput)
    this.searchvalue.emit(valueInput)
  }
}
