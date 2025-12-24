# Smart Expense Tracker - Complete Build Plan
**Mobile App with Screenshot Detection, OCR & AI Analysis**

---

## 📋 Project Overview

A comprehensive mobile expense tracking system that:
- ✅ Detects screenshots automatically when taken
- ✅ Extracts text from receipts using OCR
- ✅ Analyzes with AI to parse merchant, items, amounts, and categories
- ✅ Syncs to Excel/Google Sheets for cloud storage
- ✅ Provides analytics with spending patterns and insights

**All technologies used are completely FREE.**

---

## 🛠️ Technology Stack

### Mobile Framework
- **React Native** with Expo
  - Cross-platform (iOS & Android)
  - Fast development with hot reload
  - Large ecosystem of plugins
  - Free and open-source

### Screenshot Detection
- **expo-media-library** - Monitor photo library for new screenshots
- **expo-file-system** - File system access
- **expo-task-manager** - Background task detection

### OCR (Optical Character Recognition)
- **Google Cloud Vision API** - Free tier: 1,000 requests/month
- **Tesseract.js** (Fallback) - Completely free, runs on-device
- **expo-image-manipulator** - Image preprocessing for better OCR

### AI Analysis
- **Google Gemini API** - Free tier with generous limits
  - Parse merchant names
  - Extract line items
  - Identify amounts and currency
  - Auto-categorize expenses
  - Detect dates and payment methods

### Cloud Storage & Sync
- **Google Sheets API** - Free unlimited storage
  - Real-time sync
  - Accessible from anywhere
  - Easy data export
- **AsyncStorage** - Local caching and offline support

### UI & Notifications
- **React Native Reanimated** - Smooth animations
- **Firebase Cloud Messaging (FCM)** - Free push notifications for expense alerts
- **React Navigation** - App navigation

### Additional Tools
- **Expo Camera** - Manual receipt capture
- **Axios** - API requests

---

## 🏗️ Project Architecture

```
SmartExpenseTracker/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ExpenseCard.js
│   │   ├── CategoryPill.js
│   │   └── ReceiptPreview.js
│   ├── screens/             # App screens
│   │   ├── HomeScreen.js
│   │   ├── AnalyticsScreen.js
│   │   ├── ReceiptDetailScreen.js
│   │   ├── SettingsScreen.js
│   │   └── OnboardingScreen.js
│   ├── services/            # Business logic
│   │   ├── screenshotDetector.js
│   │   ├── ocrService.js
│   │   ├── aiAnalyzer.js
│   │   ├── sheetsSync.js
│   │   ├── fcmService.js
│   │   └── storageService.js
│   ├── utils/               # Helper functions
│   │   ├── imageProcessor.js
│   │   ├── dateParser.js
│   │   └── currencyFormatter.js
│   ├── hooks/               # Custom React hooks
│   │   ├── useExpenses.js
│   │   ├── useScreenshotDetection.js
│   │   └── useAnalytics.js
│   ├── navigation/          # Navigation setup
│   │   └── AppNavigator.js
│   ├── constants/           # App constants
│   │   ├── categories.js
│   │   └── colors.js
│   └── config/              # Configuration
│       ├── api.js
│       ├── firebase.js
│       └── sheets.js
├── assets/                  # Images, fonts, icons
├── app.json                 # Expo configuration
├── package.json
└── README.md
```

---

## 🚀 Implementation Roadmap

### Phase 1: Project Setup (Day 1)

#### 1.1 Initialize Expo Project
```bash
npx create-expo-app SmartExpenseTracker
cd SmartExpenseTracker
```

#### 1.2 Install Dependencies
```bash
# Core dependencies
npx expo install expo-media-library expo-file-system expo-image-manipulator
npx expo install expo-camera expo-task-manager
npx expo install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context

# Data & API
npm install axios @react-native-async-storage/async-storage
npm install @google/generative-ai

# Firebase & UI
npm install @react-native-firebase/app @react-native-firebase/messaging
npm install react-native-reanimated react-native-gesture-handler
```

#### 1.3 API Setup
1. **Google Cloud Console** (cloud.google.com)
   - Create new project
   - Enable Vision API (OCR)
   - Enable Google Sheets API
   - Create API credentials
   - Download credentials JSON

2. **Google AI Studio** (makersuite.google.com/app/apikey)
   - Get Gemini API key (free tier)

3. **Firebase Console** (console.firebase.google.com)
   - Create new project
   - Add Android/iOS app
   - Download google-services.json / GoogleService-Info.plist
   - Enable Cloud Messaging

4. **Google Sheets**
   - Create new spreadsheet for expenses
   - Share with service account email
   - Note spreadsheet ID

---

### Phase 2: Core Features (Days 2-4)

#### 2.1 Screenshot Detection Service
**File: `src/services/screenshotDetector.js`**

**Key Features:**
- Monitor photo library for new images
- Identify screenshots by filename patterns
- Trigger background processing
- Send FCM notifications when receipt detected

#### 2.2 OCR Service
**File: `src/services/ocrService.js`**

**Key Features:**
- Preprocess images for better accuracy
- Call Google Cloud Vision API
- Extract full text from receipts
- Handle errors with fallback to Tesseract.js

#### 2.3 AI Analysis Service
**File: `src/services/aiAnalyzer.js`**

**Key Features:**
- Send OCR text to Gemini API
- Parse merchant, date, total, items
- Auto-categorize expenses
- Return structured JSON data

**Expected Output Format:**
```javascript
{
  merchant: "Store Name",
  date: "YYYY-MM-DD",
  total: 0.00,
  currency: "USD",
  category: "Food/Transport/Shopping/etc",
  items: [{name: "item", price: 0.00, quantity: 1}],
  paymentMethod: "Cash/Card/Digital",
  taxAmount: 0.00,
  confidence: 0.95
}
```

#### 2.4 Google Sheets Sync Service
**File: `src/services/sheetsSync.js`**

**Key Features:**
- Append expenses to Google Sheets
- Save locally with AsyncStorage
- Queue failed syncs for retry
- Offline support

#### 2.5 FCM Notification Service
**File: `src/services/fcmService.js`**

**Key Features:**
- Initialize Firebase Cloud Messaging
- Request notification permissions
- Send expense alerts
- Handle background notifications

---

### Phase 3: User Interface (Days 5-6)

#### 3.1 Home Screen
**File: `src/screens/HomeScreen.js`**

**Features:**
- Recent expenses list
- Search and filter
- Pull to refresh
- Quick add button
- Swipe to delete

#### 3.2 Analytics Dashboard
**File: `src/screens/AnalyticsScreen.js`**

**Features:**
- Monthly spending overview
- Category breakdown
- Top merchants list
- Spending trends
- AI-generated insights

#### 3.3 Receipt Detail Screen
**File: `src/screens/ReceiptDetailScreen.js`**

**Features:**
- Receipt image preview
- Extracted data display
- Edit capability
- Re-analyze option
- Share receipt

#### 3.4 Settings Screen
**File: `src/screens/SettingsScreen.js`**

**Features:**
- API key management
- Category customization
- Notification preferences
- Data export options

---

### Phase 4: Analytics Engine (Day 7)

**File: `src/services/analyticsService.js`**

**Key Features:**
- Calculate monthly spending trends
- Category breakdown analysis
- Top merchants tracking
- Spending pattern detection
- AI-powered insights generation

**Analytics Capabilities:**
- Monthly/weekly spending comparisons
- Category-wise expense distribution
- Unusual spending alerts
- Budget tracking
- Spending predictions

---

## 🔧 Configuration & Setup Guide

### Step 1: Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project: "SmartExpenseTracker"
3. Enable APIs:
   - Cloud Vision API
   - Google Sheets API
4. Create credentials:
   - API Key (for Vision API)
   - Service Account (for Sheets API)
5. Download service account JSON
6. Copy API keys to `src/config/api.js`

### Step 2: Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project or use existing
3. Add Android app:
   - Package name: `com.yourname.smartexpensetracker`
   - Download `google-services.json` → place in `android/app/`
4. Add iOS app:
   - Bundle ID: `com.yourname.smartexpensetracker`
   - Download `GoogleService-Info.plist` → place in `ios/`
5. Enable Cloud Messaging in Firebase Console

### Step 3: Google Sheets Setup

1. Create new Google Sheet
2. Name it "Expense Tracker Data"
3. Create sheet named "Expenses" with headers:
   ```
   Date | Merchant | Category | Amount | Currency | Payment | Tax | Items | Confidence
   ```
4. Share with service account email (from JSON)
5. Copy spreadsheet ID from URL
6. Update `src/config/sheets.js`

### Step 4: Gemini API Setup

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create API key
3. Copy to `src/config/api.js`

### Step 5: App Configuration

**File: `src/config/api.js`**
```javascript
export const API_CONFIG = {
  GOOGLE_VISION_API_KEY: 'your-vision-api-key',
  GEMINI_API_KEY: 'your-gemini-api-key',
  GOOGLE_SHEETS_API_KEY: 'your-sheets-api-key',
  SPREADSHEET_ID: 'your-spreadsheet-id',
};
```

**File: `src/config/firebase.js`**
```javascript
export const FIREBASE_CONFIG = {
  // Auto-configured from google-services.json
  // No manual config needed
};
```

---

## 📱 Running the App

### Development
```bash
# Start Expo dev server
npx expo start

# Run on Android
npx expo start --android

# Run on iOS
npx expo start --ios
```

### Building for Production

#### Android (APK)
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure build
eas build:configure

# Build APK
eas build --platform android --profile preview
```

#### iOS (TestFlight)
```bash
# Build for iOS
eas build --platform ios
```

---

## 🎯 Key Features Breakdown

### 1. Screenshot Detection
- **How it works**: Monitors photo library for new images
- **Detection logic**: Checks filename patterns and metadata
- **Background processing**: Uses Expo Task Manager
- **Notification**: FCM alerts when receipt detected

### 2. OCR Processing
- **Primary**: Google Cloud Vision API (1,000 free/month)
- **Preprocessing**: Image enhancement for accuracy
- **Text extraction**: Full document text detection
- **Fallback**: Tesseract.js for offline mode

### 3. AI Analysis
- **Model**: Google Gemini Pro (free tier)
- **Parsing**: Structured data extraction
- **Categorization**: Auto-assign expense categories
- **Confidence scoring**: Reliability indicator

### 4. Cloud Sync
- **Storage**: Google Sheets (unlimited free)
- **Real-time**: Instant sync on expense creation
- **Offline support**: Queue for later sync
- **Local cache**: AsyncStorage for offline access

### 5. Notifications
- **Service**: Firebase Cloud Messaging (free)
- **Triggers**: New expense detected, budget alerts
- **Background**: Works even when app is closed
- **Customizable**: User can configure preferences

### 6. Analytics
- **Calculations**: Monthly/weekly spending trends
- **Insights**: AI-powered spending patterns
- **Trends**: Category and merchant analysis
- **Budgets**: Track against spending limits

---

## 🔒 Privacy & Security

- **Local-first**: Data stored on device
- **Encrypted**: API keys in environment variables
- **Permissions**: Minimal required permissions
- **User control**: Delete data anytime
- **No tracking**: No third-party analytics

---

## 🚀 Future Enhancements

### Phase 2 Features
- [ ] Budget alerts and notifications
- [ ] Multi-currency support
- [ ] Export to PDF/CSV
- [ ] Receipt sharing
- [ ] Recurring expense detection

### Phase 3 Features
- [ ] Web dashboard
- [ ] Family/team sharing
- [ ] Bank account integration
- [ ] Tax report generation
- [ ] Voice input for expenses

### Advanced Features
- [ ] ML model for better categorization
- [ ] Duplicate receipt detection
- [ ] Smart recommendations
- [ ] Expense predictions
- [ ] Integration with accounting software

---

## 📊 Cost Analysis (All FREE!)

| Service | Free Tier | Usage Estimate |
|---------|-----------|----------------|
| Google Vision API | 1,000 requests/month | ~30 receipts/day |
| Gemini API | 60 requests/minute | Unlimited for personal use |
| Google Sheets | Unlimited | Unlimited rows |
| Firebase FCM | Unlimited | Unlimited notifications |
| Expo | Free | Full features |
| React Native | Free | Open source |

**Total Monthly Cost: $0** 🎉

---

## 🛠️ Troubleshooting

### Common Issues

**Screenshot not detected**
- Check media library permissions
- Verify background task registration
- Test with manual screenshot

**OCR accuracy low**
- Ensure good image quality
- Check lighting in receipt photo
- Try image preprocessing adjustments

**API quota exceeded**
- Monitor usage in Google Cloud Console
- Implement request caching
- Use fallback services

**Sync failures**
- Check internet connection
- Verify API credentials
- Review spreadsheet permissions

**FCM notifications not working**
- Verify Firebase configuration
- Check notification permissions
- Test on physical device (not emulator)

---

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Google Vision API](https://cloud.google.com/vision/docs)
- [Gemini API Docs](https://ai.google.dev/docs)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
- [React Navigation](https://reactnavigation.org/)

---

## 🎓 Learning Path

1. **Week 1**: React Native basics + Expo setup
2. **Week 2**: API integrations (Vision, Gemini, Sheets, FCM)
3. **Week 3**: UI/UX implementation
4. **Week 4**: Testing and refinement

---

## ✅ Success Metrics

- [ ] Screenshot detection works 95%+ of the time
- [ ] OCR accuracy > 90% on clear receipts
- [ ] AI categorization > 85% accurate
- [ ] Sync latency < 2 seconds
- [ ] FCM notifications delivered within 5 seconds
- [ ] App loads in < 1 second
- [ ] Zero crashes in production

---

## 🤝 Contributing

This is a personal project, but feel free to:
- Fork and customize
- Share improvements
- Report issues
- Suggest features

---

## 📄 License

MIT License - Free to use and modify

---

**Built with ❤️ using 100% free technologies**

*Last Updated: December 24, 2025*
