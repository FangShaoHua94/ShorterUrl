import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClipboardJS from 'clipboard';
import { BitlyService } from '../bitly.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() shortenUrl
  btn = new ClipboardJS('.btn');

  constructor(private bitly: BitlyService) { }

  ngOnInit(): void {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    // console.log(baseUrl)
    this.shortenUrl=this.bitly.getShorterUrl(baseUrl).subscribe((res) => {
      this.shortenUrl = res['link']
    })
  }

  onFormSubmit(form: NgForm) {
    // console.log(form.value.url)
    this.bitly.getShorterUrl(form.value.url).subscribe((res) => {
      // console.log(res)
      // console.log(res['link'])
      this.shortenUrl = res['link']
    })
  }
}
