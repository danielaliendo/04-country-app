import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent {

  public countries: Country[] = []
  public isLoading: boolean = false

  constructor(private contriesService: CountriesService) {

  }

  searchByCapital(term: string) {
    this.isLoading = true
    this.contriesService.searchByCapital(term)
      .subscribe((countries: Country[]) => {
        this.countries = countries
        this.isLoading = false
      })
  }

}
