import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    MenuModule, // Sera le module par default de Home
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
   ]
})
export class HomeModule { }
