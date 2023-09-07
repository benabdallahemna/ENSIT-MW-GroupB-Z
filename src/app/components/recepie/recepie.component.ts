import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {
  @Input() recepie :any ;
  constructor() { }

  ngOnInit() {
  }

}

