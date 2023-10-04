import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { FormBuilder, } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public address = {
    addressLine: '',
    city: '',
    state:''
  }

  cepForm = this.formBuilder.group({
    valueCEP: ''
  });

  constructor (
    private search: SearchService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
   ){}


  getDataFromCEP() {
    this.search.getDetailsCEP(this.cepForm.value.valueCEP).subscribe((data) => this.setData(data)) 
  }

  setData(data: any) {
    this.address.addressLine = `${data.logradouro} - ${data.bairro}`;
    this.address.city = data.localidade;
    this.address.state = data.uf;

    this.changeDetectorRef.detectChanges();
  }

}
