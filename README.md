## Scraping

I used Puppeteer.js to scrape data from NIH website. Used Chrome Developer Tools to find best query selectors.

Note: Thanks, [David and MPJ from DevTips on Youtube](https://www.youtube.com/watch?v=pixfH6yyqZk), their Puppeteer tutorial was very useful. If you're interested in scraping large sites, I recommend watching it.


## Datasets

I couldn't find a CSV or other spreadsheet with listings of drugs that interact poorly with alcohol. I found a useful PDF on [NIH's website](https://pubs.niaaa.nih.gov/publications/Medicine/Harmful_Interactions.pdf) and decided to take the time to write it out in table format, both for my own personal use, and for other developers or researchers who'd find it useful.

The dataset includes each medication's brand name, generic alternatives, and reactions. I wrote a new JSON file with the data for my own project's uses, and then converted that JSON file to a CSV for others to use.

##### Note: If you find any errors within the CSV file, please reach out immediately. The data is from a reputable source (NIH), but our understanding of medicine and prescriptions changes all the time, and I'd like to keep the dataset as accurate as possible.
