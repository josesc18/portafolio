import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: 'full' },
  { path: "inicio", component: HomeComponent },
  { path: "acerca-de-mi", component: AboutmeComponent },
  { path: "proyectos", component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
