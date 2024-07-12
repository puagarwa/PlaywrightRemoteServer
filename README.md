# PlaywrightRemoteServer

## steps to run
npm install
npx playwright install --with-deps

## start server
npx playwright run-server --port 8090

## run test
npx playwright test --repeat-each=1

## enable logging
set env variable DEBUG: pw:browser*