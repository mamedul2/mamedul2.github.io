
# Freelancer Portfolio Website

A modern, responsive personal website for freelance web developers built with HTML5, CSS3, JavaScript, jQuery, and Bootstrap 4.5.

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap 4.5
- **Modern Animations**: Smooth transitions and scroll effects using jQuery
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Optimized**: Compressed assets, caching, and optimized images
- **Contact Form**: PHP-powered contact form with validation and anti-spam protection
- **Portfolio Showcase**: Interactive portfolio section with hover effects
- **Skills Visualization**: Animated progress bars for technical skills
- **Client Testimonials**: Carousel slider for client feedback
- **Social Integration**: Social media links and sharing capabilities

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, jQuery 3.5.1
- **Framework**: Bootstrap 4.5.2
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Inter)
- **Backend**: PHP (for contact form)
- **Server**: Apache with .htaccess configuration

## File Structure

```
├── index.html              # Main homepage
├── assets/
│   ├── css/
│   │   └── style.css      # Custom styles and animations
│   └── js/
│       └── script.js      # Custom JavaScript and jQuery
├── contact-handler.php     # PHP contact form processor
├── .htaccess              # Apache configuration
├── robots.txt             # Search engine directives
├── sitemap.xml           # SEO sitemap
└── README.md             # This file
```

## Setup Instructions

1. **Upload Files**: Upload all files to your web server
2. **Configure Email**: Edit `contact-handler.php` and update:
   - `$config['email_to']` with your email address
   - `$config['email_from']` with your domain email
3. **Update Content**: Customize the content in `index.html`:
   - Replace "John Smith" with your name
   - Update skills, services, and portfolio items
   - Add your actual contact information
4. **Social Links**: Update social media links in the navigation and footer
5. **Images**: Replace placeholder images with your actual portfolio images
6. **Domain**: Update sitemap.xml with your actual domain name

## Customization

### Colors and Styling
- Edit CSS variables in `assets/css/style.css` under the `:root` selector
- Primary color: `--primary-color: #3b82f6;`
- Update Bootstrap theme colors if needed

### Content Sections
- **Hero Section**: Update title, subtitle, and description
- **About**: Add your bio, skills, and experience
- **Services**: Customize service offerings and pricing
- **Portfolio**: Add your actual projects with images and descriptions
- **Testimonials**: Replace with real client testimonials
- **Contact**: Update contact information and form fields

### Animations
- Scroll animations: Modify in `assets/js/script.js`
- Hover effects: Customize CSS transitions in `style.css`
- Loading animations: Adjust timing and effects as needed

## PHP Contact Form

The contact form includes:
- Input validation and sanitization
- Rate limiting to prevent spam
- Auto-reply functionality
- Honeypot spam protection
- Email notifications

### Requirements
- PHP 7.0 or higher
- Mail function enabled on server
- Write permissions for rate limiting

## SEO Features

- Semantic HTML5 structure
- Meta tags for social sharing (Open Graph)
- Structured data markup
- XML sitemap
- Robots.txt configuration
- Fast loading times
- Mobile-friendly design

## Performance Optimizations

- Compressed CSS and JavaScript
- Browser caching headers
- Image optimization
- Lazy loading for images
- Minified external libraries
- Optimized Google Fonts loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+ (limited support)

## Security Features

- CSRF protection
- XSS prevention
- SQL injection protection
- Rate limiting
- Secure headers
- Input sanitization

## Deployment Checklist

- [ ] Update all placeholder content
- [ ] Configure contact form email settings
- [ ] Test contact form functionality
- [ ] Update social media links
- [ ] Add actual portfolio images
- [ ] Update sitemap with correct domain
- [ ] Test responsive design on all devices
- [ ] Run SEO audit
- [ ] Test page loading speed
- [ ] Configure HTTPS (recommended)

## Support

For questions or customization requests, contact the developer or refer to the documentation of the individual technologies used.

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

---

Built with ❤️ for freelance web developers
