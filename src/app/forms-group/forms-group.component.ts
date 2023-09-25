import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-group',
  templateUrl: './forms-group.component.html',
  styleUrls: ['./forms-group.component.css']
})
export class FormsGroupComponent {
onSubmit(log:any) {
console.log('form submiotted', log.form.controls.fname.value)
}

}
