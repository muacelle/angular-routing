import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SobreComponent } from './sobre/sobre.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home-page', component: HomepageComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', redirectTo: 'home-page', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
