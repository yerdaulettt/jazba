import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModel үшін керек
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,         // МІНДЕТТІ: [(ngModel)] үшін
    HttpClientModule,
    RouterModule.forRoot([]) // Қажет болса, өз маршруттарыңды қоса аласың
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
