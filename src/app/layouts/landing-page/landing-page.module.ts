import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
// import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AddDeviceComponent } from 'src/app/modules/add_device/add-device.component';
import { DevicesComponent } from 'src/app/modules/devices/devices.component';
import { HelpComponent } from 'src/app/modules/help/help.component';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { DefaultComponent } from '../default/default.component';

@NgModule({
  declarations: [
    // LandingPageComponent,
    // DashboardComponent,
    // DevicesComponent,
    // AddDeviceComponent,
    // HelpComponent,
    // SettingsComponent
    // PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule, 
  ]
})
export class LandingPageModule { }
