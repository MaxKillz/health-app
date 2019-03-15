const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://druginfo.nlm.nih.gov/drugportal/drug/names");

  //   grab drug names from page
  const drugNames = await page.evaluate(() =>
    Array.from(
      document
      .querySelector("table tbody")
      .childNodes[2].querySelector("tbody")
      .childNodes[6].childNodes[0].childNodes[0].childNodes[1].querySelectorAll(
        "tr"
      )
    ).map(row => row.innerText)
  );

  //   get rid of drug names header from table
  drugNames.shift();

  let drugList = {}

  for (var i = 0; i < drugNames.length; i++) {
    drugList[i] = {
      name: drugNames[i]
    }
  }

  await fs.writeFile("./results/drugNames.json", JSON.stringify(drugList, null, 2), function (error) {
    if (error) {
      console.log("something went wrong, oops!");
    } else {
      console.log("Wrote to file!");
    }
  });

  browser.close();
})();