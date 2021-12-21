import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContentComponent } from './shared/layout/layout-content/layout-content.component';
import { content } from './shared/routes/content-routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutContentComponent,
    children: content,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
