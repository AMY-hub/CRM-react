export const formatProductName = (name) => {
    switch (name) {
        case 'course-html':
            return 'Курс по верстке';

        case 'course-js':
            return 'Курс по JavaScript';

        case 'course-vue':
            return 'Курс по VUE JS';

        case 'course-php':
            return 'Курс по PHP';

        case 'course-wordpress':
            return 'Курс по WordPress';
    }
}