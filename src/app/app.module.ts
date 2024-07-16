import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsboxComponent } from './components/skillsbox/skillsbox.component';
import { SkillsdesignComponent } from './components/skillsdesign/skillsdesign.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ModalphotosComponent } from './components/modalphotos/modalphotos.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CvLinkedComponent } from './components/cv-linked/cv-linked.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HeroComponent,
    AboutmeComponent,
    SkillsComponent,
    SkillsboxComponent,
    SkillsdesignComponent,
    ExperienceComponent,
    ModalphotosComponent,
    StudiesComponent,
    ContactComponent,
    CvLinkedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
