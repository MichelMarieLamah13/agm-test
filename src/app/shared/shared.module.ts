import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';



@NgModule({
  declarations: [
    LayoutContentComponent,
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
