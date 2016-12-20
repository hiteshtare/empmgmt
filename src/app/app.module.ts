import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//custom component
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './menu/menu.component';
//routing implementation
import { routing, appRoutingProviders } from './app.routing';
import { ListComponent } from './list/list.component';
//custom service
import { EmpService } from './emp.service';

//import for loading and configuring angular2-in-memory-web-api 
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

//user defined service for db op.
import { MockDatabaseService } from './mock.database.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    MenuComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(MockDatabaseService, {
      delay: 100,
      rootPath: 'api'
    })
  ],
  providers: [appRoutingProviders, EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
