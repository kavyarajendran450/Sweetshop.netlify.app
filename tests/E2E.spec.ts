import {test} from '../src/core/customFixtures';
import { WaitActions } from "../src/wrapper/waitAction";
import { Constants } from "../src/utils/constants";


test.describe('HomePage Launch', () => { 
     test('Successful Launch', async ({ homePage, page }) => {
        const waitActions = new WaitActions(page);
        await homePage.navigateTo();
        await homePage.basketTo(); 
        await homePage.addyourBasket(Constants.FIRSTNAME,
            Constants.LASTNAME,
            Constants.EMAIL,
            Constants.ADDRESS, 
            Constants.POSTCODE,
            Constants.CARDNAME, 
            Constants.CREDITNUMBER, 
            Constants.EXPIRY,
            Constants.CVV, 
        );

     });
    });