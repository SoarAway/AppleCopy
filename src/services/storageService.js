/**
 * Storage Service
 * 
 * Local storage using AsyncStorage for offline support
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
    EXPENSES: '@expenses',
    SETTINGS: '@settings',
    SYNC_QUEUE: '@sync_queue',
};

/**
 * Save expenses to local storage
 */
export const saveExpenses = async (expenses) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(expenses));
        return true;
    } catch (error) {
        console.error('Error saving expenses:', error);
        return false;
    }
};

/**
 * Load expenses from local storage
 */
export const loadExpenses = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEYS.EXPENSES);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error loading expenses:', error);
        return [];
    }
};

/**
 * Add expense to storage
 */
export const addExpense = async (expense) => {
    try {
        const expenses = await loadExpenses();
        expenses.unshift(expense); // Add to beginning
        await saveExpenses(expenses);
        return true;
    } catch (error) {
        console.error('Error adding expense:', error);
        return false;
    }
};

/**
 * Delete expense from storage
 */
export const deleteExpense = async (expenseId) => {
    try {
        const expenses = await loadExpenses();
        const filtered = expenses.filter(e => e.id !== expenseId);
        await saveExpenses(filtered);
        return true;
    } catch (error) {
        console.error('Error deleting expense:', error);
        return false;
    }
};

/**
 * Save settings
 */
export const saveSettings = async (settings) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
        return true;
    } catch (error) {
        console.error('Error saving settings:', error);
        return false;
    }
};

/**
 * Load settings
 */
export const loadSettings = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error('Error loading settings:', error);
        return {};
    }
};
