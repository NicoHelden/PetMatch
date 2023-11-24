import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDateComponent } from './setup-date.component';

describe('SetupDateComponent', () => {
  let component: SetupDateComponent;
  let fixture: ComponentFixture<SetupDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
