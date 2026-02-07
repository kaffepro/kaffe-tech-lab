import fs from 'fs';
import path from 'path';

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
    const pageContent = fs.readFileSync(path.join(process.cwd(), 'app', 'page.tsx'), 'utf8');
    expect(pageContent).toContain('Live Brew Status');
    expect(pageContent).toContain('Barista Console');
    expect(pageContent).toContain('GitHub Commit');
    expect(pageContent).toContain('Today\'s SOE');
    expect(pageContent).toContain('Brew CLI');
  });
});
