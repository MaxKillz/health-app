const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto("https://druginfo.nlm.nih.gov/drugportal/drug/names");

  let drugNames = [];
  let drugList = {};
  let numberOfPages = ['a','b','c','d','e','f','g','h','i','j','k','l','m', 'n','o','p','q','r','s','t','u','v','w','x','y','z'];


  //   grab drug names from page
  for (var p = 0; p < numberOfPages.length; p++) {

    let url = (`https://druginfo.nlm.nih.gov/drugportal/drug/names/${numberOfPages[p]}`)

    await page.goto(url);

    let drug = await page.evaluate(() =>
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
    drug.shift();

    drugNames.push(drug);
  }

  drugNames = drugNames.reduce(function(a, b) {
    return a.concat(b);
  }, []);

  drugList = {
    name: drugNames
  }

  await fs.writeFile("./data/drugNames.json", JSON.stringify(drugList, null, 2), function (error) {
    if (error) {
      console.log("something went wrong, oops!");
    } else {
      console.log("Wrote to file!");
    }
  });

  for (var i = 0; i < drugNames.length; i++) {
    drugNames[i] = {
      name: drugNames[i]
    };
  }

  drugList = {
    drugs: drugNames
  }

  await fs.writeFile("./data/drugObjects.json", JSON.stringify(drugList, null, 2), function (error) {
    if (error) {
      console.log("something went wrong, oops!");
    } else {
      console.log("Wrote to file!");
    }
  });

  browser.close();
})();