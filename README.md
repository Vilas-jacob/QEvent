# QEvent

QEvent is a web application designed to manage and showcase events. It allows users to create, view, and filter events based on various criteria. This project is built using Next.js and integrates with a backend API for data management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Create new events with details such as name, date, time, location, description, tags, artist, and price.
- View a list of events with filtering options based on artist name and tags.
- Responsive design for optimal viewing on various devices.
- User authentication and session management.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: RESTful API (e.g., Node.js, Express)
- **Authentication**: NextAuth.js (for user authentication)

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vilas-jacob/qevent.git

2. **Navigate to the Project Directory**:
   ```bash
   cd qevent

3. **Install Dependencies**:
    ```bash
    npm install
    
4. **Setup Environment Variables**:
    Create a .env.local file in the root directory and add the necessary environment variables. For example:
   ```Code
    GOOGLE_ID=YOUR_GOOGLE_ID
    GOOGLE_SECRET=YOUR_GOOGLE_SECRET
    NEXTAUTH_SECRET=YOUR_NETAUTH_SECRET
    NEXTAUTH_URL=http://localhost:3000
    
6. **Run the development server**:
    ```bash
    npm run dev
    
7. **Open your browser and navigate to http://localhost:3000 to view the application.**


## Usage

- **Creating an Event**: Navigate to the "Create Event" page, fill in the required details, and submit the form.
- **Viewing Events**: The main events page displays a list of all events. You can filter events by artist name or tags using the search functionality.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and create a pull request.

1. Fork the project
2. Create your feature branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature/YourFeature)
5. Open a pull request



