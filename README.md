# Subdomain Creator

This project allows users to create subdomains dynamically. By entering a subdomain name, a new site will be created under the specified subdomain, e.g., hud.localhost:3000.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Behavior on Non-Created Subdomains](#behavior-on-non-created-subdomains)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Next.js

## Installation

To get started with this project, follow the instructions below:

1. Clone the repository:

   ```bash
   git clone git@github.com:teamharsh/SubdomainHub.git
   cd SubdomainHub

2. Install the required dependencies:

npm install


3. Start the development server:

npm run dev


4. Open your browser and go to http://localhost:3000.



Usage

1. Enter a desired subdomain name in the input field (e.g., hud).


2. Click the "Create Subdomain" button.


3. The new subdomain will be created and accessible at http://hud.localhost:3000.



Configuration

Make sure to update your hosts file to include the following entry to handle the subdomain locally:

On Windows, open C:\Windows\System32\drivers\etc\hosts and add:

127.0.0.1 hud.localhost

On Mac/Linux, open /etc/hosts and add:

127.0.0.1 hud.localhost


This allows your browser to resolve the subdomain correctly.

Behavior on Non-Created Subdomains

If you attempt to access a subdomain that has not been created (e.g., http://nonexistent.localhost:3000), you will receive a "Page Not Found" error. This ensures that only valid subdomains created through the application can be accessed.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or features.

License

This project is licensed under the MIT License - see the LICENSE file for details.

### Changes Made:
- Added a new section titled *Behavior on Non-Created Subdomains* to explain what happens when a user tries to access a subdomain that hasn’t been created.