## Table of contents

- [Setup](#setup)
- [Name](#name)
- [General info](#general-info)
- [Stack](#stack)
- [Content](#content)
  - [Lading Page](#landing-page)
  - [Navigation bar](#navigation-bar)
  - [Breweries button](#breweries-button)
  - [Random Beer button](#Random-beer-button)
- [Footer](#footer)
- [To Do](#to-do)

## Setup

    1.For windows
      $git clone git@github.com:harshpandloskar/random-beer.git
      cd Random-Beer

    2.To run the application: Install node and start
      The app will open at (http://localhost:3000/).

## Name

    The Random Beer App! - DISTILLED SCH assignment

    I have created this application to fulfil the requirements from DISTILLED SCH
    and also for other Beer Lovers like me. There will be more features/tabs added to this application by end of October 2020.

## General info

    1) Application uses BreweryDB's API to search random beers and [breweries by country(Extra added feature)]
    2) For styling I used Sass(I could use Bootstrap(like in my previous projects),
       but I wanted to show that I know how CSS, Sass and responsivity works also to show my front-end development skills.)
    3) The whole application is responsive.
    4) I took care to keep the code is clean and readable.
    5) For images I used Cloudinary
    7) I added a favicon and a fallback image when there are no labels for a beer or brewery information.

## Stack

React(react-router, Hooks, react-axios), ES6, HTML, CSS, BreweryDB API

## Content

## Landing Page

    1) Navigation bar (Home page, 1 Tab/Button - Breweries)
    2) Random Beer Button
    3) Footer

## Navigation bar

    1)Home button takes you to the landing page i.e  path ="/" route to component Home

## Breweries button

     Breweries button is an 'Extra Added feature' #main highlight of the project :)
        1) On the beginning page is loading breweries from all countries - path= /brewery component BreweryList
        2) From the drop-down menu you can choose countries from where would like to show breweries
        The Database provides only 3 countries (US, IE, BE) #And there is 'Ireland' in it - Sláinte :)
        3) When you click the button - the app is loading country code list for the drop-down list using /locations/
        4) Then the app is calling all breweries from a database to show them on the page (as a default initial load
        screen) using /locations/?countryIsoCode=${this.state.select.selectedCode}&order=breweryName
        where countryIsoCode has an empty value for All countries. The same endpoints are used for looking
        for breweries from the country, but then the app provides cuntryIscCode value.

    Breweries details
       When you click on a brewery name you are going to the brewery detail page where you can see information about a brewery and list of their beers - path="/breweries/brewery/: id" component SingleBrewery. This page has a 'go back' button.

    Beers details
       When you click on a beer name you are going to the beer detail page where you can see information about the beer - path="/beer/: id" component= SingleBeer. This page has a 'go back' button.

## Random Beer button

    1) On clicking the 'Beer gif' it displays a random beer information page to the user - path="/RandomBeer"   component=RandomBeer. It displays beer name, description, label, the brewery of the beer and other information such as ABV(alcohol by volume) and IBU (international bittering unit).
    2) Clicking on the brewery it loads the Brewery Detail Screen - path="/breweries/brewery/: id" component      SingleBrewery
    3) 'Show Another Beer' button displays a new random beer on Another Random beer page and it shows only beer with the brewery - path="/AnotherRandomBeer/: id" component=AnotherRandomBeer}
    4) Another Random Beer page has a 'go back' button

## Footer

    An additional element with the link to my Github page.

## To Do

    Below is a list of improvements that could be made to the app and I intend to develop and work more on this project to add more features by end of October 2020.

    Code Grouping and Duplication: I am conscious that I have some code duplications but it was solely due to time constraint. At the last moment, I decided to add an extra feature i.e 'Brewires Button'.

    I intend to group the code keeping the API's calls in another file and render it to the required component which will also reduce the code repetition and same for the CSS of the whole app.

    Route Switch : to conditionally render the first child that matches the path location example /guiness will redirect to beer/guiness/id which is the beer information page and to and to handle unwanted/no path location to 404 page.

    Testing: the app could have been built using TDD, this could make the code more maintainable, extensible and create a focus on the goal of the project. At very least, more unit tests should be implemented to make the app more robust.

    Cross Browser Testing: the app has not been testing across all browsers.

    Responsive Testing: although efforts have been made to ensure the app is responsive, these have not been extensively tested outside the Chrome Dev tools.

    UI Design: The app would benefit from more time spent on designing the UI. some example back button,header and effects such as hover etc.

Only for personal project development: I am going to add 3 more tabs for listing all beers in the world, google map location for the breweries, and finally types of beers/categories and their information.

Furthermore, I am going to add SEO components for the application. I have a good knowledge of onsite SEO implementation from previous experince in Front End Development role.
