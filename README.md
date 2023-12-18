# CHORD Music Streaming Application

Welcome to the CHORD Music Streaming Application repository! CHORD is a full-stack web application built using the MERN stack, integrated with Firebase for Google Sign-In and Firebase Storage for audio and image storage. This platform allows users to listen to music, explore artists, albums, and songs. The application provides two types of account privileges: admin and user. Admins have access to a dashboard that enables them to manage users, songs, artists, and albums with full control.

## Features

- User Accounts:
  - Users can create accounts to access the music streaming platform.
  - Users have the privilege to listen to music, explore the website, and discover songs.
  - Google Sign-In: Users can sign in using their Google accounts.

- Admin Accounts:
  - Admins have extended access and control over the application.
  - To become an admin, send your account username and email to the admin's email address.
  - Admins have access to a dashboard where they can:
    - View details about users, songs, artists, and albums.
    - Delete user accounts.
    - Add, update, and delete songs, artists, and albums.

- Audio and Image Storage:
  - Firebase Storage is used to securely store audio files for songs and images for artists and albums.

## Tech Stack

- **Frontend**: Built using React.js with Tailwind CSS for styling.
- **Backend**: Powered by Node.js and Express.js.
- **Database**: MongoDB is used as the database to store user information, music details, and admin privileges.
- **Authentication**: Firebase Authentication is integrated for Google Sign-In.
- **Storage**: Firebase Storage is used to store audio and image files.

## Getting Started

To run the CHORD Music Streaming Application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chord-music-app.git
   ```

2. Navigate to the client directory to install frontend dependencies and start the frontend development server:

   ```bash
   cd chord-music-app/client
   yarn install
   yarn start
   ```

3. Open another terminal window and navigate to the server directory to install backend dependencies and start the backend server:

   ```bash
   cd ../server
   yarn install
   yarn start
   ```

4. Before running the application, make sure to update the `.env` files in both the `client` and `server` directories with your own configuration:

   **Client `.env` file**:

   ```ini
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

   **Server `.env` file**:

   ```ini
   MONGO_URI=your_mongodb_connection_string
   ADMIN_EMAIL=admin_email_address
   ```

5. Open your browser and visit `http://localhost:3000` to access the CHORD Music Streaming Application.

## Contributing

We welcome contributions from the open-source community to enhance the CHORD Music Streaming Application. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Create a pull request detailing your changes.

## Contact

For any queries or support related to the CHORD Music Streaming Application, you can reach out to our team at admin@chordmusicapp.com.

## License

This project is licensed under the [MIT License](LICENSE).

---

We hope you enjoy using the CHORD Music Streaming Application! Feel free to explore, discover new music, and manage your favorite songs, artists, and albums.
