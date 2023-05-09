import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private API_URL: string = 'https://restcountries.com/v3.1'

  public url: string = ''

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { term: 'Africa', countries: [] },
  }

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    this.url = `${this.API_URL}/alpha/${code}`
    return this.getResults(this.url)
      .pipe(
        map((countries: Country[]) => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      )
  }

  searchByCapital(term: string): Observable<Country[]> {
    this.url = `${this.API_URL}/capital/${term}`
    return this.getResults(this.url)
      .pipe(
        tap((countries) => this.cacheStore.byCapital = {
          term,
          countries
        })
      )
  }

  searchByCountry(term: string): Observable<Country[]> {
    this.url = `${this.API_URL}/name/${term}`
    return this.getResults(this.url)
    .pipe(
      tap((countries) => this.cacheStore.byCountries = {
        term,
        countries
      })
    )
  }

  searchByRegion(region: Region): Observable<Country[]> {
    this.url = `${this.API_URL}/region/${region}`
    return this.getResults(this.url)
    .pipe(
      tap((countries) => this.cacheStore.byRegion = {
        term: region,
        countries
      })
    )
  }

  getResults(url: string) {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError((error) => {
          console.error(error)
          return of([])
        })
      )
  }

}
