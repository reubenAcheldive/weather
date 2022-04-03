import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './components/dashboard/dashbord.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { WeatherEffects } from './state/effects/weahter.effect';
import { environment } from '../environments/environment';
import { weatherReducer } from './state/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavBarModule,
    BrowserAnimationsModule,
    DashboardModule,

    StoreModule.forRoot({ weatherFeature: weatherReducer }),
    EffectsModule.forRoot([WeatherEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
