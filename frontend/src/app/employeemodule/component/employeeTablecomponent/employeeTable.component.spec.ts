import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ListcomponentComponent } from './employeeTable.component';
import { AuthService } from 'src/app/shared/auth.service';

describe('ListcomponentComponent', () => {
  let component: ListcomponentComponent;
  let fixture: ComponentFixture<ListcomponentComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AuthService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
