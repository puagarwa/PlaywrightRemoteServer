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

## Issue Detail
When a test times out waiting for an event, but retries pass, test run still shows as fail

Repro
- Write a test like in this repo where test fail 1st time due to waiting for event but passes in later retries.
- trace:'on-first-retry'
- Run this test against remote playwright server 

Expected: (sample https://github.com/puagarwa/PlaywrightRemoteServer/actions/runs/10091974849/job/27904650129)
test run should pass since test is pass in second attempt.

Actual:
test run fails with error "1 error was not a part of any test, see above for details"
Failed worker ran 1 test:

Finding:
I found the workaround as
- use playwirght version >= 1.42.1 (1.42.0 fails)
- and trace:'on' (trace:'on-first-retry' fails)