import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'sensorDetails', component: DeviceDetailsComponent },
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });