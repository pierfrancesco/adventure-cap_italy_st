# Adventure Cap-Italy-St 🇮🇹

This is an MVP-Clone of the game Adventure Capitalist with a set of goods borrowed from Italian cliches.
Playable link: https://adventure-cap-italy-st.vercel.app/

## Tech choices

The framework chosen to help me in speeding up the whole dev flow has been NextJS, so ReactJS has been used for the UI.
JavaScript language has been chosen with ES6 dialect. I didn't choose TypeScript (which I think it's better) cause it required me too long for this
MVP (configure Next and React for tsx) even though I think is much more clear and easy to debug.


## Project Structure

The project has been divided into these folders:
- `classes`: contains Player js class
- `components`: contains all the React Component (component = a react component which contains at least another react component)
- `controllers`: contains all the business logic 
- `elements`: contains all the React elements (element = a react component which doesn't contain another react component)
- `models`: static data structure
- `out`: NextJS static export of the project 
- `pages`: NextJS pages folder to create an index.html
- `static`: folder for all the assets

## How to run it

1. clone repo and then `npm i`
2. once done: `npm run dev` to run it locally, or `npm run export` to generate an update static output.

## How to modify it

The entry point is `pages/index.js`. Since there you can easily retrieve how the game flow, however, everything begins with
```javascript
useEffect(() => {
  setPlayer(initPlayer(setModalMessage));
  //...
});
```
Where `initPlayer` retrieves or creates a new Player instance. Following this function, you can see how the whole
init flow works.

## Features

The "game" has 12 businesses taken from a catalog which is represented by `models/BusinessesCatalog.js`.
Inside that file is possible to tune game difficulty. Right now there's a naive linear increasing difficulty.

There's also a file called `appConfig.json` which sets some values like how much money the player should start with 
rather than the save frequency inside the local storage.
 
Another feature is that game save the state inside the window localstorage with a naive "obfuscation" set/get made
with atob/btoa provided by browsers.

This saving feature allows the next two features which are:
1. calculate how much money managers made while you were away
2. restore the progress value at the last time it was before (+- flush interval seconds for localstorage) 

## Improvements

Here we have a greenfield for improvements. I'll write some but there are much more:
0. `better UI/UX`
1. `switch to TypeScript`: save some unit tests + help different folks in the project to better work with methods
2. `a dedicated class for business`: right now they live or inside the Player array property `businesses` or, for those ones
not bought yet, in a static file. A better separation will be the best for punctual updates (right now you've to cycle in all players businesses array)  
3. `a better management state`: right now is made with React Component State, something like Redux will help for sure
4. `a better separation between Logic / Actions / UI`: I'm not so enthusiastic about how properties are injected inside `OwnedBusiness` component, 
probably point 2 will help in this task
5. `backend support`: a controller which provides send/get the object to a specific endpoint, 
both send n forget with initial XHR retrieving and/or something based on WebSocket constant communication.
6. `tests`: add tests that check if you can do operations based on your current state (buy, collect)

  
