import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LogincomponentComponent } from './login.component';
import { AuthService } from 'src/app/shared/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogincomponentComponent', () => {
  let component: LogincomponentComponent;
  let fixture: ComponentFixture<LogincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LogincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AuthService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
});
