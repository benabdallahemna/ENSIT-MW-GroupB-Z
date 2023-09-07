import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  recepies = [
    { img:"../../../assets/images/clip-01.jpg", titre: "jyegf", description: "lfufh" },
    { img:"../../../assets/images/clip-02.jpg" , titre: "lkhkaebd", description: "zliu"},
    { img: "../../../assets/images/clip-03.jpg", titre: "ae", description: "sdlkhbh" },
    { img: "../../../assets/images/clip-04.jpg", titre: "k", description: "qfkhkb" },


  ];
  constructor() { 

  }

  ngOnInit() {
  }

}
