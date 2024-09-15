// angular import
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export default class SampleComponent {
  @ViewChild('exampleModal') exampleModal: ElementRef;

  showModal() {
    const modal = new Modal(this.exampleModal.nativeElement);
    modal.show();
  }
}
