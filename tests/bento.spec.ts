import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';

describe('Bento Grid Architecture', () => {
  const componentsDir = path.join(process.cwd(), 'components');
  
  it('should have BentoGrid component', () => {
    expect(fs.existsSync(path.join(componentsDir, 'BentoGrid.tsx'))).toBe(true);
  });

  it('should have BentoItem component', () => {
    expect(fs.existsSync(path.join(componentsDir, 'BentoItem.tsx'))).toBe(true);
  });

  it('should contain bento-card class in BentoItem', () => {
    const content = fs.readFileSync(path.join(componentsDir, 'BentoItem.tsx'), 'utf8');
    expect(content).toContain('bento-card');
  });

  it('should implement the requested layout in page.tsx', () => {
    const pagePath = path.join(process.cwd(), 'app', '[locale]', 'page.tsx');
    const pageContent = fs.readFileSync(pagePath, 'utf8');
    expect(pageContent).toContain('LiveBrewStatus');
    expect(pageContent).toContain('barista.title');
    expect(pageContent).toContain('git.title');
    expect(pageContent).toContain('soe.title');
    expect(pageContent).toContain('cli.title');
  });
});
