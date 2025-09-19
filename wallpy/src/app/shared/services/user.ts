import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth';
import { QueryService } from 'src/app/core/services/query';
@Injectable({ providedIn:'root' })
export class UserService {
  constructor(private auth:AuthService, private q:QueryService){}
  profile(){ return this.q.getUserProfile(); }
  uid(){ return this.auth.uid!; }
}
