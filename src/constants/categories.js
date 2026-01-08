/**
 * Expense Categories
 * 
 * Predefined categories for automatic expense classification
 */

export const EXPENSE_CATEGORIES = [
    {
        id: 'food',
        name: 'Food & Dining',
        icon: '🍔',
        color: '#FF6B6B',
        keywords: ['restaurant', 'cafe', 'food', 'dining', 'lunch', 'dinner', 'breakfast', 'mcdonald', 'starbucks', 'pizza']
    },
    {
        id: 'transport',
        name: 'Transportation',
        icon: '🚗',
        color: '#4ECDC4',
        keywords: ['uber', 'lyft', 'taxi', 'gas', 'fuel', 'parking', 'metro', 'bus', 'train', 'grab']
    },
    {
        id: 'shopping',
        name: 'Shopping',
        icon: '🛍️',
        color: '#95E1D3',
        keywords: ['amazon', 'store', 'mall', 'shop', 'retail', 'clothing', 'fashion', 'target', 'walmart']
    },
    {
        id: 'groceries',
        name: 'Groceries',
        icon: '🛒',
        color: '#F38181',
        keywords: ['grocery', 'supermarket', 'market', 'whole foods', 'trader joe', 'safeway', 'kroger']
    },
    {
        id: 'entertainment',
        name: 'Entertainment',
        icon: '🎬',
        color: '#AA96DA',
        keywords: ['movie', 'cinema', 'theater', 'concert', 'game', 'entertainment', 'netflix', 'spotify']
    },
    {
        id: 'health',
        name: 'Health & Fitness',
        icon: '💊',
        color: '#FCBAD3',
        keywords: ['pharmacy', 'doctor', 'hospital', 'clinic', 'gym', 'fitness', 'medical', 'health']
    },
    {
        id: 'utilities',
        name: 'Utilities',
        icon: '💡',
        color: '#FFFFD2',
        keywords: ['electric', 'water', 'gas', 'internet', 'phone', 'utility', 'bill']
    },
    {
        id: 'travel',
        name: 'Travel',
        icon: '✈️',
        color: '#A8D8EA',
        keywords: ['hotel', 'flight', 'airline', 'airbnb', 'booking', 'travel', 'vacation']
    },
    {
        id: 'education',
        name: 'Education',
        icon: '📚',
        color: '#FFCFDF',
        keywords: ['school', 'university', 'course', 'book', 'education', 'tuition', 'learning']
    },
    {
        id: 'other',
        name: 'Other',
        icon: '📦',
        color: '#C7CEEA',
        keywords: []
    }
];

/**
 * Get category by ID
 */
export const getCategoryById = (id) => {
    return EXPENSE_CATEGORIES.find(cat => cat.id === id) || EXPENSE_CATEGORIES.find(cat => cat.id === 'other');
};

/**
 * Auto-categorize based on merchant name
 */
export const autoCategorize = (merchantName) => {
    if (!merchantName) return 'other';

    const lowerMerchant = merchantName.toLowerCase();

    for (const category of EXPENSE_CATEGORIES) {
        if (category.keywords.some(keyword => lowerMerchant.includes(keyword))) {
            return category.id;
        }
    }

    return 'other';
};
