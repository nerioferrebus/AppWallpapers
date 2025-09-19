import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InputComponent } from './components/input.component';
import { ButtonComponent } from './components/button.component';
import { FabComponent } from './components/fab.component';
import { CardComponent } from './components/card.component';
import { LinkComponent } from './components/link.component';
import { ToggleTranslateComponent } from './components/toggle-translate.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  declarations: [
    InputComponent,
    ButtonComponent,
    FabComponent,
    CardComponent,
    LinkComponent,
    ToggleTranslateComponent,
  ],
  exports: [
    CommonModule, IonicModule, FormsModule, ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    FabComponent,
    CardComponent,
    LinkComponent,
    ToggleTranslateComponent,
  ],
})
export class SharedModule {}
