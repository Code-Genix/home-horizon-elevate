# Home Horizon Elevate

A modern real estate platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with excellent cross-device compatibility
- **Property Listings**: Browse and filter properties with advanced search
- **Property Details**: Comprehensive property information with interactive elements
- **Authentication**: User authentication and authorization system
- **Real-time Updates**: Live property data and status updates

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd home-horizon-elevate

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── property/       # Property-specific components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎨 Code Quality

This project follows strict code quality standards:

### TypeScript
- ✅ **No `any` types**: All components use proper TypeScript interfaces
- ✅ **Strict type checking**: Proper type definitions for all props and state
- ✅ **Interface definitions**: Clear interfaces for all data structures

### Code Organization
- ✅ **Component separation**: Clear separation of concerns
- ✅ **Reusable components**: Modular and reusable UI components
- ✅ **Consistent naming**: Follows React and TypeScript conventions

### Best Practices
- ✅ **Error handling**: Proper error boundaries and error states
- ✅ **Performance**: Optimized with React.memo and useMemo where appropriate
- ✅ **Accessibility**: ARIA labels and semantic HTML
- ✅ **Responsive design**: Mobile-first approach

### Linting & Formatting
- ✅ **ESLint**: Configured with TypeScript and React rules
- ✅ **No console statements**: Production-ready logging
- ✅ **Consistent formatting**: Prettier-compatible code style

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Quality Checks

The project includes automated code quality checks:

```bash
# Run linting
npm run lint

# Check TypeScript types
npx tsc --noEmit
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Key Components

### PropertyCard
- Interactive property cards with image carousel
- Like/unlike functionality
- Responsive design with hover effects

### PropertyDetails
- Comprehensive property information
- Interactive floor plans and pricing
- Authentication-gated content

### FiltersSidebar
- Advanced filtering options
- Real-time filter updates
- Mobile-responsive design

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Tailwind Configuration
Custom colors and themes are defined in `tailwind.config.ts`:

- **Primary colors**: Navy, teal, gold
- **Neutral colors**: Warm white, cream, slate
- **Custom fonts**: Urbanist, Inter

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.
