import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const access = localStorage.getItem('access')

  if (access) {
    const newReq =  req.clone({
      headers: req.headers.set('Authorization', `Bearer ${access}`)
    })
    return next(newReq);
  }
  return next(req);
};