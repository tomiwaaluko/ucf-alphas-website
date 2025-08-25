# Xi Iota Chapter - Alpha Phi Alpha Fraternity, Inc.

## Project Overview

The official website for the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. at the University of Central Florida. This modern, responsive website showcases our chapter's rich history, current leadership, brotherhood, and community service initiatives.

**Live Site**: https://xi-iota-beacon-site.vercel.app/

## About Xi Iota Chapter

The Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. was chartered at the University of Central Florida, representing the first intercollegiate Greek-letter fraternity established by African Americans. Our chapter is dedicated to the principles of scholarship, fellowship, good character, and the uplifting of humanity.

### Current Features

- **Chapter History**: Learn about our rich legacy and founding at UCF
- **Leadership**: Meet our current executive board and chapter officers
- **Miss Black & Gold**: Our annual pageant celebrating excellence in young African American women
- **Brotherhood**: Get to know our active brothers and their achievements
- **Service**: Discover our community service initiatives and programs
- **Lineage**: Explore our chapter's lineage and crossing history
- **Advisors**: Meet our dedicated chapter advisors
- **Jewels**: Learn about our founding fathers and their legacy
- **Contact**: Get in touch with interactive contact forms and information

### Upcoming Features

- **Email Integration**: Contact form functionality powered by Resend API for reliable email delivery
- **Enhanced Mobile Experience**: Continued optimization for mobile devices
- **Advanced Search**: Search functionality across all content
- **Analytics Dashboard**: Chapter engagement and website analytics

## Development Setup

This project uses modern web development tools and requires Node.js for local development.

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **bun** - Package manager (bun is preferred for faster installation)

### Local Development

```sh
# Step 1: Clone the repository
git clone https://github.com/tomiwaaluko/xi-iota-beacon-site.git

# Step 2: Navigate to the project directory
cd xi-iota-beacon-site

# Step 3: Install dependencies (using bun for better performance)
bun install
# or with npm
npm install

# Step 4: Start the development server
bun run dev
# or with npm
npm run dev

# The development server will start at http://localhost:5173
```

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run build:dev` - Build for development environment
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint for code quality checks

### Alternative Development Methods

### Alternative Development Methods

**Edit directly in GitHub**

- Navigate to the desired file(s)
- Click the "Edit" button (pencil icon) at the top right of the file view
- Make your changes and commit them directly

**Use GitHub Codespaces**

- Navigate to the main page of the repository
- Click on the "Code" button (green button) near the top right
- Select the "Codespaces" tab
- Click on "New codespace" to launch a cloud development environment
- Edit files directly within the Codespace and commit changes when done

## Technology Stack

This project leverages modern web technologies for optimal performance and developer experience:

### Core Technologies

- **Vite** - Next-generation frontend tooling for fast development and builds
- **React 18** - Component-based UI library with latest features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### UI & Design

- **shadcn/ui** - Beautiful, accessible, and customizable UI components
- **Framer Motion** - Production-ready motion library for smooth animations
- **Lucide React** - Beautiful & consistent icon library
- **next-themes** - Theme switching capability

### Forms & Validation

- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolvers for React Hook Form

### UI Components (Radix UI)

- **Complete component library** including dialogs, dropdowns, tooltips, and more
- **Accessibility-first** - Built with ARIA compliance and keyboard navigation
- **Fully customizable** - Unstyled primitives that integrate with Tailwind CSS

### Data & State Management

- **TanStack Query** - Powerful data synchronization for React
- **React Router DOM** - Declarative routing for React applications

### Development Tools

- **ESLint** - Code linting and quality enforcement
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing with autoprefixer

### Email Integration (Planned)

- **Resend API** - Modern email API for reliable transactional emails
  - Planned integration for contact form submissions
  - Possible Newsletter subscriptions
  - Possible Event notifications and updates

## Project Structure

```
xi-iota-beacon-site/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── hero-background.mp4     # Hero section video background
│   ├── robots.txt
│   ├── advisors/               # Advisor headshots
│   ├── brothers/               # Active brother photos
│   ├── leadership/             # Executive board photos
│   ├── lineage/                # Lineage and crossing photos
│   ├── missbgcourt/           # Miss Black & Gold photos
│   └── service-gallery/        # Community service images
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # shadcn/ui base components
│   │   ├── About.tsx           # About section component
│   │   ├── Contact.tsx         # Contact form with Resend integration
│   │   ├── Eboard.tsx          # Executive board display
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Greeting.tsx        # Welcome section
│   │   ├── Hero.tsx            # Homepage hero with video background
│   │   ├── Lineage.tsx         # Chapter lineage display
│   │   ├── Navigation.tsx      # Site navigation menu
│   │   ├── ScrollToTop.tsx     # Scroll to top functionality
│   │   └── Service.tsx         # Community service showcase
│   ├── pages/                  # Page components with routing
│   │   ├── About.tsx           # About the chapter page
│   │   ├── AdvisorDetail.tsx   # Individual advisor pages
│   │   ├── Advisors.tsx        # All advisors listing
│   │   ├── BecomeAnAlpha.tsx   # Membership information
│   │   ├── BrotherDetail.tsx   # Individual brother pages
│   │   ├── ChapterHistory.tsx  # Xi Iota chapter history
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Eboard.tsx          # Executive board page
│   │   ├── FraternityHistory.tsx # Alpha Phi Alpha history
│   │   ├── Index.tsx           # Homepage
│   │   ├── JewelDetail.tsx     # Founding fathers detail
│   │   ├── Jewels.tsx          # All founding fathers
│   │   ├── Lineage.tsx         # Chapter lineage page
│   │   ├── LineageDetail.tsx   # Individual lineage details
│   │   └── MissBlackAndGold.tsx # Pageant information
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile device detection
│   │   └── use-toast.ts        # Toast notification system
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Common utility functions
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
├── vercel.json                 # Vercel deployment configuration
└── package.json                # Dependencies and scripts
```

### Key Directories

- **`/public`** - Static assets including photos, videos, and documents
- **`/src/components`** - Reusable UI components and sections
- **`/src/pages`** - Individual page components with React Router
- **`/src/hooks`** - Custom React hooks for shared functionality
- **`/src/lib`** - Utility functions and helper libraries

## Deployment

The website is automatically deployed using **Vercel** with continuous integration from the main branch.

### Live Deployment

- **Production URL**: https://ucfalphas.vercel.app/
- **Auto-deployment**: Triggered on every push to `main` branch
- **Build Command**: `npm run build` (generates static files in `dist/`)
- **Framework**: Vite (detected automatically by Vercel)

### Manual Deployment Options

**Deploy to Vercel**

```sh
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

**Deploy to Other Platforms**

```sh
# Build the project
npm run build

# The dist/ folder contains the static files
# Deploy the dist/ folder to any static hosting service:
# - Netlify
# - GitHub Pages
# - Firebase Hosting
# - AWS S3
# - Cloudflare Pages
```

### Environment Configuration

For email functionality with Resend API, the following environment variables will be required:

```env
# .env.local (for local development)
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_CONTACT_EMAIL=thesonsoft3@gmail.com
```

For production deployment on Vercel:

1. Add environment variables in Vercel dashboard
2. Configure Resend API key in project settings
3. Set up proper email templates and sender verification

## Contributing

We welcome contributions to improve the Xi Iota Chapter website! Here's how you can help:

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```sh
   git clone https://github.com/YOUR_USERNAME/xi-iota-beacon-site.git
   ```
3. **Create a feature branch**:
   ```sh
   git checkout -b feature/your-amazing-feature
   ```
4. **Install dependencies**:
   ```sh
   bun install  # or npm install
   ```
5. **Start development server**:
   ```sh
   bun run dev  # or npm run dev
   ```

### Making Changes

- Follow the existing code style and TypeScript conventions
- Use meaningful commit messages
- Test your changes thoroughly in development
- Ensure responsive design works on mobile and desktop
- Run linting before committing: `bun run lint`

### Submitting Changes

1. **Commit your changes**:
   ```sh
   git commit -m 'Add: your amazing feature description'
   ```
2. **Push to your branch**:
   ```sh
   git push origin feature/your-amazing-feature
   ```
3. **Open a Pull Request** with:
   - Clear description of changes made
   - Screenshots for UI changes
   - Testing instructions if applicable

### Areas for Contribution

- **Bug fixes** - Report and fix issues
- **New features** - Enhance functionality
- **UI/UX improvements** - Better design and user experience
- **Mobile optimization** - Improve responsive design
- **Accessibility** - Make the site more accessible
- **Documentation** - Improve README and code comments
- **Testing** - Add unit and integration tests

### Code Style Guidelines

- Use TypeScript for all new code
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Implement proper error handling
- Write descriptive component and function names
- Add comments for complex logic

## Contact & Support

### Chapter Contact Information

- **Chapter Email**: apa@ucf.edu
- **Instagram**: @ucf_alphas
- **University**: University of Central Florida
- **Location**: Orlando, Florida
- **Mailing Address**:
  ```
  Xi Iota Chapter - Alpha Phi Alpha Fraternity, Inc.
  P.O. Box 160157
  Orlando, FL 32816-8006
  United States
  ```

### Website Technical Support

For technical issues, feature requests, or questions about the website:

- **Repository**: [github.com/tomiwaaluko/xi-iota-beacon-site](https://github.com/tomiwaaluko/xi-iota-beacon-site)
- **Issues**: Create an issue on GitHub for bug reports or feature requests
- **Discussions**: Use GitHub Discussions for general questions

### Development Team

- **Lead Developer**: [Tomiwa Aluko](https://github.com/tomiwaaluko)
- **Chapter**: Xi Iota Chapter at University of Central Florida

---

## License & Legal

This website is built for the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc.

**Alpha Phi Alpha Fraternity, Inc.** is a registered trademark. All fraternity-related content, logos, and materials are used with permission and in accordance with fraternity guidelines.

**Photography & Media**: All photos and media are property of the Xi Iota Chapter unless otherwise noted. Please contact the chapter for permission before using any images or content.

---

## Acknowledgments

Special thanks to:

- **Xi Iota Chapter Brothers** - For providing content, photos, and feedback
- **Chapter Advisors** - For guidance and support
- **University of Central Florida** - For continued partnership
- **Alpha Phi Alpha Fraternity, Inc.** - For the foundation and principles we uphold

---

_**"First of All, Servants of All, We Shall Transcend All"**_

**Alpha Phi Alpha Fraternity, Inc. - Xi Iota Chapter**  
_Founded December 4, 1906 at Cornell University_  
_Xi Iota Chapter Chartered at University of Central Florida_
