import { Injectable } from '@angular/core';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Injectable({ providedIn:'root' })
export class FilePickerService {
  async pickImage(){
    const r = await FilePicker.pickImages({ readData:true });
    return r.files?.[0] || null; // { name, mimeType, size, data(base64) }
  }
}
