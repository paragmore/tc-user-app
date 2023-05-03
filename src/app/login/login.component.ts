import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginHtml: SafeHtml | undefined;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http
      .get('http://localhost:8000/auth', { responseType: 'text' })
      .subscribe((html: string) => {
        this.loginHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        const div = document.createElement('div');
        div.innerHTML = html;
        const mainDiv = document.getElementById('login-ionic-container');
        mainDiv?.appendChild(div)
        const script = document.createElement('script');
        if (div.querySelector('script') != null) {
          console.log(div.querySelector('script') != null);
          const scriptH = div.querySelector('script')?.innerHTML;
          if (scriptH) {
            script.innerHTML = scriptH;
          }
        }

        document.body.appendChild(script);
      });
  }
}
