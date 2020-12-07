import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AddDeviceComponent } from './modules/add_device/add-device.component';
import { DevicesComponent } from './modules/devices/devices.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { HelpComponent } from './modules/help/help.component';
// import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      // {
      //   path: 'default',
      //   component: DefaultComponent,
      //   // pathMatch: 'full',
      // },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      // {
      //   path: 'posts',
      //   component: PostsComponent
      // },
      {
        path: 'add-device',
        component: AddDeviceComponent
      },
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'help',
        component: HelpComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
