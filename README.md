# Subdomain Creator

This project enables users to dynamically create subdomains. By entering a desired subdomain name, a new site will be generated under that subdomain, such as `hud.localhost:3000`.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Handling Non-Created Subdomains](#handling-non-created-subdomains)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Next.js

## Installation

To set up this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:teamharsh/SubdomainHub.git
   cd SubdomainHub
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter your desired subdomain name in the input field (e.g., `hud`).
2. Click the "Create Subdomain" button.
3. The new subdomain will be created and accessible at [http://hud.localhost:3000](http://hud.localhost:3000).

## Handling Non-Created Subdomains

If you try to access a subdomain that hasn’t been created (e.g., [http://nonexistent.localhost:3000](http://nonexistent.localhost:3000)), you will encounter a "Page Not Found" error. This feature ensures that only valid subdomains, created through the application, can be accessed.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
