import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-view-init-and-on-destroy-test',
  templateUrl: './view-init-and-on-destroy-test.component.html',
  styleUrls: ['./view-init-and-on-destroy-test.component.css']
})
export class ViewInitAndOnDestroyTestComponent implements OnInit, AfterContentInit, OnDestroy {
  isExiting: boolean;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.isExiting = false;
  }

  async ngOnDestroy(){
    //unsubscribe here.
    //Need alternative for css/exiting animations as component gets destroyed before style change.
    this.isExiting = true;
  }
}
