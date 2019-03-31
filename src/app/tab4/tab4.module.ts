import { HeroFormComponent } from './hero-form/hero-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
// 如果某个组件、指令或管道是属于 imports 中所导入的某个模块的，那就不能再把它再声明到本模块的 declarations 数组中。
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }])
  ],
  declarations: [Tab4Page,NameEditorComponent,ProfileEditorComponent,HeroFormComponent]
})
export class Tab4PageModule { }
