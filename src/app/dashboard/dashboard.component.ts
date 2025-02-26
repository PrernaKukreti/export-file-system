import { Component, Input, OnInit } from '@angular/core';
import {
  exportFileData,
  fileDetail,
  selectedFileDetail,
} from '../models/common';

import {
  STATUS
} from '../constants/constants';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  @Input() data?: Array<fileDetail>;
  headers: Array<string> = ['Name', 'Device', 'Path', 'Status'];
  indeterminate: boolean = false;
  selectAll: boolean = false;
  selectedAllLabel: string = 'None Selected';
  tabularData: Array<selectedFileDetail> = [];
  exportData: Array<exportFileData> = [];
  showExport: boolean = false;

  constructor() {}

  /**
   * Component loads
   */
  ngOnInit() {
    this.tabularData = this.data.map((data) => ({
      ...data,
      selected: false,
    }));
  }


  /**
   * Filter the selected files
   */
  selectedCount(): number {
    return this.tabularData.filter((data) => data.selected && data.status === STATUS.AVAILABLE).length;
  }

  /**
   * Updates the selected files count
   * Checks the state of 'select-all' checkbox.
   * Shows 'None Selected' if no files are selected
   */
  updateSelection(): void {
    const selectedCount = this.selectedCount();
    this.selectedAllLabel = selectedCount
      ? `Selected ${selectedCount}`
      : `None Selected`;
    const totalAvailable = this.tabularData.filter(data => data.status === STATUS.AVAILABLE).length;
    this.selectAll = selectedCount === totalAvailable;
    this.indeterminate = selectedCount > 0 && selectedCount < totalAvailable;
  }

  /**
   * Toggles the selection state for all files when select all checkbox is clicked.
   * Calls `updateSelection()` to ensure consistency.
   */
  toggleSelectAll(): void {
    const newState = !this.selectAll;
    this.tabularData.forEach((data) => (data.selected = newState && data.status === STATUS.AVAILABLE));
    this.updateSelection();
  }

  /**
   * Loads the export alert component.
   * Formats the export data in the re-usable format
   */
  exportFiles(): void {
    this.exportData = this.tabularData
      .filter((data) => data.selected && data.status === STATUS.AVAILABLE)
      .map((data) => ({
        Device: data.device,
        Path: data.path,
      }));
    this.showExport = true;
  }
}
