import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AutoCompleteModule } from 'ng4-auto-complete';

import { AppComponent } from './app.component';
import { SelectmenuitemComponent } from './selectmenuitem/selectmenuitem.component';
import { SelecteffectivedateComponent } from './selecteffectivedate/selecteffectivedate.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { FilterSearchPipe } from './selectmenuitem/filtersearch.pipe';
import { OrderModule } from './order-pipe/ngx-order.module';



const appRoutes: Routes = [
  { path: '', component: SelectmenuitemComponent },
  { path: 'date', component: SelecteffectivedateComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    SelectmenuitemComponent,
    SelecteffectivedateComponent,
    AppfooterComponent,
    AppheaderComponent,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AutoCompleteModule,
    OrderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
