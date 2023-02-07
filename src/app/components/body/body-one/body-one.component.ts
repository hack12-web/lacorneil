import { Component } from '@angular/core';

@Component({
  selector: 'app-body-one',
  templateUrl: './body-one.component.html',
  styleUrls: ['./body-one.component.scss']
})
export class BodyOneComponent {
  new_arrival: boolean = true;
  what_trading: boolean = false;
  member_exclusive: boolean = false;

  public show_arrival(): void
  {
    this.new_arrival = true;
    this.what_trading = false;
    this.member_exclusive = false;
  }
  public show_what_trading():void
  {
    this.new_arrival = false;
    this.what_trading = true;
    this.member_exclusive = false;
  }
  public show_member_exclusive():void
  {
    this.new_arrival = false;
    this.what_trading = false;
    this.member_exclusive = true;
  }
}
