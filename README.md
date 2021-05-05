# Schibsted frontend task app

## Assignee notes:
### List of completed initiatives:
https://github.com/sebdybowski/articles/issues?q=is%3Aissue+is%3Aclosed

### List of merged PRs:
https://github.com/sebdybowski/articles/pulls?q=is%3Apr+is%3Aclosed

### List of ideas to implement in order to improve solution:
https://github.com/sebdybowski/articles/issues

### Brief description
I was implementing that project in few phases:
1. Setting up libraries and all tool, including: Typescript, Webpack, Eslint, Prettier, and many more.
2. Implementing basic versions components.
3. Implementing application logic.
4. Implementing necessary styles.
5. Small tweaking and bugfixes.
6.* Steps 2-5 performed along with tests.
   
### Results:
Code coverage:
- `99.55%` **Statements** 220/221
- `93.33%` **Branches** 14/15
- `90.91%` **Functions** 10/11
- `99.55%` **Lines** 220/221

99.55% Statements 220/221
88.24% Branches 15/17
100% Functions 11/11
99.55% Lines 220/221

Bundle size: `200 KB` (tree shaking enabled)

Browser compatibility:
```json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions"
  ]
}
```

---

## Intro

This is a very basic npm project with default webpack setup.

You should use this project as a base for your solution.
Feel free to modify/extend this with whatever you need.

In case you need some assistance take a look at official webpack docs:
 - [Guides](https://webpack.js.org/guides/) 
 - [Concepts](https://webpack.js.org/concepts/)

Eventually this application will request live data from a real API.

You can find the full description of your assignment in [ASSIGNMENT.md](mockups/ASSIGNMENT.md)

## API Documentation
Api server can be found in `server.js` file. You should not modify this file, only use it.

To run the server do:
> `$ node server.js`

Server will start listening on port `6010`.

The server has 2 endpoints:

`/articles/sports` - returns a list of articles from `sport` category

`/articles/fashion` - returns a list of articles from `fashion` category

Be aware of backend errors!
