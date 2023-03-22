import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-body-one',
  templateUrl: './body-one.component.html',
  styleUrls: ['./body-one.component.scss']
})
export class BodyOneComponent implements OnInit {
  new_arrival: boolean = true;
  what_trading: boolean = false;
  member_exclusive: boolean = false;

  products:any[]=[];

  constructor(private service: SharedServiceService){}

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
  public async getProductItems(){
    return await this.service.getProducts().subscribe(data =>{
      this.products = data;
      console.log(this.products);
    });
  }
  ngOnInit(): void {
    this.getProductItems();
  }
}
