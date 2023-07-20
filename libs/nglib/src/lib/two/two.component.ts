import { Component, Input } from '@angular/core';

@Component({
  selector: 'sbit-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {
  @Input() name = 'Two';
  @Input() age = 2;
  @Input() isIt = false;
}
