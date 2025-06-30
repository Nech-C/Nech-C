import puppeteer from 'puppeteer';
import { timeout } from 'puppeteer';
import { ssrModuleExportsKey } from 'vite/module-runner';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const DEMOS = [
    {url: 'https://huggingface.co/spaces/Nech-C/Rock-Identifier', filename: 'rockognize.png'},
    {url: 'https://reddit-sentiment-meter.firebaseapp.com/', filename: 'reddit-meter.png'}
]

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();


async function  takeScreenshot(demo) {
    await page.goto(demo.url, { waitUntil: 'networkidle2' });
    await page.setViewport({ width: 1280, height: 800 });
    await sleep(10000);
    await page.screenshot({ path: `public/images/${demo.filename}`, fullPage: true });
    console.log(`Screenshot taken for ${demo.url} and saved as ${demo.filename}`);
}

async function main() {
    for (const demo of DEMOS) {
        await takeScreenshot(demo);
    }
    await browser.close();
}

main().catch(error => {
    console.error('Error taking screenshots:', error);
    process.exit(1);
});
