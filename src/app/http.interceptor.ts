import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const HttpInterceptor: HttpInterceptorFn = ( req: HttpRequest<unknown>,
  next: HttpHandlerFn) => {
  return next(req);
};
