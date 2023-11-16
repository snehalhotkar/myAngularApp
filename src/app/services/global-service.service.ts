import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http:HttpClient) { }

  headers(){
    const httpOptions = new HttpHeaders({})
    return httpOptions 
  }

  public basePathUrl(){
    return "http://localhost:8100" 
  }

  public postRequest(url:any,data:any){
    return this.http.post(url,data,{headers:this.headers()})
  }

  public getRequest(url:any){
    return this.http.get(url,{headers:this.headers()})
  }
}
