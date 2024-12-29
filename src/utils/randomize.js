export function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function getRandomPenalties(penalties) {
    const result = penalties.filter(p => Math.random() * 100 <= p.probability);
    if (result.length > 0) {
        return result[result.length - 1].text
    } else {
        return null
    }
}
