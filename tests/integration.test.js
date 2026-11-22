
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

describe('DevOps Application Integration Tests', () => {

    test('index.html should link to hello.html', () => {
        const index = fs.readFileSync(
            path.join(projectDir, 'index.html'), 'utf8'
        );

        expect(index).toContain('href="hello.html"');
    });

    test('hello.html should exist as the linked destination', () => {
        const hello = path.join(projectDir, 'hello.html');

        expect(fs.existsSync(hello)).toBe(true);
    });

    test('hello.html should display the Jenkins heading', () => {
        const hello = fs.readFileSync(
            path.join(projectDir, 'hello.html'), 'utf8'
        );

        expect(hello).toContain('Hello World from Jenkins!');
    });

});
