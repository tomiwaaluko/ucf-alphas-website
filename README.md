# Xi Iota Chapter - Alpha Phi Alpha Fraternity, Inc.

## Project info

The official website for the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. at the University of Central Florida.

**Live Site**: https://xi-iota-beacon-site.vercel.app/

## About Xi Iota Chapter

The Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. was chartered at the University of Central Florida, representing the first intercollegiate Greek-letter fraternity established by African Americans. Our chapter is dedicated to the principles of scholarship, fellowship, good character, and the uplifting of humanity.

### Features

- **Chapter History**: Learn about our rich legacy and founding at UCF
- **Leadership**: Meet our current executive board and chapter officers
- **Miss Black & Gold**: Our annual pageant celebrating excellence in young African American women
- **Brotherhood**: Get to know our active brothers and their achievements
- **Service**: Discover our community service initiatives and programs
- **Lineage**: Explore our chapter's lineage and crossing history

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/tomiwaaluko/xi-iota-beacon-site.git

# Step 2: Navigate to the project directory.
cd xi-iota-beacon-site

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript development
- **React** - Component-based UI library
- **shadcn/ui** - Beautiful and accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for animations

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Site navigation
│   ├── Hero.tsx        # Homepage hero section
│   └── Footer.tsx      # Site footer
├── pages/              # Main page components
│   ├── About.tsx       # About the chapter
│   ├── Leadership.tsx  # Executive board
│   ├── MissBlackAndGold.tsx  # Pageant information
│   ├── Service.tsx     # Community service
│   └── Lineage.tsx     # Chapter lineage
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
public/
├── leadership/         # Leadership photos
├── missbgcourt/       # Miss Black & Gold photos
└── advisors/          # Advisor photos
```

## How can I deploy this project?

The site is deployed on Vercel and automatically deploys from the main branch.

**Live Site**: https://xi-iota-beacon-site.vercel.app/

For manual deployment:

- The project can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages)
- Run `npm run build` to create the production build
- Deploy the `dist` folder to your hosting service

## Contributing

To contribute to the Xi Iota Chapter website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Contact

For questions about the website or the Xi Iota Chapter:

- **Chapter Email**: apa@ucf.edu
- **University**: University of Central Florida
- **Location**: Orlando, Florida

---

_First of All, Servants of All, We Shall Transcend All_

**Alpha Phi Alpha Fraternity, Inc. - Xi Iota Chapter**
