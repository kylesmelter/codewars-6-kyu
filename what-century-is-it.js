// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year)
{
    let century = Number(year)
    let centuryString = Math.ceil(century / 100).toString();
    let centuryStringFirst = centuryString.slice(0, 1);
    let centuryStringLast = centuryString[centuryString.length - 1];
    
    if(centuryString.length === 1 && centuryString === '1') {
        return centuryString + 'st';
    } else if (centuryStringFirst === '1' && centuryStringLast === '0' || centuryStringFirst === '1' && centuryStringLast === '1' || centuryStringFirst === '1' && centuryStringLast === '2' || centuryStringFirst === '1' && centuryStringLast === '3' || centuryStringFirst === '1' && centuryStringLast === '4' || centuryStringFirst === '1' && centuryStringLast === '5' || centuryStringFirst === '1' && centuryStringLast === '6' || centuryStringFirst === '1' && centuryStringLast === '7' || centuryStringFirst === '1' && centuryStringLast === '8' || centuryStringFirst === '1' && centuryStringLast === '9') {
        return centuryString + 'th';
    } else if(centuryStringFirst !== '1' && centuryStringLast === '1') {
        return centuryString + 'st';
    } else if(centuryStringFirst !== '1' && centuryStringLast === '2') {
        return centuryString + 'nd';
    } else if(centuryStringFirst !== '1' && centuryStringLast === '3') {
        return centuryString + 'rd';
    } else {
        return centuryString + 'th';
    };
};