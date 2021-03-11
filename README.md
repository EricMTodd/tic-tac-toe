# tic-tac-toe

This is my Tic-Tac-Toe project for the JavaScript path in The Odin Project.

Project link: https://theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript

## UX Flow

- Welcome screen/leaderboard
- If no players, show create user buttons
- Singleplayer or Multiplayer?
- Gameboard and core game loop
- Post game evaluation
- Play again?

## Architecture notes

- Consider storing all information in objects that are tied to the name of the project in order to keep the localStorage namespace clean. This may mean refactoring the library application to have the same structure.

## General notes

- localStorage syntax = localStorage.setItem("keyName", value);
