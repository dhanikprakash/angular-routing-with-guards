import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  starWidth:number;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 /5;
  }
  onClick():void{
    this.notify.emit(this.rating);
  }
}
