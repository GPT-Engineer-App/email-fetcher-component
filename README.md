# email-fetcher-component

Develop a React component that connects to an email service API to retrieve and display emails. The component should include the following features:

API Integration:
Set up a function to authenticate and fetch emails using OAuth for security. This function should handle API requests to fetch emails from the user's inbox.
State Management:
Use React hooks (useState, useEffect) to manage the state of the emails. The state should include a loading status to indicate that emails are being fetched and an error state for handling any issues during the fetch process.
UI Components:
Create a main component that displays a list of emails. Each email should be shown in a summarized view with the sender's name, subject, and a preview of the email body.
Implement a detailed view component that opens when a user clicks on an email, showing full details including date, sender's full name, email body, and options to reply or forward.
User Interaction:
Add a search bar to filter emails by sender or subject. This should update the display asynchronously as the user types.
Provide buttons or links to refresh the inbox manually and navigate through a paginated list of emails if applicable.
Error Handling and Feedback:
Display a loading indicator while emails are being fetched.
Show user-friendly error messages if the email fetch fails or if no emails are found.
Styling:
Style the components using CSS or a styling framework of your choice (e.g., styled-components) to make the UI intuitive and visually appealing.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/email-fetcher-component.git
cd email-fetcher-component
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
