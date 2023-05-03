## User Story
>#### As an investor
>#### I want to see financial data
>#### So that I can make informed investment decisions 

## Acceptance Criteria
>#### GIVEN that I need to research different publicly-traded companies
>#### WHEN I provide a ticker symbol for a specific company
>#### THEN I get financial data for that company


## Guidelines for Use
>### This website is pretty simple to use and only requires the user to type in a ticker symbol for a company that's listed on the stock exchange. Once the search button is clicked, the site will provide financial data for that particular company. An element on the page will also store the six most recent search terms for reference.
>### The same process can be done to obtain the exchange rate from USD to a given foreign currency.

## How does it work?
>### When the search button is clicked, the user input is concatenated with a URL and then the site makes an API call specific to the requested ticker before returning financial data for that company. A very similar process is used to return foreign currency exchange rate data. Search terms are saved to local storage and populated to the "Recent Searches" box. These search terms are stored in an array which will delete the oldest search term once six ticker symbols have been searched.