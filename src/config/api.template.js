/**
 * API Configuration Template
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to 'api.js' in the same directory
 * 2. Replace the placeholder values with your actual API keys
 * 3. Never commit the actual api.js file (it's in .gitignore)
 */

export const API_CONFIG = {
  // Google Cloud Vision API for OCR
  GOOGLE_VISION_API_KEY: 'your-google-vision-api-key-here',
  VISION_API_ENDPOINT: 'https://vision.googleapis.com/v1/images:annotate',
  
  // Google Gemini AI for expense analysis
  GEMINI_API_KEY: 'your-gemini-api-key-here',
  GEMINI_MODEL: 'gemini-pro',
  
  // Google Sheets API for cloud storage
  GOOGLE_SHEETS_API_KEY: 'your-google-sheets-api-key-here',
  SPREADSHEET_ID: 'your-google-spreadsheet-id-here',
  SHEETS_API_ENDPOINT: 'https://sheets.googleapis.com/v4/spreadsheets',
};

/**
 * Validate that all required API keys are configured
 */
export const validateAPIConfig = () => {
  const missing = [];
  
  if (!API_CONFIG.GOOGLE_VISION_API_KEY || API_CONFIG.GOOGLE_VISION_API_KEY.includes('your-')) {
    missing.push('GOOGLE_VISION_API_KEY');
  }
  
  if (!API_CONFIG.GEMINI_API_KEY || API_CONFIG.GEMINI_API_KEY.includes('your-')) {
    missing.push('GEMINI_API_KEY');
  }
  
  if (!API_CONFIG.GOOGLE_SHEETS_API_KEY || API_CONFIG.GOOGLE_SHEETS_API_KEY.includes('your-')) {
    missing.push('GOOGLE_SHEETS_API_KEY');
  }
  
  if (!API_CONFIG.SPREADSHEET_ID || API_CONFIG.SPREADSHEET_ID.includes('your-')) {
    missing.push('SPREADSHEET_ID');
  }
  
  if (missing.length > 0) {
    console.warn('⚠️ Missing API configuration:', missing.join(', '));
    console.warn('Please copy api.template.js to api.js and add your API keys');
    return false;
  }
  
  return true;
};
