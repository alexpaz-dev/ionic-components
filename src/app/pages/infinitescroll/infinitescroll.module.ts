import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitescrollPageRoutingModule } from './infinitescroll-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { InfinitescrollPage } from './infinitescroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitescrollPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [InfinitescrollPage]
})
export class InfinitescrollPageModule {}
