# Anas Hamad - Portfolio

A modern, multilingual portfolio website built with Next.js, featuring Arabic and English language support.

## 🚀 Features

- **Multilingual Support**: Full Arabic and English localization
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Interactive Business Card**: QR code generation and contact details
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Articles Section**: Blog-style content management
- **Dark/Light Theme**: System-aware theme switching
- **Static Export**: Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Inter (Latin) + IBM Plex Sans Arabic
- **Deployment**: GitHub Pages
- **Contact Form**: EmailJS

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/anashamad9/ppp.git
cd ppp
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. The GitHub Actions workflow will automatically build and deploy

### Manual Deployment

\`\`\`bash
npm run build
\`\`\`

The static files will be generated in the `out` directory.

## 📧 Contact Form Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `components/contact-modal.tsx`:
   - `serviceId`
   - `templateId` 
   - `publicKey`

## 🌍 Internationalization

The site supports:
- **English** (`/en/`)
- **Arabic** (`/ar/`)

Language detection is automatic based on browser preferences, with manual switching available.

## 📱 Business Card

Interactive business card feature includes:
- QR code generation for easy sharing
- Contact information display
- Responsive design for mobile viewing

## 🎨 Customization

### Content
- Update personal information in `dictionaries/en.json` and `dictionaries/ar.json`
- Replace images in the `public/images/` directory
- Modify the color scheme in `tailwind.config.js`

### Styling
- All styles use Tailwind CSS
- Theme configuration in `app/globals.css`
- Component styles follow shadcn/ui patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: hi.anashamad@gmail.com
- **Phone**: +962795874662
- **Location**: Amman, Jordan

---

Built with ❤️ by [Anas Hamad](https://github.com/anashamad9)
