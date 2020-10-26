import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isShowPopup: boolean;
  selectionInfo: string;
  temp: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getDashboardMenu();
  }

  getDashboardMenu(): void {
    this.dashboardService.getDashboardMenu().subscribe((result) => {
      this.temp = result.DashBoard;
    });
  }

  openChatBox(data: string): void {
    this.isShowPopup = true;
    this.selectionInfo = data;
  }

  closeChatBoxModel(event): void {
    this.isShowPopup = event;
  }
}
