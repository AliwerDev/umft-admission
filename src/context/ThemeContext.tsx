'use client';

import type React from 'react';
import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { ConfigProvider } from 'antd';

// Define theme types
type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [isInitialized, setIsInitialized] = useState(false);
    const isDark = useMemo(() => theme === 'dark', [theme]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const initialTheme = savedTheme || 'light';

        setTheme(initialTheme);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('theme', theme);
            if (isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [theme, isDark, isInitialized]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: isDark ? '#00A859' : '#16833E', // Asosiy yashil rang
                        colorBgBase: isDark ? '#141414' : '#ffffff', // Orqa fon rangi
                        colorText: isDark ? '#ffffff' : '#1A1A1A', // Matn rangi
                        colorBorder: isDark ? '#2F2F2F' : '#D0D0D0', // Border rangi
                        colorBgContainer: isDark ? 'color-mix(in oklab, #ffffff 3%, transparent)' : '#ffffff', // Container foni (yashilga yaqin)
                        colorTextSecondary: isDark ? '#A0A0A0' : '#4D4D4D', // Ikkinchi darajali matn
                        colorIcon: isDark ? '#ffffff' : '#1A1A1A',
                        colorTextDisabled: isDark ? '#A0A0A0' : '#4D4D4D',
                        colorTextPlaceholder: isDark ? '#A0A0A0' : '#4D4D4D',
                    },
                    components: {
                        Table: {
                            rowHoverBg: isDark ? 'color-mix(in oklab, #ffffff 3%, transparent)' : '#ffffff', // Table background color
                            borderRadius: 2,
                            borderColor: isDark ? 'color-mix(in oklab, #ffffff 5%, transparent)' : '#e4e7ec',
                        },
                        Input: {
                            colorText: isDark ? '#ffffff' : '#1A1A1A',
                            colorBgContainer: isDark ? 'color-mix(in oklab, #ffffff 3%, transparent)' : '#ffffff',
                            colorBgBase: isDark ? '#1d2939' : '#ffffff',
                            colorIcon: isDark ? '#ffffff' : '#1A1A1A',
                        },

                        Modal: {
                            colorBgElevated: isDark ? '#1d2939' : '#ffffff', // Container foni (yashilga yaqin)
                            colorTextSecondary: isDark ? '#A0A0A0' : '#4D4D4D', // Ikkinchi darajali matn
                        },
                    },
                    // algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                }}
            >
                <style jsx global>{`
                    .ant-empty {
                        color: ${isDark ? '#A0A0A0' : '#4D4D4D'} !important;
                    }

                    .ant-empty .ant-empty-image {
                        filter: ${isDark ? 'invert(0.7)' : 'none'} !important;
                    }

                    .ant-empty .ant-empty-description {
                        color: ${isDark ? '#A0A0A0' : '#B0B0B0'} !important;
                    }
                `}</style>

                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
