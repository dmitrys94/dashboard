import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // Do nothing on initialization
  }

  openSideBar(){
    this.toggleSideBar.emit();
  }
}
