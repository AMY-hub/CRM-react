export const formatDateTime = (timestamp, locale, param) => {
    const date = new Date(timestamp);
    switch (param) {
        case 'date':
            return date.toLocaleDateString(locale);
        case 'time':
            return date.toLocaleTimeString(locale)
        default:
            return date.toLocaleString(locale);
    }
}