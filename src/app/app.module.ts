import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './login/user-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    BrowserModule,FormsModule,CommonModule, HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'welcome',
          component: WelcomeComponent
        }
      ])
  ],
  declarations: [
    AppComponent,
    UserComponentComponent,WelcomeComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [UserComponentComponent]
})
export class AppModule { }
