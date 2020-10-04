import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_LANG, LANG_TOKEN} from '../../constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currLang: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.currLang = localStorage.getItem(LANG_TOKEN) || APP_LANG.DE;
  }

  onLangChange(): void {
    this.currLang = this.currLang === APP_LANG.EN ? APP_LANG.DE : APP_LANG.EN;
    localStorage.setItem(LANG_TOKEN, this.currLang);
    this.translate.use(this.currLang);
  }

}
