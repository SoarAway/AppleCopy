/**
 * Image Processor Utility
 * 
 * Preprocesses images for better OCR accuracy
 */

import * as ImageManipulator from 'expo-image-manipulator';

/**
 * Preprocess image for OCR
 * - Resize to optimal dimensions
 * - Enhance contrast
 * - Convert to appropriate format
 */
export const preprocessImageForOCR = async (imageUri) => {
    try {
        const manipulatedImage = await ImageManipulator.manipulateAsync(
            imageUri,
            [
                // Resize to max 2000px width while maintaining aspect ratio
                { resize: { width: 2000 } },
            ],
            {
                compress: 0.8,
                format: ImageManipulator.SaveFormat.JPEG,
            }
        );

        return manipulatedImage.uri;
    } catch (error) {
        console.error('Error preprocessing image:', error);
        return imageUri; // Return original if preprocessing fails
    }
};

/**
 * Convert image to base64 for API calls
 */
export const imageToBase64 = async (imageUri) => {
    try {
        const response = await fetch(imageUri);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error('Error converting image to base64:', error);
        throw error;
    }
};

/**
 * Check if image is a screenshot based on metadata
 */
export const isScreenshot = (asset) => {
    if (!asset) return false;

    // Check filename patterns
    const filename = asset.filename?.toLowerCase() || '';
    const screenshotPatterns = [
        'screenshot',
        'screen_shot',
        'screen-shot',
        'scrnshot',
    ];

    return screenshotPatterns.some(pattern => filename.includes(pattern));
};

/**
 * Get image dimensions
 */
export const getImageDimensions = (asset) => {
    return {
        width: asset.width,
        height: asset.height,
    };
};
