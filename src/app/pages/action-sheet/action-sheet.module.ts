import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { ActionSheetPage } from './action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
