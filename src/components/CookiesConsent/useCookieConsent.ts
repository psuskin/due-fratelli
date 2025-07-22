"use client";

import { useState, useEffect } from "react";

type CookieConsent = boolean | null;

export const useCookieConsent = () => {
    const [consent, setConsent] = useState<CookieConsent>(null);

    useEffect(() => {
        // Get initial consent state from localStorage
        const storedConsent = localStorage.getItem("cookieConsent");
        if (storedConsent) {
            setConsent(storedConsent === "true");
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setConsent(true);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "false");
        setConsent(false);
    };

    return {
        consent,
        acceptCookies,
        declineCookies,
    };
}; 