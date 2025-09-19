
import { registerPlugin } from '@capacitor/core';

export type SetOptions = { path: string };

export interface WallpyPlugin {
 
  setHomeScreenWallpaper(options: SetOptions): Promise<{ ok: boolean }>;
  setLockScreenWallpaper(options: SetOptions): Promise<{ ok: boolean }>;
  setBothWallpapers?(options: SetOptions): Promise<{ ok: boolean }>;
}


export const Wallpy = registerPlugin<WallpyPlugin>('Wallpy');
