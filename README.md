# My Web Project

A simple responsive web project with modern build tools.

## Features

- Responsive grid layout
- SCSS compilation
- Browser auto-reload with BrowserSync
- JavaScript linting with ESLint
- Image optimization
- CSS and JavaScript minification for production

## Prerequisites

- Node.js (v10.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd my-web

# Install dependencies
npm install
```

## Development

```bash
# Start development server with live reload
npm start
```

This will:

- Compile SCSS to CSS
- Watch for file changes
- Start a local development server with BrowserSync
- Automatically reload the browser when files change

## Build for Production

```bash
# Build optimized assets for production
npm run build
```

This will:

- Compile and minify SCSS to CSS
- Minify JavaScript
- Optimize images
- Copy all assets to a `dist` folder

## Project Structure

```
my-web/
├── css/                  # CSS and SCSS files
│   └── main.scss         # Main SCSS file
├── images/               # Image assets
├── js/                   # JavaScript files
│   └── main.js           # Main JavaScript file
├── .eslintrc.yml         # ESLint configuration
├── .gitignore            # Git ignore file
├── Gulpfile.js           # Gulp configuration
├── index.html            # Main HTML file
├── package.json          # npm package configuration
└── README.md             # Project documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC
