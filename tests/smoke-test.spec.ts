import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';

describe('Smoke Test', () => {
  it('should have the correct i18n project structure', () => {
    const baseDir = process.cwd();
    const appDir = path.join(baseDir, 'app');
    const localeDir = path.join(appDir, '[locale]');
    
    expect(fs.existsSync(localeDir)).toBe(true);
    expect(fs.existsSync(path.join(localeDir, 'page.tsx'))).toBe(true);
    expect(fs.existsSync(path.join(localeDir, 'layout.tsx'))).toBe(true);
    
    expect(fs.existsSync(path.join(baseDir, 'i18n/config.ts'))).toBe(true);
    expect(fs.existsSync(path.join(baseDir, 'messages/en.json'))).toBe(true);
    expect(fs.existsSync(path.join(baseDir, 'messages/zh-HK.json'))).toBe(true);
  });
});
