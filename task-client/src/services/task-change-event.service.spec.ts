import { TestBed } from '@angular/core/testing';

import { TaskChangeEventService } from './task-change-event.service';

describe('TaskChangeEventService', () => {
  let service: TaskChangeEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskChangeEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
