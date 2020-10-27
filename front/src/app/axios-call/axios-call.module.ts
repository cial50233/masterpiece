import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AxiosCallModule {

  axiosCall(config) {
    var axios = require('axios');

    let self = this;
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        document.getElementById("alertMsg").setAttribute("style", "display:block;");
        self.errorMsg = "Announcement edited";
        document.getElementById("alertMsg").classList.add("alert-success");
        document.getElementById("alertMsg").classList.remove('alert-danger');
        self.adForm.reset();
        self.edited = true;
      })
      .catch(function (error) {
        console.log(error);
        document.getElementById("alertMsg").setAttribute("style", "display:block;");
        self.errorMsg = "Error";
        document.getElementById("alertMsg").classList.add('alert-danger');
        document.getElementById("alertMsg").classList.remove("alert-success");
      });

  }

}
