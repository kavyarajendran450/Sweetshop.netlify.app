# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E.spec.ts >> HomePage Launch >> Successful Launch
- Location: tests\E2E.spec.ts:7:10

# Error details

```
Error: locator.click: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//span[@class = 'badge badge-success]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6381:25)
    at InjectedScript._queryEngineAll (<anonymous>:7059:49)
    at InjectedScript.querySelectorAll (<anonymous>:7046:30)
    at eval (eval at evaluate (:311:30), <anonymous>:2:42)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//span[@class = \'badge badge-success]')

```