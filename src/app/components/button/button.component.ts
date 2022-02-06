import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() button_text: string = 'common button';
  @Input() type:string = 'filled';

  @Output() onClickButtonHandler = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(){
    this.onClickButtonHandler.emit()
  }

}
