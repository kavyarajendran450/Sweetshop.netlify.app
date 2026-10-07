import {test as base, BrowserContext, Page} from "@playwright/test"; 
import { BrowserFactory } from "./browserFactory";
import { HomePage } from "../pages/homePage";


interface CustomFixtures {
    context: BrowserContext; 
    page: Page;
    homePage: HomePage;  
}

export let test = base.extend<CustomFixtures>({
  context: async ({}, use) => {
    const context = await BrowserFactory.createContext(await BrowserFactory.createBrowser());
    await use(context);
    await context.close();
   },
  page: async ({ context }, use) => {

    const page = await BrowserFactory.createPage(context);
    await use(page);
    await page.close();
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  
});