import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouCanDoComponent } from './what-you-can-do.component';

describe('WhatYouCanDoComponent', () => {
  let component: WhatYouCanDoComponent;
  let fixture: ComponentFixture<WhatYouCanDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatYouCanDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouCanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
