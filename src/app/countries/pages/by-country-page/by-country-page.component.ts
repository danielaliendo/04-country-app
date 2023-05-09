import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})

export class ByCountryPageComponent {
  public countries: Country[] = []
  public isLoading: boolean = false

  constructor(private contriesService: CountriesService) {

  }

  searchByCountry(term: string) {
    this.isLoading = true
    this.contriesService.searchByCountry(term)
    .subscribe((countries: Country[]) => {
      this.countries = countries
      this.isLoading = false
    })
  }
}
