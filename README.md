# Basic Movie Application For Practicing REACT

This is a Movie application that allows users to browse and search for movies. It also has features for user authentication (login/signup) and managing a list of favorite movies.

## Tech Stack

- **Frontend:** React
- **Build Tool:** Vite
- **Styling:** CSS
- **API:** The `services/api.ts` file suggests that it interacts with an external API to fetch movie data.

## Screenshots

### Homepage

![Homepage](./Movie_App/MovieApp/screenshots/homepage.png)

### Favorites Page

![Favorites Page](./Movie_App/MovieApp/screenshots/favoritespage.png)

## File Structure

- `src/components`: Contains reusable UI components like `MovieCard` and `NavBar`.
- `src/contexts`: Manages global state, in this case, `MovieContext` likely handles movie-related data.
- `src/css`: Holds the CSS files for styling different parts of the application.
- `src/pages`: Contains the main pages of the application, such as `Home`, `Favorites`, `Login`, and `Signup`.
- `src/services`: Includes the `api.ts` file, which is responsible for making API calls to a movie database.
- `App.tsx`: The main application component that sets up the routing and layout.
  -\* `main.tsx`: The entry point of the application.

## How to Run

1.  **Navigate to the project directory:**

    ```bash
    cd Movie_App/MovieApp
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm run dev
    ```
