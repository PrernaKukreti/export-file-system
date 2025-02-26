import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExportComponent } from './export.component';
import { MatIconModule } from '@angular/material/icon';

describe('ExportComponent', () => {
  let component: ExportComponent;
  let fixture: ComponentFixture<ExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportComponent],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportComponent);
    component = fixture.componentInstance;
    component.isVisible = false;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should show the export alert popup', () => {
      component.ngOnInit();
      expect(component.isVisible).toBeTruthy();
    });
  });

  describe('close', () => {
    it('should close the export alert popup', () => {
      component.isVisible = true;
      component.close();
      expect(component.isVisible).toBeFalsy();
    });
  });

  describe('getKeys', () => {
    it('should return keys of an object', () => {
      const testObject = { name: 'File1', device: 'Device', path: 'Path1' };
      const keys = component.getKeys(testObject);
      expect(keys).toEqual(['name', 'device', 'path']);
    });

    it('should return an empty array for an empty object', () => {
      const keys = component.getKeys({});
      expect(keys).toEqual([]);
    });
  });
});
