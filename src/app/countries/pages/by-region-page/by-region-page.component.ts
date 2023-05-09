import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent {

  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public isLoading:boolean = false
  public selectedRegion?: Region

  constructor(private contriesService: CountriesService) {

  }

  searchByRegion(term: Region) {
    this.selectedRegion = term
    this.isLoading = true
    this.contriesService.searchByRegion(term)
    .subscribe((countries: Country[]) => {
      this.countries = countries
      this.isLoading = false
    })
  }
}
