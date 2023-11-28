import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OptionsComponent } from './components/options/options.component';
import { OptionsRoutingModule } from './options-routing.module';

@NgModule({
  declarations: [OptionsComponent],
  imports: [CommonModule, OptionsRoutingModule],
})
export class OptionsModule {}
