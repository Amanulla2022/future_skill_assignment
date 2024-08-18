# React Help Center Application

## Overview

This React application provides a Help Center interface with a search feature and categorized help cards. The application consists of several components:

- **Header**: Displays the logo and title of the Help Center, along with a button to submit a request.
- **Search**: Allows users to search for help center cards.
- **GetHelpCenterCards**: Fetches and displays help center cards from an API, filtering them based on the search term.
- **Footer**: Contains information about the company and copyright details.

## Features

- **Search Functionality**: Users can search for help center cards based on their title. The search results are filtered and sorted to display relevant cards.
- **Responsive Design**: The layout is responsive and adjusts for different screen sizes using Tailwind CSS.
- **API Integration**: Fetches help center cards from a remote API.

## Components

### Header

Displays the application title and a "Submit a Request" button.

**File**: `Header.js`

### Search

Provides a search bar for users to filter help center cards.

**File**: `Search.js`

### GetHelpCenterCards

Fetches and displays help center cards. The cards are filtered based on the search term.

**File**: `GetHelpCenterCards.js`

### Footer

Displays company information and copyright details.

**File**: `Footer.js`

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   `````bash
   git clone https://github.com/Amanulla2022/future_skill_assignment.git
   cd frontend````

   `````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the project with the following content:

   ```env
   REACT_APP_BASE_URL=<your-api-base-url>
   ```

   Replace <your-api-base-url> with the base URL of your API.

4. Run the application:

   ```bash
   npm start
   ```
