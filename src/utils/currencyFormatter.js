/**
 * Currency Formatter Utility
 * 
 * Format currency values for display
 */

/**
 * Format amount as currency
 */
export const formatCurrency = (amount, currency = 'MYR', locale = 'en-US') => {
    if (amount === null || amount === undefined) return 'RM0.00';

    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    } catch (error) {
        // Fallback formatting
        return `$${parseFloat(amount).toFixed(2)}`;
    }
};

/**
 * Parse currency amount from text
 */
export const parseCurrencyAmount = (text) => {
    if (!text) return 0;

    // Remove currency symbols and commas
    const cleaned = text.replace(/[$€£¥,]/g, '').trim();

    // Extract number
    const match = cleaned.match(/\d+\.?\d*/);
    if (match) {
        return parseFloat(match[0]);
    }

    return 0;
};

/**
 * Detect currency from text
 */
export const detectCurrency = (text) => {
    if (!text) return 'MYR';

    const currencySymbols = {
        'RM': 'MYR',
    };

    for (const [symbol, code] of Object.entries(currencySymbols)) {
        if (text.includes(symbol)) {
            return code;
        }
    }

    return 'USD'; // Default
};

/**
 * Format large numbers with abbreviations (e.g., 1.2K, 3.5M)
 */
export const formatCompactCurrency = (amount, currency = 'MYR') => {
    if (amount === null || amount === undefined) return 'RM0';

    const absAmount = Math.abs(amount);

    if (absAmount >= 1000000) {
        return `${formatCurrency(amount / 1000000, currency).replace(/\.00$/, '')}M`;
    }

    if (absAmount >= 1000) {
        return `${formatCurrency(amount / 1000, currency).replace(/\.00$/, '')}K`;
    }

    return formatCurrency(amount, currency);
};
