# Read Me

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm i` to install the required modules

## Available Scripts

After installing the required modules...

In the project directory, you can run:

### Run the App

Simply type `npm start`
This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Testing

Run `npm test`
I'm using vitest in favour of jest, as most of the functionality is the same and it is a bit quicker.
I intend to follow the test-driven development method.

## Sass

[Create-react-app documentation](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

I followed the documentation above. An error in my '.vscode global' settings caused linting errors, so I added a .vscode folder with settings.json in to amend this. I also added a .env file to point to where all scss files are contained which I don't want to delete just in case it breaks everything 😅.

## Linting

I chose to bolster eslint with the airbnb plugin, this touches the main code quality.
For the aesthetic code linting I've leveraged prettier.