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
