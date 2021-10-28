import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lft-side-menu',
  templateUrl: './lft-side-menu.component.html',
  styleUrls: ['./lft-side-menu.component.css']
})
export class LftSideMenuComponent implements OnInit {

  public items=false;
  public returns=false;

  

  constructor() { 
   
  }

  ngOnInit(): void {


  }
  public item():void{
    debugger;
    if(this.items===false){
      this.items=true;
    }else{
      this.items=false;
    }   
  }
  public return():void{
    if(this.returns===false){
      this.returns=true;
    }else{
      this.returns=false;
    }
  }

}
