# React Movie App 🎬

This is a movie search application built with React and Firebase Authentication.

## Features

- User authentication using Firebase
- Search movies from TMDB API
- Users can like (favorite) movies
- Favorites will be saved to user profile (planned)
- Tailwind CSS for styling
- Framer Motion for animations (planned)
- Using custom hooks for search and authentication logic

## Tech Stack

- React
- Firebase
- Axios
- Tailwind CSS
- Framer Motion (for animations)

## Custom Hooks

### `useSearch`

Encapsulates all logic related to searching movies via the TMDB API. The `setMovies` state is passed as a parameter to maintain separation of concerns and avoid tight coupling with the parent component.

### `useAuthForm`

Handles registration and login logic via Firebase, including basic error messaging and form validation.

### `useSesion`

Manages session state and logout functionality, including toggling the mobile/user menu.

## Implementation Details

- **User Context**  
  A context (`LoginContext`) was created to manage the global user state (`user` and `setUser`). This enabled displaying a personalized welcome message when the user logs in, using a `useEffect` with a timer to hide the message after a few seconds.

- **Layout and Nested Routes**  
  A layout component called `HomePage` was created that includes the `Navbar` and an `<Outlet />` to render nested child routes. This setup facilitates protected routes and a shared layout for internal pages.  
  To make it work correctly, routes were defined nested under the `/` path with explicit child paths like `home`, `favorites`, and `profile` (e.g. `/home`, `/favorites`).  
  The `index` route was avoided because with your layout and React Router v6 setup, it did not behave as expected.

- **React Router v7**  
  Using nested routes with a layout, the `/` path loads the layout component, and child routes determine which component to render inside the `<Outlet />`.  
  Defining `home` explicitly as a path ensures that visiting `/home` shows the `Home` page, preventing confusion or issues with empty or `index` routes.

- **Common Issues**
  - Using `index` routes with a layout that doesn't render content directly can break the app.
  - Defining explicit paths like `home` instead of `index` fixed the issue and ensured consistent behavior.
  - The `HomePage` component acts as a layout to render the navbar and nested content.

This approach provides a clear architecture, facilitates global user state handling, and keeps routes organized without conflicts.

## User Authentication and Favorites Persistence

- Uses Firebase's `onAuthStateChanged` listener to detect if a user is logged in.
- Stores the user ID and login status in state.
- Fetches and saves the user's favorite movies in Firestore for data persistence.
- Provides context to manage favorite movies throughout the app.

## Notes

During refactoring:

- `useSearch` was created to extract logic from the `Search` component.
- `setMovies` (from the `Home` parent) is passed as an argument to functions inside the hook, to keep the hook decoupled.
- The `useEffect` to fetch default movies is placed inside the `Search` component — not inside the custom hook — to keep side effects scoped to the component lifecycle.

## In Progress

- Protected routes
- Favorites persistence
- User profile settings
- Framer Motion animations

---

WIP project by Juan
