import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiskDetailsComponent } from './disk-details/disk-details.component';
import { RegistrationComponent } from './registration/registration.component';



export const routes: Routes = [

    { path: 'HomePage', component: HomeComponent, pathMatch: 'full' },
    { path: 'DiskInformation', component: DiskDetailsComponent, pathMatch: 'full' },
    { path: 'Registration', component: RegistrationComponent, pathMatch: 'full' },
    // otherwise redirect to home
    { path: '**', redirectTo: 'HomePage' }
  ];
  
  export const appRoutingModule = RouterModule.forRoot(routes);
  export const routingComponents = [HomeComponent,DiskDetailsComponent,RegistrationComponent]//, LoginComponent, DashboardComponent
  
