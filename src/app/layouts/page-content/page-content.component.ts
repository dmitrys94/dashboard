import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  sidebarOpen = false;

  constructor() { }

  ngOnInit(): void {
    // Do nothing on initialization
  }

  toggleSideBar(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}
