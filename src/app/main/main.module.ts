import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, IgxGridModule],
})
export class MainModule {}
