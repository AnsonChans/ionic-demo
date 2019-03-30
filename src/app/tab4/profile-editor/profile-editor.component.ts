import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
})
export class ProfileEditorComponent {
  //手动创建实例
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address:new FormGroup({
  //     street:new FormControl(''),
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     zip:new FormControl('')
  //   })
  // })
  //利用表单构建器来创建实例
  //每个控件名对应一个数组，第一项为初始值，第二第三项分别提供同步和异步验证器
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    // FormArray用于管理任意数量的匿名控件
    aliases:this.fb.array([
      this.fb.control('')
    ])
  })

  get aliases(){
    return this.profileForm.get('aliases') as FormArray
  }

  addAlias(){
    this.aliases.push(this.fb.control(''))
  }

  onSubmit() {
    console.warn(this.profileForm.value)
  }
  // 有两种更新模型值的方式：
  // 1、使用setValue()方法来为单个控件设置新值，setValue()会严格遵循表单组的结构，并整体性替换控件的值
  // 2、使用patchValue()方法可以用对象中所定义的任何属性为表单模型进行替换
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Chans',
      address: {
        street: 'Yi Hua'
      }
    })
  }
  // 使用FormBuilder生成表单控件
  //FormBuilder服务有三个方法：control(),group(),array()
  constructor(private fb: FormBuilder) { }
}
