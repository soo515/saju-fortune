// === Heavenly Stems (천간) ===
const STEMS = [
    { name: 'Gap', hanja: '甲', element: 'Wood', yin_yang: 'Yang', desc: 'The towering tree' },
    { name: 'Eul', hanja: '乙', element: 'Wood', yin_yang: 'Yin', desc: 'The flexible vine' },
    { name: 'Byeong', hanja: '丙', element: 'Fire', yin_yang: 'Yang', desc: 'The blazing sun' },
    { name: 'Jeong', hanja: '丁', element: 'Fire', yin_yang: 'Yin', desc: 'The candle flame' },
    { name: 'Mu', hanja: '戊', element: 'Earth', yin_yang: 'Yang', desc: 'The great mountain' },
    { name: 'Gi', hanja: '己', element: 'Earth', yin_yang: 'Yin', desc: 'The fertile soil' },
    { name: 'Gyeong', hanja: '庚', element: 'Metal', yin_yang: 'Yang', desc: 'The mighty sword' },
    { name: 'Sin', hanja: '辛', element: 'Metal', yin_yang: 'Yin', desc: 'The precious jewel' },
    { name: 'Im', hanja: '壬', element: 'Water', yin_yang: 'Yang', desc: 'The vast ocean' },
    { name: 'Gye', hanja: '癸', element: 'Water', yin_yang: 'Yin', desc: 'The gentle rain' }
];

// === Earthly Branches (지지) / 12 Zodiac ===
const BRANCHES = [
    { name: 'Ja', hanja: '子', animal: 'Rat', element: 'Water', yin_yang: 'Yang' },
    { name: 'Chuk', hanja: '丑', animal: 'Ox', element: 'Earth', yin_yang: 'Yin' },
    { name: 'In', hanja: '寅', animal: 'Tiger', element: 'Wood', yin_yang: 'Yang' },
    { name: 'Myo', hanja: '卯', animal: 'Rabbit', element: 'Wood', yin_yang: 'Yin' },
    { name: 'Jin', hanja: '辰', animal: 'Dragon', element: 'Earth', yin_yang: 'Yang' },
    { name: 'Sa', hanja: '巳', animal: 'Snake', element: 'Fire', yin_yang: 'Yin' },
    { name: 'O', hanja: '午', animal: 'Horse', element: 'Fire', yin_yang: 'Yang' },
    { name: 'Mi', hanja: '未', animal: 'Goat', element: 'Earth', yin_yang: 'Yin' },
    { name: 'Sin', hanja: '申', animal: 'Monkey', element: 'Metal', yin_yang: 'Yang' },
    { name: 'Yu', hanja: '酉', animal: 'Rooster', element: 'Metal', yin_yang: 'Yin' },
    { name: 'Sul', hanja: '戌', animal: 'Dog', element: 'Earth', yin_yang: 'Yang' },
    { name: 'Hae', hanja: '亥', animal: 'Pig', element: 'Water', yin_yang: 'Yin' }
];

// === Five Elements (오행) descriptions ===
const ELEMENTS = {
    Wood: {
        emoji: '🌳',
        color: 'element-wood',
        nature: 'Growth & Creativity',
        personality: 'You are a natural innovator with a strong drive for growth. Like a tree reaching for the sky, you constantly seek new horizons and creative expression. You possess great compassion and a desire to nurture those around you.',
        strengths: 'Creativity, compassion, flexibility, vision, and generosity.',
        challenges: 'Can be indecisive, overly idealistic, or spread too thin across many interests.',
        career: 'Your creative and nurturing nature suits roles in education, counseling, arts, writing, environmental work, or entrepreneurship. You thrive when you can grow and help others grow.',
        relationships: 'In love, you are warm and caring. You seek a partner who appreciates your depth and supports your many passions. You give generously but should remember to also receive.'
    },
    Fire: {
        emoji: '🔥',
        color: 'element-fire',
        nature: 'Passion & Transformation',
        personality: 'You radiate warmth and enthusiasm that draws people to you. Your passionate spirit and charisma make you a natural leader. You have an innate ability to inspire and transform the energy around you.',
        strengths: 'Charisma, passion, courage, warmth, and decisiveness.',
        challenges: 'Can be impulsive, impatient, or burn out from overextending your energy.',
        career: 'You excel in leadership, entertainment, marketing, public speaking, or any field where your fiery energy can shine. You are at your best when motivating and leading others.',
        relationships: 'You love intensely and bring excitement to relationships. You need a partner who can match your energy without being overwhelmed. Your warmth creates a vibrant, passionate bond.'
    },
    Earth: {
        emoji: '⛰️',
        color: 'element-earth',
        nature: 'Stability & Nourishment',
        personality: 'You are the steady ground others rely upon. Your practical wisdom and dependable nature make you a cornerstone in any group. You have a remarkable ability to create harmony and provide comfort.',
        strengths: 'Reliability, patience, practicality, loyalty, and wisdom.',
        challenges: 'Can be stubborn, overly cautious, or resistant to change.',
        career: 'Your grounded nature excels in management, real estate, agriculture, healthcare, finance, or any role requiring steady, reliable leadership. You build things that last.',
        relationships: 'You offer deep loyalty and unwavering support. You seek stability and comfort in relationships. Your partner will always feel secure with you, though you should embrace occasional spontaneity.'
    },
    Metal: {
        emoji: '⚔️',
        color: 'element-metal',
        nature: 'Precision & Righteousness',
        personality: 'You possess a sharp mind and a strong sense of justice. Like refined metal, you are both beautiful and strong. Your disciplined nature and high standards drive you toward excellence in everything you do.',
        strengths: 'Discipline, integrity, precision, determination, and analytical thinking.',
        challenges: 'Can be rigid, overly critical, or have difficulty expressing emotions.',
        career: 'Your precise and principled nature suits law, engineering, technology, finance, surgery, or any field demanding accuracy and strong ethics. You set standards others aspire to.',
        relationships: 'You are deeply loyal and show love through actions rather than words. You need a partner who understands your reserved nature and appreciates your quiet devotion and unwavering commitment.'
    },
    Water: {
        emoji: '🌊',
        color: 'element-water',
        nature: 'Wisdom & Adaptability',
        personality: 'Like water, you are incredibly adaptable and possess deep wisdom. Your intuitive nature allows you to navigate any situation with grace. You have a philosophical mind and see truths others miss.',
        strengths: 'Intuition, adaptability, wisdom, diplomacy, and resourcefulness.',
        challenges: 'Can be overly fearful, secretive, or emotionally unpredictable.',
        career: 'Your fluid wisdom excels in research, psychology, philosophy, diplomacy, travel, writing, or the healing arts. You thrive in environments that value depth and insight.',
        relationships: 'You connect on a deep emotional level and seek meaningful bonds. You need a partner who values emotional depth and intellectual connection. Your love flows deep and steady.'
    }
};

// === Day Stem (일간) personality interpretations ===
const DAY_STEM_READINGS = {
    0: { // Gap - Yang Wood
        personality: 'You are like a tall, majestic tree — standing firm with natural leadership and a pioneering spirit. You have strong ambitions and the determination to achieve great things. Your uprightness inspires confidence in others.',
        career: 'Born to lead and initiate. You excel as an entrepreneur, executive, or in any role where you can forge new paths. Your visionary nature makes you excellent at launching projects and inspiring teams.',
        relationship: 'In relationships, you are protective and generous. You seek a partner who respects your independence while sharing your grand vision for life.'
    },
    1: { // Eul - Yin Wood
        personality: 'You are like a graceful vine — flexible, adaptable, and surprisingly resilient. Your gentle exterior hides a persistent nature that finds a way through any obstacle. You excel at diplomacy and connecting people.',
        career: 'Your adaptable nature thrives in creative fields, counseling, design, or any career requiring interpersonal finesse. You bloom in collaborative environments.',
        relationship: 'You are a devoted and attentive partner who adapts to create harmony. You need someone who appreciates your gentle strength and artistic soul.'
    },
    2: { // Byeong - Yang Fire
        personality: 'You are the sun itself — bright, warm, and impossible to ignore. Your generous spirit and radiant personality light up every room. You have a gift for seeing the best in people and situations.',
        career: 'Your magnetic presence suits entertainment, teaching, marketing, or leadership. Anywhere you can share your warmth and vision, you will thrive.',
        relationship: 'You love openly and generously. You seek a relationship filled with joy and warmth, and you give your whole heart to the one you love.'
    },
    3: { // Jeong - Yin Fire
        personality: 'You are a candle flame — focused, illuminating, and intimate. Your keen observation and analytical mind reveal hidden truths. You possess a quiet intensity and depth that others find captivating.',
        career: 'Your focused brilliance excels in research, analysis, writing, craftsmanship, or detective work. You master whatever subject captures your attention.',
        relationship: 'You love deeply and with great attention to detail. You remember everything about those you care for, creating bonds of remarkable intimacy.'
    },
    4: { // Mu - Yang Earth
        personality: 'You are a great mountain — solid, reliable, and commanding respect through your mere presence. Your grounded wisdom and generous nature make you a natural center of any community.',
        career: 'Your dependable leadership excels in management, real estate, agriculture, or large-scale project management. You build empires that stand the test of time.',
        relationship: 'You are a rock for your loved ones. Your stability and generosity create a home that feels like a fortress of warmth and security.'
    },
    5: { // Gi - Yin Earth
        personality: 'You are fertile soil — nurturing, productive, and essential to all growth around you. Your thoughtful nature and practical wisdom help ideas take root and flourish.',
        career: 'Your nurturing practicality suits education, healthcare, agriculture, cooking, or human resources. You help people and projects reach their full potential.',
        relationship: 'You express love through care and practical support. Your partner will always feel nourished and supported by your thoughtful, attentive nature.'
    },
    6: { // Gyeong - Yang Metal
        personality: 'You are a mighty sword — decisive, principled, and uncompromising in your values. Your strong sense of justice and direct approach commands respect. You cut through confusion with clarity.',
        career: 'Your decisive strength excels in law, military, surgery, engineering, or executive leadership. You are at your best when making tough calls with integrity.',
        relationship: 'You are fiercely loyal and protective. You may not use many words, but your actions speak of deep devotion and unwavering commitment.'
    },
    7: { // Sin - Yin Metal
        personality: 'You are a precious gemstone — refined, elegant, and possessing hidden depths of beauty. Your sensitivity and aesthetic sense reveal beauty in everything. You have impeccable taste and high standards.',
        career: 'Your refined sensibility excels in the arts, fashion, jewelry, beauty, consulting, or any field where quality and aesthetics matter.',
        relationship: 'You love with elegance and depth. You seek a partner who matches your refinement and can appreciate the subtle ways you express your deep affection.'
    },
    8: { // Im - Yang Water
        personality: 'You are the vast ocean — boundless in wisdom, powerful in emotion, and endlessly deep. Your adventurous spirit and philosophical mind seek to understand the great mysteries of life.',
        career: 'Your expansive vision excels in international business, travel, philosophy, oceanography, or any field that lets you explore the world and its depths.',
        relationship: 'You love with oceanic depth and seek a grand, meaningful connection. You need a partner who is not afraid of emotional depth and shares your thirst for adventure.'
    },
    9: { // Gye - Yin Water
        personality: 'You are gentle rain — nourishing, perceptive, and quietly powerful. Your intuitive wisdom and gentle nature help things grow in subtle but profound ways. You see what others miss.',
        career: 'Your perceptive nature excels in psychology, writing, music, spiritual counseling, or research. You bring insight and healing wherever you go.',
        relationship: 'You love quietly but profoundly. Your emotional intelligence creates deeply meaningful connections with those fortunate enough to earn your trust.'
    }
};

// === Today's Fortune messages by zodiac ===
const FORTUNE_MESSAGES = {
    Rat: [
        "Your sharp instincts are especially strong today. Trust your gut feeling on important decisions — it won't lead you astray.",
        "A surprising opportunity may knock at your door. Your quick thinking will help you seize it before others even notice.",
        "Social connections bring good fortune today. An old friend might reach out with interesting news or a beneficial proposal.",
        "Your resourcefulness shines bright. A problem that's been nagging you suddenly reveals its elegant solution.",
        "Financial intuition is heightened. This is a good day for planning investments or negotiating deals.",
        "Creative ideas flow freely today. Write them down — one of them could be the seed of something remarkable.",
        "A moment of quiet reflection reveals an important truth. Sometimes the greatest wisdom comes in whispers."
    ],
    Ox: [
        "Your steady persistence pays off today. The seeds you've planted through hard work are ready to bloom.",
        "A chance to demonstrate your reliability earns lasting respect. Others will remember your strength today.",
        "Patience is your greatest asset right now. What seems slow is actually building something magnificent.",
        "Home and family bring unexpected joy. The comfort you provide to others returns to you tenfold.",
        "Your practical wisdom solves a complex problem. Trust your experience — you know more than you think.",
        "A small act of kindness creates a ripple of good fortune. What you give comes back multiplied.",
        "Physical activity energizes your spirit. A walk in nature or exercise session clears your mind beautifully."
    ],
    Tiger: [
        "Your natural courage inspires others to take bold steps. Lead the way — people are watching and following.",
        "An adventure calls to you today. Whether physical or mental, embrace the thrill of something new.",
        "Your passionate energy attracts allies and opportunities. Channel this fire toward your biggest dream.",
        "A competition or challenge brings out your best qualities. You perform brilliantly under pressure.",
        "Creative expression heals and empowers you today. Paint, write, dance, or simply speak your truth boldly.",
        "Your protective instincts are needed. Someone close to you benefits from your strength and courage.",
        "The universe rewards your bravery. A risk you've been considering may be worth taking today."
    ],
    Rabbit: [
        "Your gentle diplomacy resolves a tense situation. Peace follows wherever your graceful influence reaches.",
        "Beauty and art nourish your soul today. Visit a gallery, listen to music, or create something lovely.",
        "A romantic or deeply personal connection deepens. Your natural charm opens hearts effortlessly.",
        "Good taste guides an important choice. Trust your aesthetic instincts — they are impeccable today.",
        "Quiet moments hold profound insights. Meditation or solitary reflection reveals your next best step.",
        "Your kindness attracts an unexpected gift — perhaps a compliment, a favor, or a lucky break.",
        "Harmony in your environment creates harmony in your mind. A small improvement to your space changes everything."
    ],
    Dragon: [
        "Your magnificent energy is at its peak. Dream big and act boldly — the cosmos supports your ambitions today.",
        "A leadership opportunity emerges. Your natural authority and vision are exactly what the moment requires.",
        "Creative power surges through you. Whatever you create today carries a special, almost magical quality.",
        "Recognition or praise comes your way. Your unique talents are finally being seen and appreciated.",
        "An ambitious project takes a leap forward. Your determination moves mountains today.",
        "Your charisma opens doors that seemed permanently closed. A powerful connection forms naturally.",
        "Innovation strikes like lightning. An original idea could change your trajectory in exciting ways."
    ],
    Snake: [
        "Your deep intuition reveals hidden truths. Pay attention to subtle signs — they carry important messages.",
        "Wisdom from quiet observation gives you a powerful advantage. You see what others overlook.",
        "A transformative insight changes your perspective. Embrace this shedding of old ideas — renewal follows.",
        "Financial or strategic planning is especially favored. Your analytical mind is razor-sharp today.",
        "Mystery and allure work in your favor. Others are drawn to your enigmatic depth.",
        "A secret or hidden information comes to light, working in your advantage. Knowledge is power.",
        "Healing energy surrounds you. Whether physical or emotional, regeneration happens naturally today."
    ],
    Horse: [
        "Freedom and movement energize your spirit. Travel, exercise, or simply a change of scenery works wonders.",
        "Your enthusiasm is contagious. People rally around your positive energy and forward momentum.",
        "A spontaneous decision leads to a delightful surprise. Sometimes the unplanned path is the best one.",
        "Social gatherings bring joy and opportunity. Your vibrant personality makes you the star of any group.",
        "Speed works in your favor today. Quick decisions lead to better outcomes than overthinking.",
        "Your optimism transforms a challenging situation. Where others see obstacles, you see exciting possibilities.",
        "Physical achievements bring deep satisfaction. Push your boundaries — you're capable of more than you know."
    ],
    Goat: [
        "Your artistic sensitivity creates something beautiful today. Let your imagination roam freely.",
        "Compassion is your superpower. A kind gesture you make today echoes far beyond what you can see.",
        "Peace and tranquility surround you. This calm energy helps you make wise, unhurried decisions.",
        "A creative collaboration brings wonderful results. Your complementary skills create magic with the right partner.",
        "Nature heals and inspires you today. Spend time outdoors to recharge your gentle spirit.",
        "Domestic happiness blooms. A cozy gathering or home improvement brings deep satisfaction.",
        "Your gentle wisdom is sought by others. The advice you give today could change someone's life."
    ],
    Monkey: [
        "Your brilliant mind finds clever solutions that amaze everyone. Complexity is your playground.",
        "Humor and wit open doors that force cannot. A well-timed joke or clever remark changes the game.",
        "Learning something new brings unexpected benefits. Your quick mind absorbs knowledge like a sponge.",
        "Adaptability is your greatest strength today. When plans change, you don't just survive — you thrive.",
        "A playful approach to a serious problem yields the best results. Don't forget to have fun with challenges.",
        "Networking brings golden opportunities. Your charming personality attracts valuable connections.",
        "Innovation and invention are strongly favored. Tinker, experiment, and let your curiosity lead the way."
    ],
    Rooster: [
        "Your attention to detail catches something everyone else missed. Precision saves the day.",
        "Honesty and directness earn deep respect. Speaking truth with confidence is your gift today.",
        "Organization brings clarity. Tidying your space or schedule creates room for wonderful things.",
        "Your hard work ethic inspires others. The effort you put in today builds tomorrow's success.",
        "A style or appearance change boosts your confidence. You look as sharp as your mind today.",
        "Early action brings the best rewards. The early bird wisdom applies perfectly to your situation.",
        "Your analytical skills solve a puzzle that's been bothering you. The answer was there all along."
    ],
    Dog: [
        "Your loyalty is deeply appreciated today. Someone close to you recognizes your unwavering devotion.",
        "Justice and fairness guide you to the right decision. Trust your moral compass — it's perfectly calibrated.",
        "A friend needs your honest counsel. Your straightforward wisdom is exactly what they need to hear.",
        "Protective instincts serve you well. Standing up for what's right brings admiration and gratitude.",
        "Simple pleasures bring the greatest joy. A walk, a good meal, or quality time with loved ones fills your heart.",
        "Your reliability creates an opportunity. Being someone others can count on opens an important door.",
        "Community involvement brings fulfillment. Volunteering or helping neighbors creates beautiful connections."
    ],
    Pig: [
        "Generosity multiplies your blessings today. What you share comes back to you in abundance.",
        "Your optimistic nature attracts wonderful people and opportunities. Good vibes bring good luck.",
        "Indulge in life's pleasures without guilt. A fine meal, a beautiful experience — you deserve it.",
        "Your honest, sincere nature wins someone's trust and loyalty. Authenticity is your greatest charm.",
        "Financial fortune favors you. An unexpected gain or a smart purchase brings satisfaction.",
        "Your easygoing nature resolves tension. Being the peacemaker creates harmony that benefits everyone.",
        "Enjoyment and relaxation recharge your powerful spirit. Rest today, conquer tomorrow."
    ]
};

// === Fortune categories (daily aspects) ===
const FORTUNE_ASPECTS = {
    love: [
        "Romance is in the air. Open your heart to unexpected connections and tender moments.",
        "A meaningful conversation deepens an important bond. Words spoken today carry extra weight.",
        "Self-love is the foundation today. Treat yourself with the kindness you give to others.",
        "An old memory brings a smile. Past connections may influence present happiness.",
        "Emotional honesty strengthens your relationships. Vulnerability is courage, not weakness.",
        "A gesture of affection — given or received — brightens the entire day.",
        "Patience in love brings rewards. The best connections grow slowly and steadily."
    ],
    wealth: [
        "Financial awareness is heightened. Review your resources with fresh eyes.",
        "A small saving today leads to greater abundance tomorrow. Discipline pays off.",
        "An unexpected opportunity to improve your finances appears. Stay alert.",
        "Generosity and wealth are not opposites. Sharing wisely increases your prosperity.",
        "Practical decisions about money serve you better than emotional ones today.",
        "Your skills and talents are valuable. Don't underestimate what you bring to the table.",
        "Long-term thinking over short-term gain. Plant seeds for future harvest."
    ],
    health: [
        "Your body is asking for attention. Listen to its whispers before they become shouts.",
        "Movement and fresh air are the best medicine today. Step outside and breathe deeply.",
        "Rest is not laziness — it's wisdom. Allow yourself to recharge fully.",
        "A healthy meal prepared with love nourishes both body and soul.",
        "Mental health matters as much as physical. Take time for mindful reflection.",
        "Your energy levels are strong. Channel this vitality into something meaningful.",
        "Balance is key. Neither excess nor deprivation — find your harmonious middle path."
    ],
    luck: [
        "Lucky number: The stars suggest numbers connected to your element bring fortune.",
        "Lucky direction: East brings opportunities. Face this direction for important decisions.",
        "Lucky color: Wear or surround yourself with your element's color for extra fortune.",
        "Timing favors the afternoon. Important actions yield better results after midday.",
        "A serendipitous encounter could change your perspective. Stay open to strangers' wisdom.",
        "The universe sends small signs today. Watch for repeating numbers or unexpected symbols.",
        "Fortune favors the prepared. Your readiness meets opportunity at the perfect moment."
    ]
};
