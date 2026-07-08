# Team Availability Tracker

## Overview

The Team Availability Tracker is a web application that allows users to view and update the availability status of team members. Users can toggle each member's availability, and the changes are stored in a SQLite database and reflected immediately on the frontend.

## Features

- View a list of team members
- Toggle availability status (Available / Unavailable)
- Store availability data in a SQLite database
- Real-time updates on the frontend
- Persistent data after page refresh

## Technologies Used

- Node.js
- Express.js
- SQLite3
- HTML5
- CSS3
- JavaScript

## Project Structure

```
team-availability-tracker/
│
├── server.js
├── database.db
├── package.json
├── README.md
│
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/YourUsername/team-availability-tracker.git
   ```

2. Open the project in Visual Studio Code.

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   node server.js
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## API Endpoints

### GET /users
Returns the list of team members and their availability status.

### POST /toggle/:id
Updates the availability status of the selected team member.

## Future Enhancements

- Add new team members
- Delete team members
- Search and filter users
- User authentication
- Responsive mobile design

## Author

Your Name
