# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E.spec.ts >> HomePage Launch >> Successful Launch
- Location: tests\E2E.spec.ts:7:10

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('#name') resolved to 2 elements:
    1) <input value="" id="name" type="text" required="" placeholder="" maxlength="30" class="form-control"/> aka locator('#name').first()
    2) <input value="" id="name" type="text" required="" placeholder="" maxlength="30" class="form-control"/> aka locator('#name').nth(1)

Call log:
  - waiting for locator('#name')

```

# Test source

```ts
  1  | import {Page, Locator} from "@playwright/test";
  2  | import { ExceptionUtil } from '../utils/exceptionUtil'
  3  | 
  4  | export class UIActions {
  5  | 
  6  | constructor(private readonly page: Page) {
  7  | } 
  8  | 
  9  | public async navigateTo(url: string): Promise<void> {
  10 | 
  11 |     try{
  12 |         await this.page.goto(url, {waitUntil: 'load'});
  13 |     }
  14 |     catch(error){
  15 |      await ExceptionUtil.handleException(error as Error, this.page);
  16 |     }
  17 | 
  18 | }  
  19 | 
  20 |  public getLocator(locator: Locator, description?: string): Locator {
  21 |     return locator;
  22 |   }
  23 | 
  24 | 
  25 | public async click(locator:Locator): Promise<void> {
  26 |     try {
  27 |         await this.getLocator(locator).click();
  28 |     }
  29 |     catch(error) {
  30 |         await ExceptionUtil.handleException(error as Error,  this.page);
  31 |     }
  32 | } 
  33 | 
  34 | 
  35 | public async fill(locator: Locator, value: string): Promise<void> {
  36 |     try {
> 37 |         await this.getLocator(locator).fill(value);
     |                                        ^ Error: locator.fill: Error: strict mode violation: locator('#name') resolved to 2 elements:
  38 |     }
  39 | 
  40 |     catch(error) {
  41 |         await ExceptionUtil.handleException(error as Error, this.page);
  42 |     }
  43 | }
  44 | 
  45 | public async getText(locator: Locator): Promise<string | null> {
  46 |      try{
  47 |       return (await this.getLocator(locator).textContent());
  48 |     }catch(error){
  49 |        await ExceptionUtil.handleException(error as Error, this.page);
  50 |     }
  51 |    return "";
  52 |   }
  53 | 
  54 | }
  55 | 
  56 | 
```