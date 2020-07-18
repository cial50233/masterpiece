import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UploadService } from '../services/upload.service';


@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  selectedFile: File = null;

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

  constructor(private http: HttpClient, private uploadService: UploadService) { }


  ngOnInit(): void {
  }


  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }

  private uploadFiles() {
    alert(this.fileUpload.nativeElement.files[0].name);
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement; 
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }


  //--
  onFileSelected(event) {

    console.log(event);

    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('', fd)
      .subscribe(res => {
        console.log(res);
      });
  }

  imgAdd() {
    const d = document.createElement('div');
    const elts = '<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Yoshi<input type="file" class="uploadFile img" value="Upload Photo" style="width: 0px;height: 0px;overflow: hidden;" (click)="onUpload"></label></div><i class="fa fa-plus imgAdd" (click)="imgAdd">+</i>';
    const app = document.getElementById("app");
    //app.append('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Yoshi<input type="file" class="uploadFile img" value="Upload Photo" style="width: 0px;height: 0px;overflow: hidden;" (click)="onUpload"></label></div><i class="fa fa-plus imgAdd" (click)="imgAdd">+</i>');
    //app.append('<div></div>');
    app.insertAdjacentHTML('beforeend', elts);
  }

  file: File;

  onFileAdd(file: File) {
    this.file = file;
  }

  onFileRemove() {
    this.file = null;
  }

}
