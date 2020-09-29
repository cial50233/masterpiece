import { Component, OnInit, Input } from '@angular/core';
import { TransfereService } from '../services/transfere.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ad',
  templateUrl: './view-ad.component.html',
  styleUrls: ['./view-ad.component.scss']
})
export class ViewAdComponent implements OnInit {

  errorMsg = "";
  edited = false;
  announcement = this.transfereService.getData();

  constructor(
    private transfereService: TransfereService,
    private location: Location,
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {


  }

  onReturn() {
    this.location.back();
  }


  delete(id) {
    this.httpClient
      .delete('http://localhost:8081/api/announcements/' + id)
      .subscribe(
        (data) => {
          console.log(data);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Deleted";
          document.getElementById("alertMsg").classList.add("alert-success");
          document.getElementById("alertMsg").classList.remove('alert-danger');
          document.getElementById("deleteBtn").setAttribute("style", "display:none;");
          this.edited = true;
        },
        (error) => {
          console.log(error);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Error";
          document.getElementById("alertMsg").classList.add('alert-danger');
          document.getElementById("alertMsg").classList.remove("alert-success");
        }
      );
  }

  edit(e) {
    this.transfereService.setData(e);
    this.router.navigate(['/ad']);

  }
}
