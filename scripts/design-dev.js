#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const generator = spawn(process.execPath, ['scripts/generate-design-uikit.js', '--watch'], {
  cwd: ROOT,
  stdio: 'inherit',
});

const serverCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const server = spawn(serverCmd, ['http-server', '.', '-p', '5501', '-c-1', '-o', '/src/html/pages/design-uikit.html'], {
  cwd: ROOT,
  stdio: 'inherit',
});

function shutdown() {
  if (!generator.killed) {
    generator.kill('SIGTERM');
  }
  if (!server.killed) {
    server.kill('SIGTERM');
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

generator.on('exit', (code) => {
  if (code !== 0) {
    console.error('[design] generator finished with error.');
    shutdown();
    process.exit(code || 1);
  }
});

server.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error('[design] local server finished with error.');
    shutdown();
    process.exit(code || 1);
  }
});
