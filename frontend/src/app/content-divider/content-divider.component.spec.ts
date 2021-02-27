import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentDividerComponent} from './content-divider.component';

describe('ContentDividerComponent', () => {
  let component: ContentDividerComponent;
  let fixture: ComponentFixture<ContentDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentDividerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
