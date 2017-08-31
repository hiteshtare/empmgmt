import { NotifyService } from './shared/notify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//custom component
import { CreateComponent } from './employee/create/create.component';
import { ViewComponent } from './employee/view/view.component';
import { MenuComponent } from './shared/menu/menu.component';
//routing implementation
import { routing, appRoutingProviders } from './app.routing';
import { ListComponent } from './employee/list/list.component';
//custom service
import { EmpService } from './employee/shared/emp.service';

//import for loading and configuring angular2-in-memory-web-api 
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

//user defined service for db op.
import { MockDatabaseService } from './shared/mock.database.service';
import { EditComponent } from './employee/edit/edit.component';
import { DeleteComponent } from './employee/delete/delete.component';

//primeng module
import { GrowlModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { MsgComponent } from './shared/msg/msg.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    MenuComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    MsgComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(MockDatabaseService, {
      delay: 100,
      rootPath: 'api'
    }),
    GrowlModule,
    ConfirmDialogModule
  ],
  providers: [appRoutingProviders, EmpService, ConfirmationService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
