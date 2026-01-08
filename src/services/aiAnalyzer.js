/**
 * AI Analyzer Service
 * 
 * Analyze receipt text using Google Gemini AI
 * TODO: Implement full Gemini AI integration
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_CONFIG } from '../config/api.template';
import { autoCategorize } from '../constants/categories';

/**
 * Analyze receipt text and extract structured data
 */
export const analyzeReceiptText = async (receiptText) => {
    try {
        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(API_CONFIG.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: API_CONFIG.GEMINI_MODEL });

        // Create prompt for expense extraction
        const prompt = `
Analyze this receipt text and extract the following information in JSON format:
- merchant: The store or merchant name
- date: Transaction date in YYYY-MM-DD format
- total: Total amount (number only)
- currency: Currency code (e.g., USD, EUR)
- items: Array of items with name, price, and quantity
- paymentMethod: Payment method if mentioned (Cash/Card/Digital)
- taxAmount: Tax amount if mentioned (number only)

Receipt text:
${receiptText}

Return ONLY valid JSON, no additional text.
`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse JSON response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);

            // Auto-categorize if not provided
            const category = autoCategorize(parsed.merchant);

            return {
                ...parsed,
                category,
                confidence: 0.85, // Placeholder confidence score
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
            };
        }

        throw new Error('Failed to parse AI response');
    } catch (error) {
        console.error('Error analyzing receipt:', error);
        throw error;
    }
};

/**
 * Generate spending insights using AI
 * TODO: Implement insights generation
 */
export const generateSpendingInsights = async (expenses) => {
    console.log('AI insights - To be implemented');
    return [];
};
