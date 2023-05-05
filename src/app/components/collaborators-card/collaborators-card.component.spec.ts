import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsCardComponent } from './collaborators-card.component';

describe('CollaboratorsCardComponent', () => {
  let component: CollaboratorsCardComponent;
  let fixture: ComponentFixture<CollaboratorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
