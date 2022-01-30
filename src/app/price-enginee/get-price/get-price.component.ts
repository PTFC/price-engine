import { Component, OnInit } from '@angular/core';
import {PriceEngineeService} from "../price-enginee.service";

@Component({
  selector: 'app-get-price',
  templateUrl: './get-price.component.html',
  styleUrls: ['./get-price.component.sass']
})
export class GetPriceComponent implements OnInit {
  datas = {
    "summary": {
      "bid": {
        "total_size": 150,
        "total_amount": 5
      },
      "ask": {
        "total_size": 150,
        "total_amount": 5
      }
    },
    "bids": [
      [
        "37822.07000000",
        "0.46389000"
      ],
      [
        "37819.87000000",
        "0.06600000"
      ],
      [
        "37818.77000000",
        "0.10311000"
      ],
      [
        "37818.76000000",
        "0.16500000"
      ],
      [
        "37816.48000000",
        "1.76828000"
      ]
    ],
    "asks": [
      [
        "37822.08000000",
        "0.29239000"
      ],
      [
        "37825.57000000",
        "0.27079000"
      ],
      [
        "37825.58000000",
        "0.06555000"
      ],
      [
        "37825.59000000",
        "0.05948000"
      ],
      [
        "37825.88000000",
        "0.19820000"
      ]
    ]
  };
  constructor(private service: PriceEngineeService) { }

  ngOnInit(): void {
    this.getPriceEnginee();
  }
  getPriceEnginee(): void {
    this.service.getPriceEngines().subscribe(res => {
      this.datas = res;
      console.log(res);
    });
  }
}
