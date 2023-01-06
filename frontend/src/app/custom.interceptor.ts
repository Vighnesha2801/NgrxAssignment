import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './shared/auth.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders:{
        authorization:`Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
