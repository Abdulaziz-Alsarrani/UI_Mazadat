import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazadatPage } from './mazadat-page';

describe('MazadatPage', () => {
  let component: MazadatPage;
  let fixture: ComponentFixture<MazadatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MazadatPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MazadatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
