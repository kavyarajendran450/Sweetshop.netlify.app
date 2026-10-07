# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E.spec.ts >> HomePage Launch >> Successful Launch
- Location: tests\E2E.spec.ts:7:10

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\KavyaRajendran(G10XI\AppData\Local\ms-playwright\chromium-1243\chrome-win64\chrome.exe
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
```

# Test source

```ts
  1  | import {chromium,Browser,BrowserContext,Page} from "@playwright/test";
  2  | export class BrowserFactory {
  3  | 
  4  |     static async createBrowser(): Promise<Browser> {
> 5  |         return await chromium.launch({headless: false});
     |                               ^ Error: browserType.launch: Executable doesn't exist at C:\Users\KavyaRajendran(G10XI\AppData\Local\ms-playwright\chromium-1243\chrome-win64\chrome.exe
  6  |     }
  7  | 
  8  |     static async createContext(browser:Browser): Promise<BrowserContext> {
  9  |         return await browser.newContext(); 
  10 |     }
  11 | 
  12 |     static async createPage(context: BrowserContext): Promise<Page> {
  13 |         return await context.newPage(); 
  14 |     }
  15 | 
  16 | }
  17 | 
```