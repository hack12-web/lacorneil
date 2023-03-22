import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private readonly APIUrl = "http://localhost:5263/api";

  constructor(private http: HttpClient) { }

  public getProducts():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Product');
  }
  public addProducts(value:any){
    return this.http.post(this.APIUrl+'/Product',value);
  }
  public deleteProducts(value:any){
    return this.http.delete(this.APIUrl+'/Product/'+value);
  }
  public updateProducts(value:any){
    return this.http.put(this.APIUrl+'/Product',value);
  }
}