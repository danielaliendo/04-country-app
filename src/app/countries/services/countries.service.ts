import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private API_URL: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  public url: string = ''

  searchByCapital(term: string): Observable<Country[]> {
    this.url = `${this.API_URL}/capital/${term}`
    return this.getResults(this.url)
  }

  searchByCountry(term: string): Observable<Country[]> {
    this.url = `${this.API_URL}/name/${term}`
    return this.getResults(this.url)
  }

  searchByRegion(term: string): Observable<Country[]> {
    this.url = `${this.API_URL}/region/${term}`
    return this.getResults(this.url)
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
