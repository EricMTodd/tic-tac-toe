# tic-tac-toe

This is my Tic-Tac-Toe project for the JavaScript path in The Odin Project.

Project link: https://theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript

## Description

The application is a project done for The Odin Project where the requirement was to make a simple tic-tac-toe game using everything learned up to this point. I did a lot of experiementation with this project, and through that wrote what is the most impressive aspect of this application: a full one-time-pad password encryption and decryption algorithm for the accounts that are required to interact with the game.

## UX Flow

- Landing page/leaderboard (complete)
- User login/create user (complete)
- Password encryption and storage (complete)
- Password decryption and login (Decryption complete, login/logout complete)
- Singleplayer (Disabled atm)/Multiplayer (complete)
- Gameboard and core game loop (complete)
- Post game evaluation (complete)
- Play again?/back to leaderboard (complete)

## Architecture notes

- Consider storing all information in objects that are tied to the name of the project in order to keep the localStorage namespace clean. This may mean refactoring the library application to have the same structure.

- Since the module pattern allows for greater separation of concerns, consider modularizing every major aspect of the application by putting them into their own .js file. For example, a ticTacToe.js file specifically for the game itself, a user.js file to handle adding or removing users, so on and so forth.

## General notes

- localStorage syntax = localStorage.setItem("keyName", value);
