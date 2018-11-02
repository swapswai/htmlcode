import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-selecteffectivedate',
  templateUrl: './selecteffectivedate.component.html',
  styleUrls: ['./selecteffectivedate.component.css']
})
export class SelecteffectivedateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchbtn() {
    document.getElementById('tablediv').style.visibility = 'visible';
    document.getElementById('nextdiv').style.visibility = 'visible';
  }

 addbtn() {
    document.getElementById('selectDiv').style.visibility = 'visible';
  }
}
