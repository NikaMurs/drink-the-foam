export function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function getRandomPenalties(penalties) {
    return penalties.filter(p => Math.random() * 100 <= p.probability);
}
