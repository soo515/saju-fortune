/**
 * Daily Fortune Generator
 * Uses date-based seeding to produce consistent daily fortunes
 */

/**
 * Simple seeded pseudo-random number generator
 */
function seededRandom(seed) {
    let s = seed;
    return function () {
        s = (s * 1103515245 + 12345) & 0x7fffffff;
        return s / 0x7fffffff;
    };
}

/**
 * Get a date-based seed (changes daily)
 */
function getDailySeed() {
    const now = new Date();
    return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

/**
 * Pick an item from array using seeded random
 */
function seededPick(arr, rng) {
    return arr[Math.floor(rng() * arr.length)];
}

/**
 * Display fortune for the given zodiac animal
 */
function displayFortune(zodiacAnimal, dominantElement) {
    const seed = getDailySeed();
    // Add zodiac-specific offset so each animal gets a different fortune
    const animalIndex = BRANCHES.findIndex(b => b.animal === zodiacAnimal);
    const rng = seededRandom(seed + animalIndex * 137);

    // Main fortune message
    const messages = FORTUNE_MESSAGES[zodiacAnimal];
    const mainFortune = seededPick(messages, rng);

    // Fortune aspects
    const loveFortune = seededPick(FORTUNE_ASPECTS.love, rng);
    const wealthFortune = seededPick(FORTUNE_ASPECTS.wealth, rng);
    const healthFortune = seededPick(FORTUNE_ASPECTS.health, rng);
    const luckFortune = seededPick(FORTUNE_ASPECTS.luck, rng);

    // Lucky number based on element and date
    const luckyNumbers = [];
    const numRng = seededRandom(seed + animalIndex * 53);
    for (let i = 0; i < 3; i++) {
        luckyNumbers.push(Math.floor(numRng() * 45) + 1);
    }

    // Element colors
    const elementColors = {
        Wood: '#4a9e5c',
        Fire: '#e04040',
        Earth: '#c49a30',
        Metal: '#c0c0c0',
        Water: '#3a7abf'
    };
    const luckyColor = elementColors[dominantElement] || '#d4af37';

    // Zodiac info
    document.getElementById('zodiacInfo').innerHTML = `
        <span class="zodiac-badge">Year of the ${zodiacAnimal} ${getAnimalEmoji(zodiacAnimal)}</span>
    `;

    // Fortune result
    document.getElementById('fortuneResult').innerHTML = `
        <p style="font-size:1.05rem; margin-bottom:18px; text-align:center; font-style:italic;">"${mainFortune}"</p>
        <div class="fortune-category">
            <strong>&#10084; Love &amp; Relationships</strong>
            <p>${loveFortune}</p>
        </div>
        <div class="fortune-category">
            <strong>&#128176; Wealth &amp; Career</strong>
            <p>${wealthFortune}</p>
        </div>
        <div class="fortune-category">
            <strong>&#127807; Health &amp; Wellbeing</strong>
            <p>${healthFortune}</p>
        </div>
        <div class="fortune-category">
            <strong>&#9733; Luck &amp; Guidance</strong>
            <p>${luckFortune}</p>
        </div>
        <div style="text-align:center; margin-top:20px; padding-top:16px; border-top:1px solid rgba(212,175,55,0.2);">
            <p style="color:var(--gold);">Lucky Numbers: <strong>${luckyNumbers.join(', ')}</strong></p>
            <p style="color:var(--gold); margin-top:6px;">Lucky Color: <span style="display:inline-block;width:14px;height:14px;background:${luckyColor};border-radius:50%;vertical-align:middle;margin-right:4px;"></span> ${dominantElement}</p>
        </div>
    `;
}

/**
 * Get emoji for zodiac animal
 */
function getAnimalEmoji(animal) {
    const emojis = {
        Rat: '🐀', Ox: '🐂', Tiger: '🐅', Rabbit: '🐇',
        Dragon: '🐉', Snake: '🐍', Horse: '🐎', Goat: '🐐',
        Monkey: '🐒', Rooster: '🐓', Dog: '🐕', Pig: '🐖'
    };
    return emojis[animal] || '';
}
