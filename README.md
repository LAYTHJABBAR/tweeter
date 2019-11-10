# Tweeter Project
A Single Page App (SPA) buit with HTML, CSS, JS, JQuery, And AJAX on the client side , and Node, Express and MongoDB on the server side
## app Features

### Navigation Bar

    When a user clicks the Compose button in the Navigation Bar:
        if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
        if the Compose Tweet box is currently showing, then it is hidden
        in either case, transitions between 'shown' and 'hidden' states should be animated

### Character Counter

    When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

    The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

### Compose Tweet

    When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

    When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)


# App Pictures

- 
 !["Screenshot of URLs page"](https://raw.githubusercontent.com/LAYTHJABBAR/tweeter/master/docs/main-page.png)
 !["Screenshot of URLs page"](https://raw.githubusercontent.com/LAYTHJABBAR/tweeter/master/docs/mini-page.png)
 !["Screenshot of Cookies page"](https://raw.githubusercontent.com/LAYTHJABBAR/tweeter/master/docs/no%20text%20to%20tweet.png)

## Dependencies

- Node.js
- Express
- EJS
- body-parser
- JQury

## How to Run this tweeter app

- Install all dependencies `npm install` .
- Run the development web server using the `npm start`, notice you need to change the scripts-start test on the package,json file to `node server/index.js`.
- browse to http://localhost:8080
 

## Security 
-  An escape function used to prevent the Cross-Site Scripting
 
