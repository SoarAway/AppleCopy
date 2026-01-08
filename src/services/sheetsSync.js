/**
 * Google Sheets Sync Service
 * 
 * Sync expenses to Google Sheets for cloud storage
 * TODO: Implement full Google Sheets API integration
 */

import { API_CONFIG } from '../config/api.template';
import { SHEETS_CONFIG } from '../config/sheets.template';

/**
 * Append expense to Google Sheets
 */
export const syncExpenseToSheets = async (expense) => {
    try {
        const values = [
            [
                expense.date,
                expense.merchant,
                expense.category,
                expense.total,
                expense.currency,
                expense.paymentMethod || '',
                expense.taxAmount || '',
                JSON.stringify(expense.items || []),
                expense.confidence || '',
                expense.receiptImageUrl || '',
            ],
        ];

        const response = await fetch(
            `${API_CONFIG.SHEETS_API_ENDPOINT}/${SHEETS_CONFIG.spreadsheetId}/values/${SHEETS_CONFIG.appendRange}:append?valueInputOption=RAW&key=${API_CONFIG.GOOGLE_SHEETS_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    values,
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`Sheets API error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Synced to Google Sheets:', data);
        return true;
    } catch (error) {
        console.error('Error syncing to Google Sheets:', error);
        return false;
    }
};

/**
 * Batch sync multiple expenses
 */
export const batchSyncExpenses = async (expenses) => {
    try {
        const results = await Promise.all(
            expenses.map(expense => syncExpenseToSheets(expense))
        );
        return results.every(r => r === true);
    } catch (error) {
        console.error('Error batch syncing:', error);
        return false;
    }
};

/**
 * Initialize Google Sheets with headers
 */
export const initializeSheet = async () => {
    console.log('Sheet initialization - To be implemented');
    // TODO: Create headers if sheet is empty
};
