# 📱 Smart Expense Tracker

> Automatically detect, analyze, and track expenses from receipt screenshots using AI

## ✨ Features

- 📸 **Automatic Screenshot Detection** - Detects when you take a screenshot of a receipt
- 🔍 **OCR Text Extraction** - Extracts text from receipts using Google Cloud Vision
- 🤖 **AI-Powered Analysis** - Parses merchant, items, amounts, and categories with Gemini AI
- ☁️ **Cloud Sync** - Syncs to Google Sheets for accessible storage
- 📊 **Analytics Dashboard** - Visualize spending patterns and insights
- 💯 **100% Free** - All technologies used are completely free

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Expo CLI (`npm install -g expo-cli`)
- Google Cloud account (free tier)
- Google AI Studio account (free)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd AppleCopy

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Configuration

1. Set up Google Cloud APIs (see [BUILDPLAN.md](BUILDPLAN.md) for detailed steps)
2. Create `src/config/api.js` with your API keys:

```javascript
export const API_CONFIG = {
  GOOGLE_VISION_API_KEY: 'your-key',
  GEMINI_API_KEY: 'your-key',
  GOOGLE_SHEETS_API_KEY: 'your-key',
  SPREADSHEET_ID: 'your-spreadsheet-id',
};
```

3. Run the app on your device or emulator

## 📖 Documentation

See [BUILDPLAN.md](BUILDPLAN.md) for:
- Complete architecture overview
- Detailed implementation guide
- API setup instructions
- Code examples and best practices

## 🛠️ Tech Stack

- **Framework**: React Native + Expo
- **OCR**: Google Cloud Vision API
- **AI**: Google Gemini API
- **Storage**: Google Sheets API + AsyncStorage
- **Charts**: Victory Native
- **Navigation**: React Navigation

## 📱 Screenshots

*Coming soon after implementation*

## 🗺️ Roadmap

- [x] Project planning and architecture
- [ ] Core screenshot detection
- [ ] OCR integration
- [ ] AI analysis
- [ ] Cloud sync
- [ ] Analytics dashboard
- [ ] Production release

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

MIT License - See LICENSE file for details

---

**Built with ❤️ using 100% free technologies**
