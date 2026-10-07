export class ConfigManager {

    static getBaseUrl(): string {
        return process.env.BASE_URL || "https://sweetshop.netlify.app/";
    }

    static isHeadless(): boolean {
        return process.env.HEADLESS !== 'true';
    }

    static isParallel(): boolean {
        return true;
    }

    static getBrowser(): 'chromium'| 'firefox'| 'webkit' {
        return (process.env.BROWSER as any) || 'chromium';
    }

    static getWorkers(): number {
        return Number (process.env.WORKER) || 4;
    }
   

}