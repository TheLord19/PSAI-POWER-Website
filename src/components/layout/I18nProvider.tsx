'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import React, { useEffect } from 'react';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Restore language preference after mount to avoid hydration mismatch
        const savedLng = localStorage.getItem('psai-lang');
        if (savedLng && savedLng !== i18n.language) {
            i18n.changeLanguage(savedLng);
        }
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}
