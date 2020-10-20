const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args:[
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: '/pdf/hackernews.pdf', format: 'A4'});
  await browser.close();
})();