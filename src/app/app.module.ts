import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ProjectComponent } from './pages/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    AboutmeComponent,
    ProjectComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
