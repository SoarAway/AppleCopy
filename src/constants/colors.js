/**
 * Color Palette
 * 
 * Consistent color scheme for the app
 */

export const COLORS = {
    // Primary colors
    primary: '#6C63FF',
    primaryDark: '#5548E0',
    primaryLight: '#8B84FF',

    // Secondary colors
    secondary: '#FF6B9D',
    secondaryDark: '#E05588',
    secondaryLight: '#FF8CB3',

    // Neutral colors
    background: '#F8F9FA',
    surface: '#FFFFFF',
    surfaceDark: '#1A1A2E',

    // Text colors
    text: '#2D3436',
    textSecondary: '#636E72',
    textLight: '#B2BEC3',
    textInverse: '#FFFFFF',

    // Status colors
    success: '#00B894',
    warning: '#FDCB6E',
    error: '#D63031',
    info: '#74B9FF',

    // Chart colors
    chart: [
        '#FF6B6B',
        '#4ECDC4',
        '#95E1D3',
        '#F38181',
        '#AA96DA',
        '#FCBAD3',
        '#FFFFD2',
        '#A8D8EA',
        '#FFCFDF',
        '#C7CEEA'
    ],

    // Utility colors
    border: '#DFE6E9',
    shadow: 'rgba(0, 0, 0, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.5)',

    // Gradient backgrounds
    gradients: {
        primary: ['#6C63FF', '#8B84FF'],
        success: ['#00B894', '#55EFC4'],
        warm: ['#FF6B9D', '#FDCB6E'],
        cool: ['#74B9FF', '#A29BFE'],
    }
};

/**
 * Dark mode colors
 */
export const DARK_COLORS = {
    ...COLORS,
    background: '#0F0F1E',
    surface: '#1A1A2E',
    text: '#FFFFFF',
    textSecondary: '#B2BEC3',
    border: '#2D3436',
};
