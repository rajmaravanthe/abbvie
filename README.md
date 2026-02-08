# AbbVie Library Dashboard

A modern, responsive library dashboard built with Next.js, TypeScript, React, Zustand, and Tailwind CSS.

## Features

- 📚 **Library Management**: Browse and search through a comprehensive library of resources
- ⭐ **Featured Content**: Curated content highlighted for easy access
- 🔥 **Trending Section**: Most popular content based on views and engagement
- 🎯 **BITES**: Quick reads and essential insights in bite-sized format
- 🔍 **Advanced Search**: Real-time search with debouncing
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **State Management**: Efficient state management with Zustand
- 🎭 **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Icons**: SVG Icons

## Project Structure

```
AbbVie/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # React components
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── SearchBar.tsx
│   │   ├── LibraryCard.tsx
│   │   ├── BiteCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── FeaturedSection.tsx
│   │   ├── TrendingSection.tsx
│   │   └── BitesSection.tsx
│   ├── lib/               # Library code
│   │   ├── store.ts       # Zustand store
│   │   └── mockData.ts    # Mock data
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   └── api/               # API integration
├── styles/
│   └── globals.css        # Global styles
└── public/                # Static assets

## Getting Started

### Prerequisites

- Node.js 16+ (recommended: Node.js 18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Features Overview

### Library Items
- Display cards with images, titles, descriptions
- Category badges
- View counts and likes
- Author information
- Read time estimates
- Tags for categorization

### Featured Section
- Handpicked content
- Prominent display
- Special "Featured" badge

### Trending Section
- Most popular content
- Fire emoji indicator
- Based on views and engagement

### BITES Section
- Quick, digestible content
- Compact card layout
- Duration indicators
- Easy scanning

### Search Functionality
- Real-time search
- Debounced input (300ms)
- Search across titles and descriptions
- Clear button for quick reset

## State Management

The application uses Zustand for state management with the following features:

- Library items management
- Featured and trending items filtering
- Search functionality
- Modal state
- Pagination
- Category filtering

## Customization

### Adding New Library Items

Edit `src/lib/mockData.ts` to add new library items or bites.

### Styling

Modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Components

All components are modular and reusable. Find them in `src/components/`.

## License

Private - AbbVie Internal Use Only

## Support

For questions or issues, please contact the development team.

