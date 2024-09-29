import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { SpinnerService } from "./services/spinner.service";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.setSpinner(true);
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            /* if(event.status == 401) {
              alert('Unauthorized access!')
            } */
            if(event.status === 200) {
              this.spinnerService.setSpinner(false);
            //  alert('Success');
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            this.spinnerService.setSpinner(false);
            alert('Unauthorized access!')
          }
          else if(error.status === 404) {
            this.spinnerService.setSpinner(false);
           // alert('Page Not Found!')
          }
        }
      }));
  }
}
