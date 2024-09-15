// Angular Import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BajajChartComponent } from './bajaj-chart/bajaj-chart.component';
import { ChartDataMonthComponent } from './chart-data-month/chart-data-month.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {}
