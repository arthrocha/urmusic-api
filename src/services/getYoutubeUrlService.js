const puppeteer = require('puppeteer');

const getYoutubeUrlService = async (artist_or_music) => {
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://www.youtube.com/results?search_query=${artist_or_music}`);
        await page.click(`#video-title`) 
        const url = page.url();
        await browser.close();

        return url.substring(32)
    }catch(err){
        return err
    }
  }

  module.exports = getYoutubeUrlService