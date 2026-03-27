/**
 * Saju (Four Pillars) Calculation Engine
 * Calculates Heavenly Stems and Earthly Branches for Year, Month, Day, and Hour pillars.
 */

/**
 * Calculate the Year Pillar (년주)
 * Based on the sexagenary cycle (60-year cycle)
 */
function getYearPillar(year) {
    const stemIdx = (year - 4) % 10;
    const branchIdx = (year - 4) % 12;
    return {
        stem: (stemIdx + 10) % 10,
        branch: (branchIdx + 12) % 12
    };
}

/**
 * Calculate the Month Pillar (월주)
 * The month stem depends on the year stem.
 * Month branches are fixed: Tiger(Feb), Rabbit(Mar), ... Ox(Jan next year)
 */
function getMonthPillar(year, month) {
    // Month branch: month 1 (Jan) = Yin(Tiger=2 is Feb in lunar),
    // Simplified: solar month to branch mapping
    // Feb=Tiger(2), Mar=Rabbit(3), Apr=Dragon(4), ... Jan=Ox(1)
    const monthBranchMap = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1]; // index 0=Jan
    const branchIdx = monthBranchMap[month - 1];

    // Month stem is derived from year stem
    // Formula: (yearStem % 5) * 2 + monthNumber adjustment
    const yearStem = getYearPillar(year).stem;
    const baseMonthStem = (yearStem % 5) * 2;
    const stemIdx = (baseMonthStem + (month - 1) + 2) % 10;

    return { stem: stemIdx, branch: branchIdx };
}

/**
 * Calculate the Day Pillar (일주)
 * Uses a simplified algorithm based on the date
 */
function getDayPillar(year, month, day) {
    // Algorithm to calculate day's sexagenary cycle number
    // Based on a known reference point
    const referenceDate = new Date(1900, 0, 1); // Jan 1, 1900 = Gapja day (stem 0, branch 0) approximately
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - referenceDate) / (1000 * 60 * 60 * 24));

    // Jan 1, 1900 corresponds to cycle day 0 (甲子)
    // Adjust: Jan 1 1900 is actually 갑자(甲子) day in the 60-day cycle
    const adjustedDays = diffDays + 0; // reference is Gapja
    const stemIdx = ((adjustedDays % 10) + 10) % 10;
    const branchIdx = ((adjustedDays % 12) + 12) % 12;

    return { stem: stemIdx, branch: branchIdx };
}

/**
 * Calculate the Hour Pillar (시주)
 * The hour stem depends on the day stem.
 */
function getHourPillar(dayStem, hourBranch) {
    if (hourBranch < 0) return null;
    // Hour stem formula based on day stem
    const baseStem = (dayStem % 5) * 2;
    const stemIdx = (baseStem + hourBranch) % 10;
    return { stem: stemIdx, branch: hourBranch };
}

/**
 * Count the Five Elements in the chart
 */
function countElements(pillars) {
    const counts = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };

    pillars.forEach(p => {
        if (p) {
            counts[STEMS[p.stem].element]++;
            counts[BRANCHES[p.branch].element]++;
        }
    });

    return counts;
}

/**
 * Determine the dominant element
 */
function getDominantElement(elementCounts) {
    let max = 0;
    let dominant = 'Earth';
    for (const [element, count] of Object.entries(elementCounts)) {
        if (count > max) {
            max = count;
            dominant = element;
        }
    }
    return dominant;
}

/**
 * Main calculation function
 */
function calculateSaju(year, month, day, hour) {
    const yearPillar = getYearPillar(year);
    const monthPillar = getMonthPillar(year, month);
    const dayPillar = getDayPillar(year, month, day);
    const hourPillar = getHourPillar(dayPillar.stem, hour);

    const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
    const elementCounts = countElements(pillars);
    const dominantElement = getDominantElement(elementCounts);

    // Zodiac animal from year branch
    const zodiacAnimal = BRANCHES[yearPillar.branch].animal;

    // Day stem determines core personality
    const dayStemIndex = dayPillar.stem;

    return {
        yearPillar,
        monthPillar,
        dayPillar,
        hourPillar,
        elementCounts,
        dominantElement,
        zodiacAnimal,
        dayStemIndex,
        year, month, day, hour
    };
}

/**
 * Display the result in the DOM
 */
function displayResult(result) {
    // Build pillars display
    const pillarsEl = document.getElementById('pillars');
    const pillarData = [
        { label: 'Hour Pillar', pillar: result.hourPillar, sublabel: '시주 (時柱)' },
        { label: 'Day Pillar', pillar: result.dayPillar, sublabel: '일주 (日柱)' },
        { label: 'Month Pillar', pillar: result.monthPillar, sublabel: '월주 (月柱)' },
        { label: 'Year Pillar', pillar: result.yearPillar, sublabel: '년주 (年柱)' }
    ];

    pillarsEl.innerHTML = pillarData.map(({ label, pillar, sublabel }) => {
        if (!pillar) {
            return `<div class="pillar" style="opacity:0.4">
                <div class="pillar-label">${label}</div>
                <div class="pillar-stem" style="color:var(--text-muted)">?</div>
                <div class="pillar-branch" style="color:var(--text-muted)">?</div>
                <div class="pillar-name">Unknown<br>${sublabel}</div>
            </div>`;
        }
        const stem = STEMS[pillar.stem];
        const branch = BRANCHES[pillar.branch];
        return `<div class="pillar">
            <div class="pillar-label">${label}</div>
            <div class="pillar-stem ${ELEMENTS[stem.element].color}">${stem.hanja}</div>
            <div class="pillar-branch ${ELEMENTS[branch.element].color}">${branch.hanja}</div>
            <div class="pillar-name">${stem.name} ${stem.element}<br>${branch.animal} (${branch.name})<br>${sublabel}</div>
        </div>`;
    }).join('');

    // Element result
    const el = ELEMENTS[result.dominantElement];
    document.getElementById('elementResult').innerHTML = `
        <p style="font-size:1.3rem; text-align:center; margin-bottom:12px;">
            <span style="font-size:2rem">${el.emoji}</span>
            <strong class="${el.color}"> ${result.dominantElement}</strong> — ${el.nature}
        </p>
        <p>${el.personality}</p>
        <p><strong class="${el.color}">Strengths:</strong> ${el.strengths}</p>
        <p><strong class="${el.color}">Challenges:</strong> ${el.challenges}</p>
    `;

    // Day stem personality
    const dayStemReading = DAY_STEM_READINGS[result.dayStemIndex];
    const dayStem = STEMS[result.dayStemIndex];
    document.getElementById('personalityResult').innerHTML = `
        <p style="margin-bottom:8px;"><em>${dayStem.hanja} ${dayStem.name} (${dayStem.yin_yang} ${dayStem.element}) — "${dayStem.desc}"</em></p>
        <p>${dayStemReading.personality}</p>
    `;

    // Career
    document.getElementById('careerResult').innerHTML = `
        <p>${dayStemReading.career}</p>
        <p style="margin-top:8px;">${el.career}</p>
    `;

    // Relationships
    document.getElementById('relationshipResult').innerHTML = `
        <p>${dayStemReading.relationship}</p>
        <p style="margin-top:8px;">${el.relationships}</p>
    `;

    // Daily fortune
    displayFortune(result.zodiacAnimal, result.dominantElement);
}
