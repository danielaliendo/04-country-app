import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})

export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = []
  public isLoading: boolean = false
  public initialValue: string = ''

  constructor(private contriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.contriesService.cacheStore.byCountries.countries
    this.initialValue = this.contriesService.cacheStore.byCountries.term
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
