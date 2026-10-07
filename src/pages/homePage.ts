import {Page, Locator} from '@playwright/test'; 
import { BasePage } from '../core/basePage';
import { UIActions } from '../actions/uiActions';
import { Constants } from '../utils/constants';



export class HomePage extends BasePage { 

    private Welcome: Locator; 
    private browsersweets: Locator; 
    private Chocolatecups: Locator; 
    //private price: Locator; 
    private Addtobasket: Locator; 
    private Basket: Locator; 
    private yourbasket: Locator; 
    private billingaddress: Locator; 
    private firstname: Locator; 
    private lastname: Locator; 
    private email: Locator; 
    private address: Locator; 
    private postcode: Locator; 
    private payment: Locator; 
    private nameoncardtext: Locator; 
    private nameoncard: Locator; 
    private creditcardtext: Locator; 
    private expiration: Locator; 
    private cvv: Locator; 
    private confirm: Locator; 
    private uiActions: UIActions;

    constructor (page: Page){
        super(page);

        this.uiActions = new UIActions(page); 
        this.Welcome = page.locator("//h1[text() = 'Welcome to the sweet shop!']");
        this.browsersweets = page.locator("//a[text() = 'Browse Sweets']");
        this.Chocolatecups = page.locator("//h4[text() = 'Chocolate Cups']");
        //this.price = page.locator("//small[@class = 'text-muted']");
        this.Addtobasket = page.locator("//a[@data-id = '1']");
        this.Basket = page.locator("//span[@class = 'badge badge-success']");
        this.yourbasket = page.locator("//h1[text() = 'Your Basket']");
        this.billingaddress = page.locator("//h4[text() = 'Billing address']");
        this.firstname = page.locator('#name').first();
        this.lastname = page.locator('#name').nth(1);
        this.email = page.locator("//input[@id = 'email']");
        this.address = page.locator("//input[@id = 'address']");
        this.postcode = page.locator("//input[@id = 'zip']");
        this.payment = page.locator("//h4[text() = 'Payment']");
        this.nameoncardtext = page.locator("//label[text() = 'Name on card']");
        this.nameoncard = page.locator("//input[@id = 'cc-name']");
        this.creditcardtext = page.locator("//input[@id = 'cc-number']");
        this.expiration = page.locator("//input[@id = 'cc-expiration']");
        this.cvv = page.locator("//input[@id = 'cc-cvv']");
        this.confirm = page.locator("//button[text() = 'Confirm Order']");
   
    } 

     async navigateTo() {
    await this.uiActions.navigateTo(Constants.BASE_URL);  
   } 

   async basketTo() {
    await this.uiActions.getText(this.Welcome);
    await this.uiActions.click(this.browsersweets);
    await this.uiActions.getText(this.Chocolatecups);
    //await this.uiActions.getText(this.price); 
    await this.uiActions.click(this.Addtobasket);
   }

   async addyourBasket(firstname:string, 
    lastname:string, 
    email:string, 
    address:string,
    code: string, 
    card: string, 
    creditnumber: string,  
    expiry: string, 
    CVV: string,  ) {
   await this.uiActions.click(this.Basket);
   await this.uiActions.getText(this.yourbasket);
   await this.uiActions.getText(this.billingaddress);
   await this.uiActions.fill(this.firstname, firstname);
   await this.uiActions.fill(this.lastname, lastname);
   await this.uiActions.fill(this.email, email);
   await this.uiActions.fill(this.address, address);
   await this.uiActions.fill(this.postcode, code);
   await this.uiActions.getText(this.payment);
   await this.uiActions.getText(this.nameoncardtext);
   await this.uiActions.fill(this.nameoncard,card);
   await this.uiActions.fill(this.creditcardtext, creditnumber);
   await this.uiActions.fill(this.expiration,expiry);
   await this.uiActions.fill(this.cvv, CVV);
   await this.uiActions.click(this.confirm);

}
}