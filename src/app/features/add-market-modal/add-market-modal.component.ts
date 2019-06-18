import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

class DialogData {
}

@Component({
  selector: 'app-add-market-modal',
  templateUrl: './add-market-modal.component.html',
  styleUrls: ['./add-market-modal.component.scss']
})
export class AddMarketModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

}
