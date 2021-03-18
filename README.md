# tic-tac-toe

This is my Tic-Tac-Toe project for the JavaScript path in The Odin Project.

Project link: https://theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript

## UX Flow

- Landing page/leaderboard (Sketch complete)
- User login/create user (Sketch complete)
- Password encryption and storage (Sketch complete)
- Password decryption and login
- Singleplayer (Disabled atm)/Multiplayer
- Gameboard and core game loop
- Post game evaluation
- Play again?/back to leaderboard

## Architecture notes

- Consider storing all information in objects that are tied to the name of the project in order to keep the localStorage namespace clean. This may mean refactoring the library application to have the same structure.

- Since the module patter allows for greater separation of concerns, consider modularizing every major aspect of the application by putting them into their own .js file. For example, a ticTacToe.js file specifically for the game itself, a user.js file to handle adding or removing users, so on and so forth.

## General notes

- localStorage syntax = localStorage.setItem("keyName", value);

