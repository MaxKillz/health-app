## Scraping

I used Puppeteer.js to scrape data from NIH website. Used Chrome Developer Tools to find best query selectors.

Note: Thanks, [David and MPJ from DevTips on Youtube](https://www.youtube.com/watch?v=pixfH6yyqZk), their Puppeteer tutorial was very useful. If you're interested in scraping large sites, I recommend watching it.


## Data Entry

I couldn't find a CSV or other spreadsheet with listings of drugs that interact poorly with alcohol. I found a useful PDF on [NIH's website](https://pubs.niaaa.nih.gov/publications/Medicine/Harmful_Interactions.pdf) and decided to take the time to write it out in table format, both my own personal use, and other developers or researchers who'd find it useful.

The dataset includes each medication's brand name, generic alternatives, and reactions.