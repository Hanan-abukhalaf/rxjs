
import { Observable } from 'rxjs';
import { findIndex } from 'rxjs/internal-compatibility';

(Observable as any).prototype.findIndex = findIndex;

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    findIndex: typeof findIndex;
  }
}
