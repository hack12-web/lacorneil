import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  inputShow: boolean = true;
  searchShow: boolean = false;

  public showInputFild(): void
  {
    this.inputShow = false;
    this.searchShow = true;
  }
}
