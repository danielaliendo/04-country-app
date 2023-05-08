import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent implements OnInit {

  @Input()
  public type: string = 'text'

  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  constructor() {

  }

  emitValue(value: string): void {
    this.onValue.emit(value)
  }

  ngOnInit(): void {

    if (!this.type) {
      throw new Error('type string is required.');
    } else if (!this.placeholder) {
      throw new Error('placeholder string is required.');
    }

  }

}
