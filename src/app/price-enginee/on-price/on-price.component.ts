import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/internal/Subscription";
import {PriceEngineeService} from "../price-enginee.service";

@Component({
  selector: 'app-on-price',
  templateUrl: './on-price.component.html',
  styleUrls: ['./on-price.component.sass']
})
export class OnPriceComponent implements OnInit, OnDestroy {
  subscriptions: any = {
    onPriceReal: new Subscription(),
  };
  datas: any = {};
  constructor(private service: PriceEngineeService) { }

  ngOnInit(): void {
    this.onPriceEnginee();
  }
  onPriceEnginee(): void {
    this.subscriptions.onPriceReal
      = this.service.onPriceEnginee().subscribe(
      res => {
        this.datas = res;
        console.log('real', res);
      });
  }

  ngOnDestroy(): void {
    for (const key in this.subscriptions) {
      if (this.subscriptions.hasOwnProperty(key) && this.subscriptions[key]) {
        this.subscriptions[key].unsubscribe();
      }
    }
  }
}
