import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  //nav
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;

  @Input() alignment = 'center';
  @Input() color = '';
  @Input() header = '';
  @Input() footer = '';
  @Input() src = '';
  @Input() headerType = '';
  @Input() title = '';
  @Input() panelClass = '';
  @Input() type= '';
  @Input() side = '';
  @Input() size = '';

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: '#1'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: '#2'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: '#3'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors:Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  imagesBasic = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      description: 'Image 1'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      description: 'Image 2'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      description: 'Image 3'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      description: 'Image 4'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      description: 'Image 5'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      description: 'Image 6'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      description: 'Image 7'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      description: 'Image 8'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      description: 'Image 9'
    }];

  constructor() {
    this.clicked = this.clicked === undefined ? false : true;
  }
     
  ngOnInit() {
  }
  setClicked(val: boolean): void {
    this.clicked = val;
  }

  getClass = function() {
    const type = this.type;
    const size = this.size;
    const side = this.side;
 
    if (type === 'central') {
      if (size === 'small') {
        return 'modal-sm';
      } else if (size === 'large') {
        return 'modal-lg';
      } else if (size === 'fluid') {
        return 'modal-fluid';
      } else {
        return '';
      }
    } else if (type === 'side') {
        if (side === 'top-left') {
          return 'modal-side modal-top-left';
        } else if (side === 'bottom-left') {
          return 'modal-side modal-bottom-left';
        } else if (side === 'bottom-right') {
          return 'modal-side modal-bottom-right';
        } else {
          return 'modal-side modal-top-right';
        }
    } else if (type === 'fluid') {
        if (side === 'right') {
          return 'modal-full-height modal-right';
        } else if (side === 'left') {
          return 'modal-full-height modal-left';
        } else if (side === 'bottom') {
          return 'modal-full-height modal-bottom';
        } else {
          return 'modal-full-height modal-top';
        }
    } else if (type === 'frame') {
        if (side === 'bottom') {
          return 'modal-frame modal-bottom';
        } else {
        return 'modal-frame modal-top';
        }
      } else {
          return '';
      }
    };
}
