import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LayoutcomponentComponent } from './layout.component';
import { AuthService } from 'src/app/shared/auth.service';

describe('LayoutcomponentComponent', () => {
  let component: LayoutcomponentComponent;
  let fixture: ComponentFixture<LayoutcomponentComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AuthService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search',()=>{
    expect(component.searchEmployee("Hello"))
  })
});
