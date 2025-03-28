import {AfterViewInit, Component, ViewEncapsulation, inject} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-scene',
  template: '',
  styleUrls: ['./bottom-sheet-scene.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BottomSheetScene implements AfterViewInit {
  private _bottomSheet = inject(MatBottomSheet);

  ngAfterViewInit(): void {
    this._bottomSheet.open(SampleBottomSheet);
  }
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-bottom-sheet-scene',
  templateUrl: './bottom-sheet-scene.html',
  styleUrls: ['./bottom-sheet-scene.scss'],
  imports: [MatListModule, MatIconModule],
})
export class SampleBottomSheet {}
