/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {MediaMatcher} from './media-matcher';
import {TestBed} from '@angular/core/testing';
import {Platform} from '../platform';

describe('MediaMatcher', () => {
  let mediaMatcher: MediaMatcher;
  let platform: Platform;

  beforeEach(() => {
    mediaMatcher = TestBed.inject(MediaMatcher);
    platform = TestBed.inject(Platform);
  });

  it('correctly returns a MediaQueryList to check for matches', () => {
    expect(mediaMatcher.matchMedia('(min-width: 1px)').matches).toBeTruthy();
    expect(mediaMatcher.matchMedia('(max-width: 1px)').matches).toBeFalsy();
  });

  it('should add CSS rules for provided queries when the platform is webkit or blink', () => {
    const width = '123456px';

    expect(getStyleTagByString(width)).toBeFalsy();
    mediaMatcher.matchMedia(`(width: ${width})`);

    if (platform.WEBKIT || platform.BLINK) {
      expect(getStyleTagByString(width)).toBeTruthy();
    } else {
      expect(getStyleTagByString(width)).toBeFalsy();
    }

    function getStyleTagByString(str: string): HTMLStyleElement | undefined {
      return Array.from(document.head!.querySelectorAll('style')).find(tag => {
        const rules = tag.sheet ? Array.from((tag.sheet as CSSStyleSheet).cssRules) : [];
        return !!rules.find(rule => rule.cssText.includes(str));
      });
    }
  });
});
