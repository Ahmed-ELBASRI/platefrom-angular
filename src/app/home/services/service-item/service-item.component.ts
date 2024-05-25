import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent {
  @Input() plan :string="";
  @Input() planDescription :string="";
  @Input() storesetup :string="";
  @Input() products :string="";
  @Input() storage :string="";
  @Input() support :string="";
  @Input() price :string="";
  @Input() shortDescription :string="";

}
