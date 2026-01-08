import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from './src/constants/colors';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>💰 Smart Expense Tracker</Text>
                <Text style={styles.subtitle}>AI-Powered Receipt Analysis</Text>

                <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>✅ Base setup complete</Text>
                    <Text style={styles.infoText}>
                        Next steps:{'\n'}
                        1. Install dependencies: npm install{'\n'}
                        2. Configure API keys in src/config/{'\n'}
                        3. Run: npx expo start
                    </Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.textSecondary,
        marginBottom: 40,
        textAlign: 'center',
    },
    statusContainer: {
        backgroundColor: COLORS.surface,
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        width: '100%',
        maxWidth: 400,
    },
    statusText: {
        fontSize: 16,
        color: COLORS.success,
        fontWeight: '600',
        marginBottom: 15,
    },
    infoText: {
        fontSize: 14,
        color: COLORS.text,
        lineHeight: 22,
    },
});
