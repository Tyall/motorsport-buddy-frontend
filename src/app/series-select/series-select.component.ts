import { Component, inject } from '@angular/core';
import { SeriesInfo } from './series-select.interface';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-series-select',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './series-select.component.html',
  styleUrl: './series-select.component.css'
})
export class SeriesSelectComponent {
  constructor(public router: Router){};

  private apiServerUrl = environment.apiBaseUrl + `/series-selector`;

  httpClient = inject(HttpClient);
  public seriesInfo: Array<SeriesInfo> = [];
  
  ngOnInit() {
    this.httpClient.get<SeriesInfo[]>(`${this.apiServerUrl}/configuration`)
      .subscribe({
        next: (data: any) => {
          this.seriesInfo = data;
        }, error: (err) => console.log(err)
      });
  }
}
