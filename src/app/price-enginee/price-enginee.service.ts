import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import {APP_CONFIG} from 'src/app/shared/common/config';
import {Socket} from "ngx-socket-io";

@Injectable()
export class PriceEngineeService {

  constructor(private http: HttpClient, private socket: Socket) {}

  getPriceEngines(): Observable<any> {
    return this.http
      .get(
        `${
          APP_CONFIG.BASE_API_LINK.PRICE_ENGINE
        }`
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  // onSubscribe(token): void {
  //   this.socket.emit('subscribe', {'token': token}, data => {
  //     if (data.status === 1000) {
  //       console.log('Socket connected');
  //     }
  //   });
  // }

  onPriceEnginee(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on('on_order_book', (data: any) => {
        observer.next(data);
      });
    });
  }
}
