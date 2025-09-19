import { Injectable, Inject } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { supabase } from '../supabase.client';
import { AuthService } from './auth';
import { QueryService } from './query';

@Injectable({ providedIn:'root' })
export class UploaderService {
  constructor(@Inject(AuthService) private auth:AuthService, @Inject(QueryService) private q:QueryService) {}

  async uploadBase64ToSupabase(base64DataUrl:string, mime:string, width?:number, height?:number){
    const uid = this.auth.uid!;
    const id = uuid();
    const ext = mime === 'image/png' ? 'png' : 'jpg';
    const filePath = `${uid}/${id}.${ext}`;

    // convertir base64 a Blob (compatible webview)
    const base64 = base64DataUrl.replace(/^data:[^;]+;base64,/, '');
    const blob = await (await fetch(`data:${mime};base64,${base64}`)).blob();

    const { error } = await supabase.storage.from('wallpapers')
      .upload(filePath, blob, { contentType: mime, upsert:false });
    if (error) throw error;

    await this.q.addWallpaper({ filePath, mime, width: width||0, height: height||0, createdAt: Date.now() });
    return filePath;
  }

  async getSignedUrl(filePath:string){
    const { data, error } = await supabase.storage.from('wallpapers').createSignedUrl(filePath, 60*5);
    if (error) throw error;
    return data.signedUrl;
  }
}
