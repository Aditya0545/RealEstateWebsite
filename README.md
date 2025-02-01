# Real Estate Website

A modern real estate platform built with Next.js and MongoDB.

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- MongoDB Atlas account

## Tech Stack

- Next.js 14
- MongoDB
- Tailwind CSS
- Server Actions

## Features

- User authentication
- Property listings
- Property search
- Admin dashboard
- Responsive design

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/real-estate-website.git
cd real-estate-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your MongoDB URI:
```env
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

### Windows
1. Install Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Install Git from [https://git-scm.com/](https://git-scm.com/)
3. Open PowerShell or Command Prompt as administrator

### macOS/Linux
1. Install Node.js using nvm (recommended):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
real-estate-website/
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions
│   ├── api/              # API routes
│   └── page.js           # Home page
├── components/            # React components
├── lib/                  # Utility functions
├── models/               # MongoDB models
└── public/              # Static files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
