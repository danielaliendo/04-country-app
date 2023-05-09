import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public isLoading:boolean = false
  public selectedRegion?: Region

  constructor(private contriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.contriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.contriesService.cacheStore.byRegion.term
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
