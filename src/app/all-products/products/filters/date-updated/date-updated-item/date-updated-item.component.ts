import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-updated-item',
  templateUrl: './date-updated-item.component.html',
  styleUrls: ['./date-updated-item.component.css']
})
export class DateUpdatedItemComponent {
@Input() Date!: String;
@Input() total!: number;
}
