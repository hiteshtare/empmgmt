import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: 'create', component: CreateComponent },
    { path: 'list', component: ListComponent },
    { path: 'list/:employeeId', component: ViewComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);