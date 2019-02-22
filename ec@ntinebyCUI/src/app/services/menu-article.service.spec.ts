import { TestBed } from '@angular/core/testing';

import { MenuArticleService } from './menu-article.service';

describe('MenuArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuArticleService = TestBed.get(MenuArticleService);
    expect(service).toBeTruthy();
  });
});
