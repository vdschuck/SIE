import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    private authService : AuthService;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('intercept');
      const token = this.authService.getToken();
      if (token) {

        const authHeader = this.authService.getToken();

        const authRequest = req.clone({
          headers: req.headers.set('Authorization', authHeader)
        });
        
        return next.handle(authRequest);
      }
      else {
          return next.handle(req);
      }
    }
}