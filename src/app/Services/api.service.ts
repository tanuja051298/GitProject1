import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postData(dt:any){
    return this.http.post("http://localhost:3000/student",dt);
  }

  getData(){
    return this.http.get("http://localhost:3000/student");
  }
  deleteData(id:any){
    return this.http.delete("http://localhost:3000/student/"+id);
  }
  updateData(data:any){
    return this.http.put("http://localhost:3000/student/"+data.id,data);

  }
}
