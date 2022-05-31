import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootherComponent } from 'src/app/components/foother/foother.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { HeaderAdminComponent } from 'src/app/components/header-admin/header-admin.component';



@NgModule({
  declarations: [
    FootherComponent,
    SidebarComponent,
    HeaderAdminComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FootherComponent,
    SidebarComponent,
    HeaderAdminComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
