
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

describe('DevOps Application Unit Tests', () => {

    test('index.html should exist', () => {
        expect(fs.existsSync(path.join(projectDir, 'index.html'))).toBe(true);
    });

    test('hello.html should exist', () => {
        expect(fs.existsSync(path.join(projectDir, 'hello.html'))).toBe(true);
    });

    test('index.html should contain Hello World from DevOps!', () => {
        const content = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');
        expect(content).toContain('Hello World from DevOps!');
    });

    test('index.html should contain Feature Branch Development', () => {
        const content = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');
        expect(content).toContain('Feature Branch Development');
        expect(content).toContain('feature-homepage');
    });

    test('hello.html should contain Hello World from Jenkins!', () => {
        const content = fs.readFileSync(path.join(projectDir, 'hello.html'), 'utf8');
        expect(content).toContain('Hello World from Jenkins!');
    });

});
