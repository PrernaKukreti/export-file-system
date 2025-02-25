import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-export',
  standalone: false,
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss'
})
export class ExportComponent {
  @Input() exportData: any = ''; // Input binding for message
  @Output() closeEvent = new EventEmitter<void>(); // Emit event when closed
  isVisible: boolean = false; // Controls visibility of the alert

  ngOnInit() {
    this.show();
  }

  show() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
    this.closeEvent.emit();
  }

  
  getKeys(item: any) {
    return Object.keys(item); 
  }
}
