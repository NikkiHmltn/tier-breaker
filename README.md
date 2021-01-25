# Tier Breaker (Frontend Repository)

The back end repo can be found at [github.com/sschneeberg/tierbreaker_backend](https://github.com/sschneeberg/tierbreaker_backend)

This is a React App created to connect with a Flask API using MongoDB.

Tier Breaker is hassle-free tournament creation. No signups required, no passwords to keep track of.
To access the live site, visit [tierbreaker.herokuapp.com](https://tierbreaker.herokuapp.com).

# Installation

1. `Fork` and `clone` this repository to your local machine
2. Run `npm i` to grab the required dependencies
3. Run `npm start` to run the aapp in browser on localhost:3000
4. Install the backend, from the repository link found above, following the instructions found in it's readme
5. Create an `.env` file to add your `REACT_APP_SERVER_URL` with the backend url

# Site Flow

Our landing page offers instructions for site use and directs the visitor to either create or vote by entering a code.  To view any public polls, `Vote Public` will direct you to a view page for polls by date

![welcome page]()

![Vote Public]()

Creating the poll is a multiform that leads you through the logistic set up before asking for the tournament matchups.

![Create poll]()

The show page for a bracket can be found by clicking through the public page or entering a code (for either public or private tournaments).  If the tournament is closed, the results are displayed in the format chosen by the creator.  If not, the user can vote.  Voting updates are handled through sockets, so live changes will be reflected on the screen.

![display bracket]()

A poll creator is given a special link that allows them to edit the title or question for their tournament or change its privacy setting.

![Edit bracket]()

