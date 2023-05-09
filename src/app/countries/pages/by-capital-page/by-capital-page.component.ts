import { CacheStore } from './../../interfaces/cache-store.interface';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []
  public isLoading: boolean = false
  public initialValue: string = ''

  constructor(private contriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.contriesService.cacheStore.byCapital.countries
    this.initialValue = this.contriesService.cacheStore.byCapital.term
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
