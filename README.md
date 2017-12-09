# My Reads

This is a book tracking app allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that it should be persisted information as user’s interacts with the application.

## Getting Started

### Installing

```
git clone https://github.com/jayjongcheolpark/MyReads.git
cd MyReads
npm install
npm start
```

### Demo

[https://jaypark-myreads.netlify.com/](https://jaypark-myreads.netlify.com/)


![Demo](https://thumbs.gfycat.com/OpenCorruptAsianporcupine-size_restricted.gif)

## Deployment

```
npm run build

npm install netlify-cli -g
netlify deploy
```

## Acknowledgments
### What's included
Within the download you'll find the following directories and files:

```
|-- package.json
`-- src
    |-- index.js
    |-- store.js
    |-- App.js
    |-- actions
    |   `-- index.js
    |-- components
    |   |-- Book.js  
    |   |-- BookShelf.js
    |   |-- BookShelfChanger.js
    |   |-- NotFound.js
    |   |-- SearchBar.js
    |   `-- SearchResult.js
    |-- constants
    |   |-- actionTypes.js
    |   `-- shelfTypes.js
    |-- middlewares
    |   `-- sagas.js
    |-- pages
    |   |-- ListBooks.js
    |   `-- Search.js
    |-- reducers
    |   `-- index.js
    |-- styles
    |   |-- App.css
    |   `-- index.css
    `-- utils
        |-- BooksAPI.js
        `-- SearchTerm.js
```
 
### Functionality (requirements)

In this application, the main page(the root URL)displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

When you select a different shelf, the book moves there.
In search page(`/search`), you can get the list of books as by your input keywords.


### Additional Functionality
#### Using Redux and Redux-Saga
To use redux and redux-saga is easier to manage state and asynchronous things, more efficient to execute, simple to test, and better at handling failure.

#### Throttling
Throttling of 300ms is applied to support live search. If not so, ajax call is too frequent.

#### Autocomplete
This API allows users to use their restricted search keywords. [react-autosuggest](https://github.com/moroshko/react-autosuggest) is added to search a book easily.

#### Optimistic Update
When fetching book list after changing a book shelf, it upates local state before getting a response to show UI changes immediately.


#### Deployment
This App is deployed on [Netlify](https://www.netlify.com/)


## License

A Project [starter code](https://github.com/udacity/reactnd-project-myreads-starter) contributed by Udacity.
