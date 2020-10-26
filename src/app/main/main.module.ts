import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { LeftMenuComponent } from '../layout/left-menu/left-menu.component';
import { HeaderComponent } from '../layout/header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../core/guards/auth.guard';

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    FooterComponent,
    MainComponent,
    DashboardComponent,
    ChatboxComponent,
  ],
  imports: [CommonModule, HttpClientModule, MainRoutingModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    DashboardComponent,
  ],
  providers: [AuthGuard],
})
export class MainModule {}
