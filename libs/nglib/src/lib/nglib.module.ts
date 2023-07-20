import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExampleComponent, TwoComponent],
})
export class NglibModule {}
