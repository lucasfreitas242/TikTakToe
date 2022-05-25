import { Component, Input, OnInit } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  board = new BoardComponent();

  @Input() value: 'X' | 'O';

  constructor() { }

  ngOnInit(): void {
  }

}
