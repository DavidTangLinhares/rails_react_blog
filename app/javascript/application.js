// app/javascript/application.js

// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
// import "controllers"
// import "@popperjs/core"
// import "bootstrap"

// External libraries CSS
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Global SCSS
import '../assets/stylesheets/application.scss';

// React SPA entry point
import './redux-blog/index.jsx';
