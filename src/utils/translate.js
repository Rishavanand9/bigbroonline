import translate from 'google-translate-api';

const translateText = async (text, targetLanguage = "hindi") => {
    try {
        const res = await translate(text, { to: targetLanguage });
        return res.text;
    } catch (error) {
        console.error('Translation error:', error);
        return 'Translation failed';
    }
};

export default translateText;
