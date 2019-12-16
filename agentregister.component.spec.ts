import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentregisterComponent } from './agentregister.component';

describe('AgentregisterComponent', () => {
  let component: AgentregisterComponent;
  let fixture: ComponentFixture<AgentregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
