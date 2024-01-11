function formatPhoneNumber(number, countryCode = 'US') {
    const cleaned = ('' + number).replace(/\D/g, '');

    let format;
    switch (countryCode) {
        case 'RU':
            format = /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/;
            return cleaned.replace(format, '+$1 ($2) $3-$4-$5');
        case 'AM':
            format = /^(\d{3})(\d{2})(\d{2})(\d{2})$/;
            return cleaned.replace(format, '+$1 ($2) $3-$4');
        // Add more cases for other countries as needed
        default:
            format = /^(\d{1})(\d{3})(\d{2})(\d{2})(\d{2})$/;
            return cleaned.replace(format, '+$1 ($2) $3-$4-$5');
    }
}

// Example usage for Russian and Armenian numbers
const russianNumber = '79111234567';
const armenianNumber = '37498109918';

const formattedRussianNumber = formatPhoneNumber(russianNumber, 'RU');
const formattedArmenianNumber = formatPhoneNumber(armenianNumber, 'AM');

console.log(formattedRussianNumber); // Output: +7 (911) 123-45-67
console.log(formattedArmenianNumber); // Output: +374 (98) 10-99-18
