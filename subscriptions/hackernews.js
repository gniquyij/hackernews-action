const puppeteer = require('puppeteer');

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day =`${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`
}

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
  await page.pdf({path: '/pdf/hackernews-' + getDate() + '.pdf', format: 'A4'});
  await browser.close();
})();