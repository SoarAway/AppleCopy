/**
 * Date Parser Utility
 * 
 * Parse and format dates from receipt text
 */

/**
 * Parse date from receipt text
 * Handles various date formats
 */
export const parseReceiptDate = (text) => {
    if (!text) return new Date();

    // Common date patterns
    const patterns = [
        // MM/DD/YYYY or MM-DD-YYYY
        /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,
        // DD/MM/YYYY or DD-MM-YYYY
        /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,
        // YYYY-MM-DD
        /(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/,
        // Month DD, YYYY
        /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (\d{1,2}),? (\d{4})/i,
    ];

    for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) {
            try {
                const date = new Date(match[0]);
                if (!isNaN(date.getTime())) {
                    return date;
                }
            } catch (error) {
                continue;
            }
        }
    }

    // Default to current date if no valid date found
    return new Date();
};

/**
 * Format date for display
 */
export const formatDate = (date, format = 'short') => {
    if (!date) return '';

    const d = typeof date === 'string' ? new Date(date) : date;

    if (format === 'short') {
        return d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    if (format === 'long') {
        return d.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    if (format === 'iso') {
        return d.toISOString().split('T')[0];
    }

    return d.toLocaleDateString();
};

/**
 * Get relative time (e.g., "2 days ago")
 */
export const getRelativeTime = (date) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diffMs = now - d;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
};
