import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { UploaderService } from 'src/app/core/services/upluader';
import { QueryService } from 'src/app/core/services/query';
import { Wallpy } from '../../../plugins/my-wallpaper-plugin';

@Injectable({ providedIn:'root' })
export class WallpaperService {
  constructor(private up:UploaderService, public q:QueryService) {}

  async uploadBase64(base64:string, mime:string){
    return this.up.uploadBase64ToSupabase(base64, mime);
  }

  async setHomeFromFilePath(filePath:string){
    const url = await this.up.getSignedUrl(filePath);
    const local = await this.downloadToLocal(url);
    await Wallpy.setHomeScreenWallpaper({ path: local });
  }

  async setLockFromFilePath(filePath:string){
    const url = await this.up.getSignedUrl(filePath);
    const local = await this.downloadToLocal(url);
    await Wallpy.setLockScreenWallpaper({ path: local });
  }

  private async downloadToLocal(url:string){
    const res = await fetch(url);
    const blob = await res.blob();
    const buf = await blob.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
    const name = `wp_${Date.now()}.jpg`;
    await Filesystem.writeFile({ path:name, data:base64, directory:Directory.Data });
    const uri = await Filesystem.getUri({ path:name, directory:Directory.Data });
    return uri.uri; // file://...
  }
}
