import {Component, inject, Injector} from '@angular/core';
import {createBlockScrollStrategy, OverlayContainer} from '@angular/cdk/overlay';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'block-scroll-strategy-e2e',
  templateUrl: 'block-scroll-strategy-e2e.html',
  styleUrl: 'block-scroll-strategy-e2e.css',
  imports: [ScrollingModule],
})
export class BlockScrollStrategyE2E {
  scrollStrategy = createBlockScrollStrategy(inject(Injector));

  constructor() {
    // This loads the structural styles for the test.
    inject(OverlayContainer).getContainerElement();
  }
}
