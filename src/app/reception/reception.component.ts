import { ReceptionsListService } from './../receptions-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
})
export class ReceptionComponent implements OnInit {
  @Input() reception!: {
    name: string;
    ingredients: string;
    imageLink: string;
  };

  constructor(
    private receptionsListService: ReceptionsListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // this.reception = this.receptionsListService.getReceptionData(id);
    this.route.params.subscribe((params: Params) => {
      // this.reception = this.receptionsListService.getReceptionData(
      //   +params['id']
      // );
    });
  }
}
