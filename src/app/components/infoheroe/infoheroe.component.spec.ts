import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoheroeComponent } from './infoheroe.component';

describe('InfoheroeComponent', () => {
  let component: InfoheroeComponent;
  let fixture: ComponentFixture<InfoheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoheroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
