
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {environment} from "../environments/environment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
const config: SocketIoConfig = { url: environment.socketUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
