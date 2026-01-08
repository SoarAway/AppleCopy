/**
 * Google Sheets Configuration Template
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to 'sheets.js' in the same directory
 * 2. Update with your Google Sheets details
 */

export const SHEETS_CONFIG = {
    // Your Google Spreadsheet ID (from the URL)
    spreadsheetId: 'your-spreadsheet-id-here',

    // Sheet name where expenses will be stored
    sheetName: 'Expenses',

    // Column headers for the expense sheet
    headers: [
        'Date',
        'Merchant',
        'Category',
        'Amount',
        'Currency',
        'Payment Method',
        'Tax',
        'Items',
        'Confidence',
        'Receipt Image URL'
    ],

    // Range for appending new expenses
    appendRange: 'Expenses!A:J',
};

/**
 * Validate Sheets configuration
 */
export const validateSheetsConfig = () => {
    if (!SHEETS_CONFIG.spreadsheetId || SHEETS_CONFIG.spreadsheetId.includes('your-')) {
        console.warn('⚠️ Google Sheets not configured. Copy sheets.template.js to sheets.js and add your spreadsheet ID.');
        return false;
    }

    return true;
};
