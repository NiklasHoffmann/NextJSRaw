# 🚀 Next.js Production-Ready Starter

Ein vollständiges, produktionsreifes Next.js Starter-Template mit TypeScript, Tailwind CSS, MongoDB, i18n und vielen weiteren Features.

## ✨ Features

### Core Stack

- ⚡ **Next.js 16** - Neueste Version mit App Router & Performance-Optimierungen
- ⚛️ **React 19** - Modernste React-Version
- 📘 **TypeScript** - Vollständige Type-Safety im Strict Mode
- 🎨 **Tailwind CSS** - Utility-First CSS Framework
- 🗄️ **MongoDB** - NoSQL Datenbank mit Mongoose ODM

### Developer Experience

- 🌍 **i18n** - Mehrsprachigkeit mit next-intl (Deutsch/Englisch)
- 🌓 **Theme Toggle** - Dark/Light Mode mit next-themes (System-Sync)
- ✅ **Validation** - Zod für Runtime-Validation & Env Variables
- 🎯 **ESLint + Prettier** - Code Quality & Auto-Formatting
- 🐺 **Husky** - Git Hooks für Pre-Commit & Pre-Push Checks
- 📝 **Winston Logger** - Strukturiertes Logging mit Rotation

### Production Features

- 🚦 **Error Handling** - Error Boundaries & Custom Error Pages
- ⏳ **Loading States** - Suspense Fallbacks & Loading Components
- 🔒 **Rate Limiting** - In-Memory API Rate Limiting
- 📊 **API Response Wrapper** - Konsistente Success/Error Responses
- 🤖 **SEO** - Dynamic Sitemap & Robots.txt
- 🔍 **TypeScript Strict Mode** - Maximale Type-Safety
- 🎨 **VS Code Integration** - Settings & Extensions empfohlen

## 📁 Projektstruktur

```
NextJSRaw/
├── src/
│   ├── app/
│   │   ├── [locale]/              # Internationalisierte Routes
│   │   │   ├── layout.tsx         # Root Layout
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── loading.tsx        # Loading UI
│   │   │   ├── error.tsx          # Error Boundary
│   │   │   └── not-found.tsx      # 404 Page
│   │   ├── api/                   # API Routes
│   │   │   ├── health/            # Health Check
│   │   │   └── test/              # Test Endpoint
│   │   ├── global-error.tsx       # Global Error Handler
│   │   ├── sitemap.ts             # Dynamic Sitemap
│   │   └── robots.ts              # Robots.txt
│   ├── components/
│   │   ├── providers/             # React Providers
│   │   ├── ui/                    # UI Components
│   │   └── layouts/               # Layout Components
│   ├── lib/
│   │   ├── env.ts                 # Env Validation
│   │   ├── mongodb.ts             # Database Connection
│   │   ├── logger.ts              # Winston Logger
│   │   ├── utils.ts               # Utility Functions
│   │   ├── api-response.ts        # API Helpers
│   │   └── rate-limit.ts          # Rate Limiter
│   ├── models/                    # Mongoose Models
│   ├── schemas/                   # Zod Validation Schemas
│   ├── types/                     # TypeScript Types
│   ├── config/                    # App Configuration
│   ├── i18n.ts                    # i18n Config
│   ├── routing.ts                 # Routing Config
│   └── middleware.ts              # Next.js Middleware
├── messages/                      # i18n Translations
│   ├── de.json
│   └── en.json
├── .vscode/                       # VS Code Settings
├── .husky/                        # Git Hooks
└── public/                        # Static Assets
```

## 🚀 Quick Start

### Voraussetzungen

- Node.js 18+
- npm/pnpm/yarn
- MongoDB (lokal oder Atlas)

### Installation

1. **Dependencies installieren**

```bash
npm install
```

2. **Environment Variables einrichten**

```bash
cp .env.example .env.local
```

Bearbeite `.env.local` und füge deine MongoDB URI hinzu:

```env
MONGODB_URI=mongodb://localhost:27017/nextjs-starter
# oder MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

3. **Development Server starten**

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## 📝 Verfügbare Scripts

```bash
npm run dev          # Development Server starten
npm run build        # Production Build erstellen
npm run start        # Production Server starten
npm run lint         # ESLint ausführen
npm run lint:fix     # ESLint mit Auto-Fix
npm run format       # Code formatieren mit Prettier
npm run format:check # Prettier Check
npm run type-check   # TypeScript Type-Check
```

## 🌍 Internationalisierung (i18n)

Das Projekt unterstützt Deutsch und Englisch:

- `/` oder `/de` - Deutsche Version
- `/en` - Englische Version

Übersetzungen bearbeiten in:

- `messages/de.json`
- `messages/en.json`

## 🎨 Theming

Dark/Light Mode Toggle ist bereits integriert:

- Automatische System-Preference Detection
- Manuelle Umschaltung über ThemeToggle Component
- Persistierung der User-Präferenz

## 🗄️ Database

### MongoDB Connection

Die MongoDB-Verbindung wird automatisch im Hintergrund verwaltet:

- Connection Pooling
- Automatic Reconnection
- Cached Connections in Development

### Models

Beispiel User Model unter `src/models/User.ts`:

```typescript
import User from '@/models/User';

const user = await User.create({
  name: 'John Doe',
  email: 'john@example.com',
});
```

## 🔒 API Routes

### Health Check

```bash
GET /api/health
```

Überprüft die System-Gesundheit und Datenbankverbindung.

### Test Endpoint

```bash
GET /api/test
POST /api/test
```

Test-Endpoint mit Rate Limiting.

### Rate Limiting

Alle API Routes haben automatisches Rate Limiting:

- Default: 100 Requests pro Minute
- Anpassbar in `.env.local`

## ✅ Code Quality

## 🆕 Was ist neu? (v2.0)

### Hinzugefügt
- ✅ **Complete User CRUD API** - Voll funktionsfähige User API mit Validation
- 🐳 **Docker Support** - Dockerfile & docker-compose.yml für Container Deployment
- 🔄 **GitHub Actions CI/CD** - Automatische Lint, TypeCheck & Build Pipeline
- 📦 **File Utils** - Helper für File Uploads, Validation & Processing
- 🎯 **Constants** - Zentrale Konfiguration für Auth, API, Pagination
- 🔧 **Theme Fix** - Dark Mode funktioniert jetzt auf gesamter Seite
- ⚡ **Next.js 16** - Upgrade auf neueste Version mit Security Fixes

## ✅ Code Quality

### Pre-Commit Hooks
- Prettier Auto-Formatting
- TypeScript Type-Check

### Pre-Push Hooks
- TypeScript Type-Check
- Verhindert Pushen bei Type-Errors

### GitHub Actions
- ESLint & Prettier Check
- TypeScript Validation
- Build Test
- Automatisch bei Push & Pull Requests

## 🚢 Deployment

### Vercel (Empfohlen)
1. Push zu GitHub
2. Import in Vercel
3. Environment Variables setzen
4. Deploy!

### Docker
```bash
# Mit Docker Compose (inkl. MongoDB)
docker-compose up -d

# Oder manuell
docker build -t nextjs-starter .
docker run -p 3000:3000 nextjs-starter
```

### Manual
```bash
npm run build
npm run start
```

## 📦 Environment Variables

Erforderliche Environment Variables:
```env
MONGODB_URI=mongodb://localhost:27017/nextjs-starter
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
LOG_LEVEL=info
API_RATE_LIMIT=100
API_RATE_LIMIT_WINDOW=60000
```

## 🔌 API Endpoints

### Health Check
```bash
GET /api/health
# Response: { status: 'healthy', database: 'connected' }
```

### Users API
```bash
GET    /api/users          # List all users
POST   /api/users          # Create user
GET    /api/users/[id]     # Get user by ID
PATCH  /api/users/[id]     # Update user
DELETE /api/users/[id]     # Soft delete user
```

### Test Endpoint
```bash
GET  /api/test             # Test with rate limiting
POST /api/test             # Echo request body
```

## 🛠️ VS Code Integration

Empfohlene Extensions werden automatisch vorgeschlagen:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- MongoDB for VS Code
- TypeScript Next.js

## 🎯 Was fehlt noch?

Für deinen individuellen Use Case könntest du noch ergänzen:

### Authentication
- [ ] NextAuth.js Integration
- [ ] JWT Token Management
- [ ] Protected Routes Middleware
- [ ] Session Management

### Testing
- [ ] Jest Unit Tests
- [ ] Playwright E2E Tests
- [ ] API Integration Tests

### Features
- [ ] Email Service (Resend/Nodemailer)
- [ ] File Upload zu Cloud (S3/Cloudinary)
- [ ] Webhook Handler
- [ ] Cron Jobs
- [ ] Redis Caching

### DevOps
- [ ] Monitoring (Sentry)
- [ ] Analytics
- [ ] Performance Monitoring
- [ ] Error Tracking

## 📚 Weitere Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [MongoDB Dokumentation](https://docs.mongodb.com)
- [next-intl Dokumentation](https://next-intl-docs.vercel.app)

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle einen Pull Request.

## 📄 Lizenz

MIT License

## 👨‍💻 Author

Erstellt mit ❤️ als Production-Ready Starter Template für Next.js 16

**Repository:** https://github.com/NiklasHoffmann/NextJSRaw

---

**Happy Coding! 🚀**
