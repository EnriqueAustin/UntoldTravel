export const getCorrectRating = rating => 
    Math.floor(rating >= 2 ? rating / 2 : rating);

export const getFractionDigitsRating = rating => rating.toFixed(1);

