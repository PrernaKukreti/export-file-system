import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [MatIconModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.data = [
      { name: 'File1', device: 'Device1', path: 'Path1', status: 'available' },
      { name: 'File2', device: 'Device2', path: 'Path2', status: 'available' },
      { name: 'File3', device: 'Device3', path: 'Path3', status: 'available' },
    ];
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should append the selected parameters to the input data ', () => {
      component.ngOnInit();
      expect(component.tabularData).toEqual([
        {
          name: 'File1',
          device: 'Device1',
          path: 'Path1',
          status: 'available',
          selected: false,
        },
        {
          name: 'File2',
          device: 'Device2',
          path: 'Path2',
          status: 'available',
          selected: false,
        },
        {
          name: 'File3',
          device: 'Device3',
          path: 'Path3',
          status: 'available',
          selected: false,
        },
      ]);
    });
  });

  describe('when selectedCount', () => {
    it('should return the correct count of selected ', () => {
      //Assert the data
      component.tabularData = [
        {
          name: 'File1',
          device: 'Device1',
          path: 'Path1',
          status: 'available',
          selected: true,
        },
        {
          name: 'File2',
          device: 'Device2',
          path: 'Path2',
          status: 'available',
          selected: false,
        },
        {
          name: 'File3',
          device: 'Device3',
          path: 'Path3',
          status: 'available',
          selected: true,
        },
      ];
      component.selectedCount();
      expect(component.selectedCount()).toBe(2);
    });
  });

  describe('when updateSelection', () => {
    it('should update the selectedAllLabel as None selected and selectAll as false when no files are selected', () => {
      //Assert the data
      component.tabularData = [
        {
          name: 'File1',
          device: 'Device1',
          path: 'Path1',
          status: 'available',
          selected: false,
        },
        {
          name: 'File2',
          device: 'Device2',
          path: 'Path2',
          status: 'available',
          selected: false,
        },
        {
          name: 'File3',
          device: 'Device3',
          path: 'Path3',
          status: 'available',
          selected: false,
        },
      ];
      component.updateSelection();
      expect(component.selectedAllLabel).toBe('None Selected');
      expect(component.selectAll).toBeFalse();
      expect(component.indeterminate).toBeFalse();
    });

    it('should update the selected count and selectAll as true when all files are selected', () => {
      component.tabularData.forEach((data) => (data.selected = true));
      component.updateSelection();
      expect(component.selectedAllLabel).toBe('Selected 3');
      expect(component.selectAll).toBeTrue();
      expect(component.indeterminate).toBeFalse();
    });

    it('should update the selected count and selectAll as false when some files are selected', () => {
      //Assert the data
      component.tabularData = [
        {
          name: 'File1',
          device: 'Device1',
          path: 'Path1',
          status: 'available',
          selected: false,
        },
        {
          name: 'File2',
          device: 'Device2',
          path: 'Path2',
          status: 'available',
          selected: true,
        },
        {
          name: 'File3',
          device: 'Device3',
          path: 'Path3',
          status: 'available',
          selected: false,
        },
      ];
      component.updateSelection();
      expect(component.selectedAllLabel).toBe('Selected 1');
      expect(component.selectAll).toBeFalse();
      expect(component.indeterminate).toBeTrue();
    });
  });

  describe('when toggleSelectAll', () => {
    it('should toggle the selection for all files', () => {
      //Assert the data
      component.tabularData = [
        {
          name: 'File1',
          device: 'Device1',
          path: 'Path1',
          status: 'available',
          selected: false,
        },
        {
          name: 'File2',
          device: 'Device2',
          path: 'Path2',
          status: 'available',
          selected: false,
        },
        {
          name: 'File3',
          device: 'Device3',
          path: 'Path3',
          status: 'available',
          selected: false,
        },
      ];
      component.toggleSelectAll();
      expect(component.tabularData[0].selected).toBeTrue();
      expect(component.tabularData[1].selected).toBeTrue();
      // Toggle select all again to uncheck the selected files
      component.toggleSelectAll();
      expect(component.tabularData[0].selected).toBeFalse();
      expect(component.tabularData[1].selected).toBeFalse();
    });
  });

  describe('when exportFiles', () => {
    it('should export only selected files with available status', () => {
      component.tabularData = component.tabularData = [
        {
          name: 'File1',
          device: 'Device1',
          path: 'Path1',
          status: 'available',
          selected: true,
        },
        {
          name: 'File2',
          device: 'Device2',
          path: 'Path2',
          status: 'scheduled',
          selected: false,
        },
        {
          name: 'File3',
          device: 'Device3',
          path: 'Path3',
          status: 'available',
          selected: true,
        },
      ];
      component.exportFiles();
      expect(component.exportData).toEqual([
        { Device: 'Device1', Path: 'Path1' },
        { Device: 'Device3', Path: 'Path3' },
      ]);
    });
  });
});
