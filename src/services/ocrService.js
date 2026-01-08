/**
 * OCR Service
 * 
 * Extract text from receipt images using Google Cloud Vision API
 * TODO: Implement full OCR integration
 */

import { API_CONFIG } from '../config/api.template';
import { preprocessImageForOCR, imageToBase64 } from '../utils/imageProcessor';

/**
 * Extract text from image using Google Cloud Vision API
 */
export const extractTextFromImage = async (imageUri) => {
    try {
        // Preprocess image
        const processedUri = await preprocessImageForOCR(imageUri);

        // Convert to base64
        const base64Image = await imageToBase64(processedUri);

        // Call Google Cloud Vision API
        const response = await fetch(
            `${API_CONFIG.VISION_API_ENDPOINT}?key=${API_CONFIG.GOOGLE_VISION_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    requests: [
                        {
                            image: {
                                content: base64Image,
                            },
                            features: [
                                {
                                    type: 'TEXT_DETECTION',
                                    maxResults: 1,
                                },
                            ],
                        },
                    ],
                }),
            }
        );

        const data = await response.json();

        if (data.responses && data.responses[0].textAnnotations) {
            const fullText = data.responses[0].textAnnotations[0].description;
            return fullText;
        }

        return '';
    } catch (error) {
        console.error('Error extracting text from image:', error);
        throw error;
    }
};

/**
 * Fallback OCR using Tesseract.js (for offline mode)
 * TODO: Implement Tesseract.js integration
 */
export const extractTextOffline = async (imageUri) => {
    console.log('Offline OCR - To be implemented with Tesseract.js');
    return '';
};
