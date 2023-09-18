const paragraphs = [
    "The sun peeked over the horizon, painting the sky with shades of orange and pink. Birds chirped merrily, greeting the new day. A sense of hope filled the air as the world woke up to embrace the warmth and opportunities of a fresh start. It was a moment of promise, a chance to leave yesterday's troubles behind and step into the untrodden paths of today. The day held infinite potential, like a blank canvas waiting for the artist's first stroke. People stirred from their slumber, ready to pen their own stories in the book of life. The world seemed to hold its breath, ready to exhale a symphony of life. In that quiet moment, one could almost hear the whispered secrets of the universe, carried on the gentle breeze. It was a reminder that each day was a gift, a treasure waiting to be unwrapped and explored. And as the sun climbed higher, the world came alive, buzzing with the melody of existence.",

    "In the heart of the bustling city, an old bookstore stood, its shelves filled with stories of forgotten worlds and adventures. The scent of aged paper hung in the air, a nostalgic perfume that transported visitors to literary realms of the past. The creaking wooden floors whispered tales of countless book lovers who had wandered through its aisles. The walls adorned with vintage posters and framed quotes seemed to breathe the wisdom of ages. Each book was a gateway to another dimension, a portal to a world beyond the confines of reality. The patrons were a diverse tapestry of characters, each drawn to the promise of discovery and knowledge. They lingered in the cozy corners, lost in the magic of words. The bookstore was more than just a shop; it was a sanctuary for the curious, a haven for the dreamers, and a home for the imagination.",

    "As the waves crashed against the shore, a sense of calmness washed over her, carrying away the worries of the day. The salty breeze whispered tales of distant lands and tranquil waters, a lullaby that soothed her soul. The sun dipped below the horizon, painting the sky in hues of orange and purple. Seagulls danced in the twilight, their silhouettes etched against the fading light. The ocean, vast and mysterious, seemed to hold the secrets of the universe within its depths. She walked along the water's edge, feeling the sand between her toes, a connection to the earth. It was a moment of pure serenity, a communion with nature. The waves, with their eternal rhythm, whispered the promise of tomorrow, a reminder that life's challenges could be weathered like a sailor navigating the open sea. She took a deep breath, embracing the beauty of the present, ready to face the unknown with courage and grace.",

    "Amidst the tall trees of the forest, a hidden path unveiled itself, inviting the curious wanderer into its mysterious depths. Shafts of dappled sunlight illuminated the foliage, creating a magical ambiance. The scent of damp earth and wildflowers hung in the air, a fragrant welcome to those who dared to venture forth. Birds sang melodious tunes, orchestrating a symphony of nature. The path meandered through ancient trees, their branches forming a canopy that seemed to touch the sky. It was a journey into the heart of wilderness, a communion with the flora and fauna that called the forest home. The leaves rustled with the whispers of the wind, sharing tales of centuries past. Every step revealed a new wonder, a hidden gem waiting to be discovered. It was a reminder that the world held beauty in its purest form, and for those willing to seek, it would reveal its secrets.",

    "The scent of blooming flowers lingered in the air, a sweet reminder that spring had arrived in all its colorful glory. Bees hummed and butterflies danced, a symphony of nature's awakening. The world seemed to come alive, bursting with hues of pink, purple, and yellow. The trees adorned themselves with delicate blossoms, like a bride adorned in her finest lace. The gardens were a canvas of vibrant petals and fresh leaves, each one telling a story of growth and renewal. People strolled through the parks, their faces lit up with smiles, as if reflecting the joy of the blooming season. It was a time of rebirth, a celebration of life's resilience. Spring whispered promises of new beginnings, a gentle nudge to embrace change and flourish. In every flower, there was a lesson — to bloom where you're planted and to find beauty in every stage of growth.",

    "She sat by the fireplace, lost in a book that transported her to far-off lands and magical realms of imagination. Each word was a stepping stone into a world beyond reality, a place where dreams took flight and adventures unfolded. The crackling fire added a cozy warmth to the room, flickering shadows dancing on the walls. Time seemed to stand still as she turned the pages, captivated by the author's words. Characters became her companions, and distant lands her playground. The worn armchair cradled her in its embrace, providing a sanctuary for her literary explorations. The world outside faded into the background, and the book became her reality. In that moment, she was both the reader and the protagonist, living a thousand lives through the magic of storytelling. It was a simple joy, but one that filled her heart with an everlasting sense of wonder.",

    "As the rain pattered on the windowpane, she sipped her tea, finding solace in the soothing sound and gentle warmth. The cozy blanket embraced her, cocooning her in comfort and peace. Drops of rain raced down the glass, like tears of a melancholy sky seeking solace. She watched the world outside, a palette of grays and greens, transformed by the rain's gentle touch. It was a moment of reflection, a chance to pause and listen to the rhythm of the rain, a symphony of nature's music. The worries of the day seemed to fade, replaced by a tranquil calm. Each sip of tea was a sip of tranquility, a taste of serenity. And as the rain whispered its lullaby, she closed her eyes, embracing the beauty of a rainy day, finding beauty in the midst of the storm.",

    "The bustling market was a tapestry of sights and sounds, a vibrant mosaic of cultures coming together in harmony. The clamor of vendors and the chatter of visitors formed a lively urban melody, a celebration of diversity. Aromas of spices and street food wafted through the air, tantalizing the senses and beckoning the hungry. Colorful stalls displayed an array of wares, each item a story in itself, waiting to be discovered. People haggled and bargained, their laughter and banter filling the market square. It was a dance of commerce, a choreography of trade. The market was more than just a place to shop; it was a meeting ground, a place where the pulse of the city could be felt. Amidst the chaos, there was a sense of unity, a shared experience that connected the souls of all who wandered through its lively lanes.",

    "In the quiet of the night, the stars danced in the sky, their silent beauty a source of wonder and inspiration. The moon cast a silver glow, illuminating the world with an ethereal light, as if nature itself was painting a masterpiece on the canvas of the night. The constellations told ancient stories, each twinkling star a character in a celestial narrative. She stood under the vast expanse, feeling both humbled and embraced by the enormity of the universe. It was a moment of introspection, a reminder of our place in the grand tapestry of existence. The stillness of the night echoed with possibility and dreams, urging her to reach for the stars and chase her aspirations. As the night advanced, a sense of peace washed over her, a promise that even in the darkest hours, there was light to guide the way.",

    "The old house bore the marks of time, its walls echoing whispers of generations long gone, telling stories of a bygone era. Wooden beams and antique furniture stood as witnesses to the passage of time, silent narrators of countless family gatherings and shared laughter. Dust motes danced in the sunlight that filtered through the vintage curtains, adding a nostalgic aura to the rooms. Each corner held memories, each creak of the floorboards a note in the symphony of time. The hallway was adorned with old family photographs, frozen moments of joy, love, and milestones. A grandfather clock chimed solemnly, a guardian of the house's history. It was a place where time seemed to slow down, allowing one to appreciate the beauty of antiquity and the grace of enduring love.",

"In the heart of the city, a small garden bloomed, an oasis of greenery and tranquility amid the concrete jungle. The fragrance of blossoms carried on the wind, a delicate reminder of nature's resilience. The laughter of children playing and the chatter of families enjoying a day out formed a harmonious melody. Trees swayed in the breeze, offering shade and comfort to those seeking solace. It was a haven for the weary, a sanctuary for the dreamer. Amidst the hustle and bustle of urban life, the garden provided a retreat, a place to connect with the earth and find peace in the lap of nature. In that little green paradise, worries seemed to dissipate, and the soul found rejuvenation.",

"The old man sat on the park bench, his eyes twinkling with wisdom as he fed the pigeons and shared stories with passersby. Lines on his face told tales of a life well-lived and experiences cherished. He had seen the world change, witnessed wars and peace, seen the evolution of technology and culture. His laughter echoed through the park, a testament to a heart that had known both joy and sorrow. He was a living book, a reservoir of knowledge and memories. People gathered around him, drawn to his warmth and the timeless wisdom he offered. It was in these simple interactions that bonds were formed, friendships kindled, and the beauty of human connection celebrated. The park was not just a patch of green, but a place where stories converged, and the legacy of a generation found a voice.",

"As the music swelled, the dancer leaped and twirled, their movements a graceful expression of joy and passion. Each step was a brushstroke on the canvas of the stage, painting a story of emotions and artistry. The audience was enthralled, lost in the magic of the performance. The costumes dazzled under the spotlight, and the music enveloped the theater like a gentle embrace. It was a symphony of movement and sound, a celebration of the human spirit. The dancer poured their heart into every gesture, every leap, and every pirouette. It was a manifestation of years of dedication and love for the craft. The applause that followed was thunderous, a tribute to the beauty that had unfolded on stage. It was a reminder that art had the power to move, to inspire, and to unite.",

"The aroma of a home-cooked meal filled the kitchen, a testament to the love and care that went into its creation. Family gathered around the table, sharing laughter and creating cherished memories. It was a scene of togetherness, a celebration of the simple joys that life offered. The clinking of utensils and the chatter of loved ones filled the air, a sweet melody of love and kinship. Each bite was a reminder of the warmth of home, a taste of tradition and love. The dining table was not just a piece of furniture; it was a place where stories were exchanged, bonds were strengthened, and love was savored. It was a sacred space, a symbol of unity and the heart of the home.",

"The first snowfall of the season brought with it a sense of wonder, turning the world into a glistening, magical wonderland. Children played, their laughter echoing in the crisp, wintry air. Snowflakes fell gently, like delicate dancers descending from the sky. The ground was a canvas of white, untouched and pristine. It was a moment frozen in time, a scene from a winter fairy tale. The rooftops were adorned with a powdery frosting, and trees wore crowns of snow. Footprints formed a tapestry of exploration, telling stories of playful adventures. The cold was forgotten in the beauty of the moment, in the enchantment that the snow brought. It was a reminder that in every season, there was magic waiting to be discovered.",

"In the meadow, a rainbow arched across the sky, a beautiful reminder that after the storm, there is always hope and beauty. Colors painted the heavens, a promise of brighter days ahead. The rain had stopped, leaving behind a freshness in the air and the glisten of raindrops on leaves. The rainbow was nature's art, a beacon of optimism in a world that sometimes seemed gray. It was a symbol of diversity and harmony, as each color merged seamlessly into the next. The meadow seemed to rejoice, the flowers blooming with extra vibrancy, as if inspired by the colorful display in the sky. It was a moment of awe, a moment that made hearts smile and souls dance in delight.",

"The city skyline was a mesmerizing display of lights, a testament to human ingenuity and the allure of urban life. Towers and skyscrapers reached for the stars, a symbol of dreams and ambition. The city was a living organism, pulsating with energy and life. Cars moved like blood in veins, and people bustled like cells in a bustling metropolis. The lights twinkled like a celestial constellation, painting the night with an ethereal glow. Each building had a story, each street a history. It was a tapestry of cultures, a mosaic of dreams. The city was a home to millions, a place of possibilities and aspirations. As the night deepened, the city's heartbeat remained strong, a steady rhythm echoing the heartbeat of its inhabitants, a reminder that the city never slept, always alive with dreams and endeavors.",


"The sun peeked over the horizon, painting the sky with shades of orange and pink. Birds chirped merrily, greeting the new day.In the heart of the bustling city, an old bookstore stood, its shelves filled with stories of forgotten worlds and adventures.As the waves crashed against the shore, a sense of calmness washed over her, carrying away the worries of the day.Amidst the tall trees of the forest, a hidden path unveiled itself, inviting the curious wanderer into its mysterious depths.The scent of blooming flowers lingered in the air, a sweet reminder that spring had arrived in all its colorful glory.She sat by the fireplace, lost in a book that transported her to far-off lands and magical realms of imagination.",
];

const para=document.getElementById("para");
const input=document.getElementById("text-input");
const totalTypedEl=document.getElementById("total-typed");
const correctsEl=document.getElementById("correct-typed");
const wrongsEl=document.getElementById("wrong-typed");
const timeLeftEl=document.getElementById("time");
const speedEl=document.getElementById("speed");
let wrongs=0;
let corrects=0;
let speed=0;
let totalTyped=0;
let timeLeft=60;
let intervalId;
function updateEls()
{
    totalTypedEl.innerHTML=`${totalTyped}`;
    correctsEl.innerHTML=`${corrects}`;
    wrongsEl.innerHTML=`${wrongs}`;
    timeLeftEl.innerHTML=`${timeLeft}s`;
    speedEl.innerHTML=`${speed}W/Min`;
}
function setUpInterface(){ 
    let randomNumber=Math.floor(Math.random()*paragraphs.length);
    let randomParagraph=paragraphs[randomNumber];
    for (var i = 0;i<randomParagraph.length;i++) {
        let span=`<span>${randomParagraph[i]}</span>`;
        para.innerHTML+=span;
    }
    updateEls();
}
setUpInterface();

function handleTyping(){
    intervalId=setInterval(()=>{
        if(timeLeft==0){
            clearInterval(intervalId);
        }else{
            timeLeft--;
            updateEls();
        }
    },1000);
    document.getElementById("para").style.color="red";
}

input.addEventListener("click",handleTyping);
document.addEventListener("keydown",handleTyping);