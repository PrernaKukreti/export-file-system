import { Component, Input } from '@angular/core';
import { selectedFileDetail } from '../models/common';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @Input() data?: any;
  headers: Array<string> = ['Name', 'Device', 'Path', 'Status'];
  indeterminate: boolean = false;
  selectAll: boolean = false;
  selectedAllLabel: string = 'None Selected';
  tabularData: Array<selectedFileDetail> = [];
  exportData: any = [];
  showExport: boolean = false;

  constructor() {}

  ngOnInit() {
    this.tabularData = this.data.map((data) => ({
      ...data,
      selected: false,
    }));
  }

  selectedCount(): number {
    return this.tabularData.filter((data) => data.selected).length;
  }

  updateSelection(): void {
    const selectedCount = this.selectedCount();
    this.selectedAllLabel = selectedCount
      ? `Selected ${selectedCount}`
      : `None Selected`;
    const totalAvailable = this.tabularData.length;
    this.selectAll = selectedCount === totalAvailable;
    this.indeterminate = selectedCount > 0 && selectedCount < totalAvailable;
  }

  toggleSelectAll(): void {
    const newState = !this.selectAll;
    this.tabularData.forEach((data) => (data.selected = newState));
    this.updateSelection();
  }

  exportFiles(): void {
    this.exportData = this.tabularData
      .filter((data) => data.selected && data.status === 'available')
      .map((data) => ({
        Device: data.device,
        Path: data.path,
      }));
    this.showExport = true;
  }
}
