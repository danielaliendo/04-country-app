import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: ByCapital
  byRegion: ByRegion
  byCountries: ByCountries
}

export interface ByCapital {
  term: string
  countries: Country[] | []
}

interface ByRegion {
  term: Region
  countries: Country[] | []
}

interface ByCountries {
  term: string
  countries: Country[]| []
}
