import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './employee/create/create.component';
import { ListComponent } from './employee/list/list.component';
import { ViewComponent } from './employee/view/view.component';
import { EditComponent } from './employee/edit/edit.component';
import { DeleteComponent } from './employee/delete/delete.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'create', component: CreateComponent },
    { path: 'list', component: ListComponent },
    { path: 'list/:employeeId', component: ViewComponent },
    { path: 'edit/:employeeId', component: EditComponent },
    { path: 'delete/:employeeId', component: DeleteComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);