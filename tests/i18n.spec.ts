import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Multilingual Support (Task 7)', () => {
  const baseDir = process.cwd();
  
  it('should have the correct translation files', () => {
    expect(fs.existsSync(path.join(baseDir, 'messages/en.json'))).toBe(true);
    expect(fs.existsSync(path.join(baseDir, 'messages/zh-HK.json'))).toBe(true);
  });

  it('should have Traditional Chinese translations in zh-HK.json', () => {
    const zhContent = JSON.parse(fs.readFileSync(path.join(baseDir, 'messages/zh-HK.json'), 'utf8'));
    expect(zhContent.Index.header.title).toBe('Kaffe Tech');
    expect(zhContent.Index.header.subtitle).toBe('咖啡實驗室 / 終端');
  });

  it('should have LanguageSwitcher component', () => {
    expect(fs.existsSync(path.join(baseDir, 'components/LanguageSwitcher.tsx'))).toBe(true);
  });

  it('should have i18n configuration files', () => {
    expect(fs.existsSync(path.join(baseDir, 'i18n/config.ts'))).toBe(true);
    expect(fs.existsSync(path.join(baseDir, 'i18n/request.ts'))).toBe(true);
    expect(fs.existsSync(path.join(baseDir, 'i18n/navigation.ts'))).toBe(true);
  });

  it('should have middleware for locale routing', () => {
    expect(fs.existsSync(path.join(baseDir, 'middleware.ts'))).toBe(true);
  });

  it('should have Traditional Chinese README', () => {
    expect(fs.existsSync(path.join(baseDir, 'README.zh-HK.md'))).toBe(true);
  });
});
