import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-enginee',
  templateUrl: './price-enginee.component.html',
  styleUrls: ['./price-enginee.component.sass']
})
export class PriceEngineeComponent implements OnInit {
  tasks = [
    {name: 'Get Price'},
    {name: 'On Price'}
  ];
  taskSelected: any = undefined;
  constructor() {
    this.taskSelected = this.tasks[0];
  }

  ngOnInit(): void {}

  onChangeTab(name: any): void {
    this.taskSelected = name;
  }
}
