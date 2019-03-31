import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent {
  name = new FormControl('AnsonChan',Validators.required)
  
  updateName(){
    this.name.setValue('Boyhans')
  }


}
