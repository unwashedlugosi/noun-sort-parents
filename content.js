/* Shared question bank for Noun Sort (the practice app and the parents site).
   Rules follow the class sheet: concrete = can be seen, touched, heard, or tasted.
   Abstract = cannot be sensed; exists in our minds (ideas, feelings, qualities).
   [brackets] mark the underlined noun. Item ids are stored in the database, so
   never reuse or renumber an id; add new ones instead. */
const LEVELS = [
  {n:1, name:"Warm-up", blurb:"Single words. Can you sense it?"},
  {n:2, name:"In a sentence", blurb:"Sort the underlined noun, like the worksheet."},
  {n:3, name:"Sneaky ones", blurb:"Things you hear or see but can't hold. Ideas hiding in real scenes."},
  {n:4, name:"Look-alikes", blurb:"friend vs. friendship, child vs. childhood."},
  {n:5, name:"Find the noun", blurb:"Two kinds of nouns in one sentence. Tap the one asked for."},
  {n:6, name:"Build it", blurb:"Turn a word into an abstract noun."}
];

const ITEMS = [
  // Level 1: single words
  {id:"w1",lv:1,t:"word",text:"apple",a:"C",why:"You can see, touch, and taste an apple."},
  {id:"w2",lv:1,t:"word",text:"wallet",a:"C",why:"You can see a wallet and hold it."},
  {id:"w3",lv:1,t:"word",text:"glasses",a:"C",why:"You can see glasses and put them on."},
  {id:"w4",lv:1,t:"word",text:"pencil",a:"C",why:"You can see and hold a pencil."},
  {id:"w5",lv:1,t:"word",text:"puppy",a:"C",why:"You can see, pet, and hear a puppy."},
  {id:"w6",lv:1,t:"word",text:"teacher",a:"C",why:"A teacher is a person you can see and hear."},
  {id:"w7",lv:1,t:"word",text:"pizza",a:"C",why:"You can see, touch, and taste pizza."},
  {id:"w8",lv:1,t:"word",text:"guitar",a:"C",why:"You can see, hold, and hear a guitar."},
  {id:"w9",lv:1,t:"word",text:"river",a:"C",why:"You can see a river, hear it, and touch the water."},
  {id:"w10",lv:1,t:"word",text:"backpack",a:"C",why:"You can see and carry a backpack."},
  {id:"w11",lv:1,t:"word",text:"cookie",a:"C",why:"You can see, hold, and taste a cookie."},
  {id:"w12",lv:1,t:"word",text:"sneaker",a:"C",why:"You can see and touch a sneaker."},
  {id:"w13",lv:1,t:"word",text:"patience",a:"A",why:"Patience is a quality. You can see someone waiting calmly, but you can't see or touch patience itself."},
  {id:"w14",lv:1,t:"word",text:"kindness",a:"A",why:"Kindness is a quality. You can see a kind act, but kindness itself is an idea."},
  {id:"w15",lv:1,t:"word",text:"honesty",a:"A",why:"Honesty is the quality of telling the truth. You can't see, touch, hear, or taste it."},
  {id:"w16",lv:1,t:"word",text:"curiosity",a:"A",why:"Curiosity is the feeling of wanting to know. It lives in your mind."},
  {id:"w17",lv:1,t:"word",text:"happiness",a:"A",why:"Happiness is a feeling. You can see a smile, but not happiness itself."},
  {id:"w18",lv:1,t:"word",text:"courage",a:"A",why:"Courage is a quality. You can see a brave act, but not courage itself."},
  {id:"w19",lv:1,t:"word",text:"freedom",a:"A",why:"Freedom is an idea. You can't hold it or hear it."},
  {id:"w20",lv:1,t:"word",text:"ability",a:"A",why:"An ability is a skill you have. It's an idea, not an object."},
  {id:"w21",lv:1,t:"word",text:"fear",a:"A",why:"Fear is a feeling. It lives in your mind."},
  {id:"w22",lv:1,t:"word",text:"hope",a:"A",why:"Hope is a feeling about what might happen. You can't sense it."},
  {id:"w23",lv:1,t:"word",text:"knowledge",a:"A",why:"Knowledge is what you know. You can hold a book, but not the knowledge in your head."},
  {id:"w24",lv:1,t:"word",text:"future",a:"A",why:"The future hasn't happened yet. It's an idea about time."},

  // Level 2: clear cases in sentences
  {id:"s1",lv:2,t:"sentence",text:"The [firefighter] climbed the ladder.",a:"C",why:"A firefighter is a person you can see and hear."},
  {id:"s2",lv:2,t:"sentence",text:"Our [dog] chased the ball across the yard.",a:"C",why:"You can see, pet, and hear a dog."},
  {id:"s3",lv:2,t:"sentence",text:"My sister's [backpack] was full of books.",a:"C",why:"You can see and carry a backpack."},
  {id:"s4",lv:2,t:"sentence",text:"The [pizza] was still hot when it arrived.",a:"C",why:"You can see, touch, and taste pizza."},
  {id:"s5",lv:2,t:"sentence",text:"We sat on the [bench] outside the library.",a:"C",why:"You can see and sit on a bench."},
  {id:"s6",lv:2,t:"sentence",text:"The [coach] blew her whistle.",a:"C",why:"A coach is a person you can see and hear."},
  {id:"s7",lv:2,t:"sentence",text:"A [spider] spun a web in the corner.",a:"C",why:"You can see a spider (and maybe feel it crawl on you)."},
  {id:"s8",lv:2,t:"sentence",text:"The [waitress] brought out our food quickly.",a:"C",why:"A waitress is a person you can see and hear."},
  {id:"s9",lv:2,t:"sentence",text:"His [honesty] earned him the team's trust.",a:"A",why:"Honesty is a quality. You can't see, touch, hear, or taste it."},
  {id:"s10",lv:2,t:"sentence",text:"[Courage] helped her speak in front of the class.",a:"A",why:"Courage is a quality inside a person. You can see her speak, but not the courage."},
  {id:"s11",lv:2,t:"sentence",text:"The team's [pride] showed after the big win.",a:"A",why:"Pride is a feeling. It lives in your mind."},
  {id:"s12",lv:2,t:"sentence",text:"I have [confidence] in my math skills now.",a:"A",why:"Confidence is a feeling about yourself. You can't sense it."},
  {id:"s13",lv:2,t:"sentence",text:"[Fear] kept the kitten hiding under the bed.",a:"A",why:"Fear is a feeling. You can see the kitten hiding, but not the fear."},
  {id:"s14",lv:2,t:"sentence",text:"Our [freedom] is protected by laws.",a:"A",why:"Freedom is an idea. You can't hold it."},
  {id:"s15",lv:2,t:"sentence",text:"Her [generosity] surprised everyone at the bake sale.",a:"A",why:"Generosity is a quality. You can see her give, but not generosity itself."},
  {id:"s16",lv:2,t:"sentence",text:"His [knowledge] of dinosaurs is amazing.",a:"A",why:"Knowledge is what's in your mind. It's an idea."},

  // Level 3: sneaky ones
  {id:"k1",lv:3,t:"sentence",text:"[Music] blasted from the speakers.",a:"C",why:"You can hear music. Anything you can hear is concrete, even if you can't hold it."},
  {id:"k2",lv:3,t:"sentence",text:"[Thunder] rumbled over the lake.",a:"C",why:"You can hear thunder, so it's concrete."},
  {id:"k3",lv:3,t:"sentence",text:"[Smoke] drifted up from the campfire.",a:"C",why:"You can see smoke. You can't hold it, but seeing is enough. Concrete."},
  {id:"k4",lv:3,t:"sentence",text:"The [wind] knocked over our trash cans.",a:"C",why:"You can hear the wind and feel it on your skin. Concrete."},
  {id:"k5",lv:3,t:"sentence",text:"[Steam] fogged up the bathroom mirror.",a:"C",why:"You can see steam and feel its heat. Concrete."},
  {id:"k6",lv:3,t:"sentence",text:"A loud [noise] woke up the baby.",a:"C",why:"You can hear a noise, so it's concrete."},
  {id:"k7",lv:3,t:"sentence",text:"[Lightning] flashed across the sky.",a:"C",why:"You can see lightning, so it's concrete."},
  {id:"k8",lv:3,t:"sentence",text:"A [rainbow] appeared after the storm.",a:"C",why:"You can see a rainbow, even though you can't touch it. Concrete."},
  {id:"k9",lv:3,t:"sentence",text:"We heard the [echo] of our voices in the cave.",a:"C",why:"You can hear an echo, so it's concrete."},
  {id:"k10",lv:3,t:"sentence",text:"A long [shadow] stretched across the floor.",a:"C",why:"You can see a shadow, so it's concrete."},
  {id:"k11",lv:3,t:"sentence",text:"The [victory] made the whole team cheer.",a:"A",why:"You can see the cheering and the trophy, but victory is the idea of winning. Abstract."},
  {id:"k12",lv:3,t:"sentence",text:"Everyone could tell how much [sadness] she felt.",a:"A",why:"You might see tears, but sadness is a feeling. Abstract."},
  {id:"k13",lv:3,t:"sentence",text:"Her [talent] for drawing is easy to see.",a:"A",why:"The sentence says \"see,\" but you see her drawings, not the talent. Talent is a skill. Abstract."},
  {id:"k14",lv:3,t:"sentence",text:"The [speed] of the race car amazed us.",a:"A",why:"You can see the car, but speed is an idea about how fast it goes. Abstract."},
  {id:"k15",lv:3,t:"sentence",text:"After all that practice, [success] felt great.",a:"A",why:"Success is the idea of reaching a goal. Abstract."},
  {id:"k16",lv:3,t:"sentence",text:"The [danger] of the icy road made Dad drive slowly.",a:"A",why:"You can see the ice, but danger is an idea about what might happen. Abstract."},
  {id:"k17",lv:3,t:"sentence",text:"Her smile has a [brilliance] about it.",a:"A",why:"You can see the smile, but brilliance is a quality. Abstract."},

  // Level 4: look-alike pairs
  {id:"p1",lv:4,t:"sentence",text:"My best [friend] lives next door.",a:"C",why:"A friend is a person you can see and hear."},
  {id:"p2",lv:4,t:"sentence",text:"Our [friendship] started in kindergarten.",a:"A",why:"Friendship is the bond between friends, not a person. Abstract."},
  {id:"p3",lv:4,t:"sentence",text:"Every [child] got a juice box.",a:"C",why:"A child is a person you can see and hear."},
  {id:"p4",lv:4,t:"sentence",text:"Grandma loves telling stories about her [childhood].",a:"A",why:"Childhood is a time of life, not a person. Abstract."},
  {id:"p5",lv:4,t:"sentence",text:"The team [leader] carried the flag.",a:"C",why:"A leader is a person you can see."},
  {id:"p6",lv:4,t:"sentence",text:"Her [leadership] helped the team win.",a:"A",why:"Leadership is the skill of leading. Abstract."},
  {id:"p7",lv:4,t:"sentence",text:"The [hero] pulled the kitten out of the tree.",a:"C",why:"A hero is a person you can see."},
  {id:"p8",lv:4,t:"sentence",text:"The whole town praised his [heroism].",a:"A",why:"Heroism is the quality of being a hero. Abstract."},
  {id:"p9",lv:4,t:"sentence",text:"A [thief] stole my bike from the rack.",a:"C",why:"A thief is a person you can see."},
  {id:"p10",lv:4,t:"sentence",text:"The [theft] of my bike made me furious.",a:"A",why:"Theft is the act of stealing. You can see the thief and the bike, but \"theft\" is an idea. Abstract."},
  {id:"p11",lv:4,t:"sentence",text:"Mom wiped the [tears] from my cheeks.",a:"C",why:"You can see and feel tears. Concrete."},
  {id:"p12",lv:4,t:"sentence",text:"[Sadness] crept over me when summer ended.",a:"A",why:"Sadness is a feeling. Tears are concrete; sadness is not."},
  {id:"p13",lv:4,t:"sentence",text:"His goofy [smile] made everyone laugh.",a:"C",why:"You can see a smile. Concrete."},
  {id:"p14",lv:4,t:"sentence",text:"[Joy] filled the gym when we won.",a:"A",why:"Joy is a feeling. A smile is concrete; joy is not."},
  {id:"p15",lv:4,t:"sentence",text:"The gold [medal] hung from a red ribbon.",a:"C",why:"You can see and hold a medal."},
  {id:"p16",lv:4,t:"sentence",text:"Carrying the flag was a great [honor].",a:"A",why:"An honor is an idea about respect. You can hold the flag, not the honor."},
  {id:"p17",lv:4,t:"sentence",text:"The [king] wore a heavy crown.",a:"C",why:"A king is a person you can see."},
  {id:"p18",lv:4,t:"sentence",text:"The king ruled with [wisdom].",a:"A",why:"Wisdom is knowing what's right to do. It lives in the mind. Abstract."},

  // Level 5: tap the noun
  {id:"f1",lv:5,t:"tap",text:"The dog showed its loyalty by waiting at the door.",nouns:{dog:"C",loyalty:"A",door:"C"},ask:"A",why:"Loyalty is a quality. Dog and door are things you can see."},
  {id:"f2",lv:5,t:"tap",text:"Her kindness made the new student feel welcome.",nouns:{kindness:"A",student:"C"},ask:"C",why:"A student is a person you can see. Kindness is a quality."},
  {id:"f3",lv:5,t:"tap",text:"Dad's patience ran out when the printer jammed.",nouns:{dad:"C",patience:"A",printer:"C"},ask:"A",why:"Patience is a quality. Dad and the printer are things you can see."},
  {id:"f4",lv:5,t:"tap",text:"The firefighter's bravery saved the kitten.",nouns:{firefighter:"C",bravery:"A",kitten:"C"},ask:"A",why:"Bravery is a quality. The firefighter and the kitten are concrete."},
  {id:"f5",lv:5,t:"tap",text:"Excitement filled the stadium.",nouns:{excitement:"A",stadium:"C"},ask:"C",why:"You can see a stadium. Excitement is a feeling."},
  {id:"f6",lv:5,t:"tap",text:"My grandmother shared her wisdom with me.",nouns:{grandmother:"C",wisdom:"A"},ask:"A",why:"Wisdom lives in the mind. Grandmother is a person."},
  {id:"f7",lv:5,t:"tap",text:"The scientist's curiosity led her to the cave.",nouns:{scientist:"C",curiosity:"A",cave:"C"},ask:"A",why:"Curiosity is a feeling. The scientist and the cave are concrete."},
  {id:"f8",lv:5,t:"tap",text:"We felt joy when the puppy licked our faces.",nouns:{joy:"A",puppy:"C",faces:"C"},ask:"A",why:"Joy is a feeling. The puppy and faces are concrete."},
  {id:"f9",lv:5,t:"tap",text:"The trophy reminded us of our success.",nouns:{trophy:"C",success:"A"},ask:"C",why:"You can see and hold a trophy. Success is an idea."},
  {id:"f10",lv:5,t:"tap",text:"Her hope grew as the rain stopped.",nouns:{hope:"A",rain:"C"},ask:"C",why:"You can see, hear, and feel rain. Hope is a feeling."},
  {id:"f11",lv:5,t:"tap",text:"The music gave me confidence.",nouns:{music:"C",confidence:"A"},ask:"C",why:"You can hear music, so it's concrete. Confidence is a feeling."},
  {id:"f12",lv:5,t:"tap",text:"Anger made his face turn red.",nouns:{anger:"A",face:"C"},ask:"C",why:"You can see a face. Anger is a feeling."},
  {id:"f13",lv:5,t:"tap",text:"The teacher admired Jordan's honesty.",nouns:{teacher:"C",jordan:"C",honesty:"A"},ask:"A",why:"Honesty is a quality. The teacher and Jordan are people."},
  {id:"f14",lv:5,t:"tap",text:"The thunder filled me with fear.",nouns:{thunder:"C",fear:"A"},ask:"C",why:"You can hear thunder, so it's concrete. Fear is a feeling."},

  // Level 6: build the abstract noun
  {id:"b1",lv:6,t:"write",base:"brave",frame:"The firefighter was brave. Everyone admired her ___.",answers:["bravery","courage"],why:"brave → bravery"},
  {id:"b2",lv:6,t:"write",base:"kind",frame:"Thank you for being kind. I'll remember your ___.",answers:["kindness"],why:"kind + -ness → kindness"},
  {id:"b3",lv:6,t:"write",base:"honest",frame:"He is always honest. His ___ makes him a good friend.",answers:["honesty"],why:"honest + -y → honesty"},
  {id:"b4",lv:6,t:"write",base:"happy",frame:"The kids were happy. Their ___ filled the room.",answers:["happiness","joy"],why:"happy + -ness → happiness (the y turns into i)"},
  {id:"b5",lv:6,t:"write",base:"friend",frame:"Maya is my friend. Our ___ is five years old.",answers:["friendship"],why:"friend + -ship → friendship"},
  {id:"b6",lv:6,t:"write",base:"child",frame:"Dad was a child in Ohio. He spent his ___ there.",answers:["childhood"],why:"child + -hood → childhood"},
  {id:"b7",lv:6,t:"write",base:"free",frame:"The bird was finally free. It enjoyed its ___.",answers:["freedom"],why:"free + -dom → freedom"},
  {id:"b8",lv:6,t:"write",base:"strong",frame:"The bridge is strong. Engineers tested its ___.",answers:["strength"],why:"strong → strength"},
  {id:"b9",lv:6,t:"write",base:"wise",frame:"Grandpa is wise. We ask him for his ___.",answers:["wisdom"],why:"wise + -dom → wisdom"},
  {id:"b10",lv:6,t:"write",base:"curious",frame:"Cats are curious. Their ___ gets them into trouble.",answers:["curiosity"],why:"curious → curiosity (-ity ending)"},
  {id:"b11",lv:6,t:"write",base:"excited",frame:"We were excited about the trip. Our ___ kept us awake.",answers:["excitement"],why:"excite + -ment → excitement"},
  {id:"b12",lv:6,t:"write",base:"patient",frame:"Be patient while the cookies bake. ___ pays off.",answers:["patience"],why:"patient → patience (-ence ending)"},
  {id:"b13",lv:6,t:"write",base:"able",frame:"She is able to juggle. Her ___ impressed the crowd.",answers:["ability"],why:"able → ability (-ity ending)"},
  {id:"b14",lv:6,t:"write",base:"beautiful",frame:"The coast is beautiful. People visit for its ___.",answers:["beauty"],why:"beautiful → beauty"},
  {id:"b15",lv:6,t:"write",base:"loyal",frame:"My dog is loyal. I love his ___.",answers:["loyalty"],why:"loyal + -ty → loyalty"},
  {id:"b16",lv:6,t:"write",base:"proud",frame:"I was proud of my project. I showed it with ___.",answers:["pride"],why:"proud → pride"},
  {id:"b17",lv:6,t:"write",base:"angry",frame:"The man was angry. He spoke with ___.",answers:["anger"],why:"angry → anger"},
  {id:"b18",lv:6,t:"write",base:"lonely",frame:"The new kid felt lonely. We helped end his ___.",answers:["loneliness"],why:"lonely + -ness → loneliness (the y turns into i)"},
  {id:"b19",lv:6,t:"write",base:"leader",frame:"Sam is the team leader. The coach praised his ___.",answers:["leadership"],why:"leader + -ship → leadership"},
  {id:"b20",lv:6,t:"write",base:"confident",frame:"She felt confident on stage. Practice gave her ___.",answers:["confidence"],why:"confident → confidence (-ence ending)"}
];
const BY_ID = Object.fromEntries(ITEMS.map(i => [i.id, i]));
const TEST_DEFAULT = "2026-09-29";
const ROUND_SIZE = 10, TEST_SIZE = 16;
const SUFFIXES = ["ness","ship","hood","dom","ity","ment","ence","ance","ism","ty","th"];

const label = a => a === "C" ? "concrete" : "abstract";
function itemKind(item){ return item.a || item.ask || null; }
function targetOf(item){
  if (item.t === "word") return item.text;
  if (item.t === "sentence") return item.text.match(/\[(.+?)\]/)[1];
  if (item.t === "tap") return Object.keys(item.nouns).find(k => item.nouns[k] === item.ask);
  return item.answers[0];
}
function itemLabel(item){
  if (item.t === "write") return item.base + " → " + item.answers[0];
  if (item.t === "tap") return targetOf(item) + " (in \u201c" + item.text + "\u201d)";
  return targetOf(item).toLowerCase();
}
function itemPlain(item){
  if (item.t === "sentence") return item.text.replace(/[\[\]]/g, "");
  if (item.t === "write") return item.base + " → " + item.answers[0];
  return item.text;
}

/* ---------- 15-minute refresher ----------
   Level 0 items: used only by the refresher (lessons' quick checks and the
   confidence test), never by level rounds or the practice test. */
const TRAPS = {
  sound:  "Trap 1: if you can hear it, see it, or feel it, it's concrete, even if you can't hold it.",
  hidden: "Trap 2: ask whether you can sense the word itself, not just the things around it.",
  pair:   "Trap 3: the person or thing is concrete. The idea made from it (-ship, -hood, -ness, -ism) is abstract."
};
const REFRESHER_ITEMS = [
  // quick checks inside the lessons
  {id:"q1",lv:0,t:"word",text:"wallet",a:"C",why:"You can see a wallet and hold it. Concrete."},
  {id:"q2",lv:0,t:"word",text:"honesty",a:"A",why:"Honesty is a quality. You can't see, hear, touch, taste, or smell it. Abstract."},
  {id:"q3",lv:0,t:"sentence",text:"The [pizza] was still warm.",a:"C",why:"You can see, touch, smell, and taste pizza. One yes is enough. Concrete."},
  {id:"q4",lv:0,t:"sentence",text:"[Music] filled the gym.",a:"C",trap:"sound",why:"You can hear music. You can't hold it, but hearing is enough. Concrete."},
  {id:"q5",lv:0,t:"sentence",text:"Everyone could see her [talent].",a:"A",trap:"hidden",why:"You see her drawings or her playing, not the talent itself. \"See\" is the trick. Talent is a skill. Abstract."},
  {id:"q6",lv:0,t:"sentence",text:"Our [friendship] began in first grade.",a:"A",trap:"pair",why:"A friend is a person (concrete). Friendship is the bond between friends. Abstract."},
  // confidence test, in order: easier first
  {id:"r1",lv:0,t:"sentence",text:"The [puppy] chewed my shoe.",a:"C",why:"You can see, touch, and hear a puppy. Concrete."},
  {id:"r2",lv:0,t:"sentence",text:"Her [kindness] made my day.",a:"A",why:"Kindness is a quality. You can see kind actions, but not kindness itself. Abstract."},
  {id:"r3",lv:0,t:"sentence",text:"[Happiness] filled the classroom.",a:"A",why:"Happiness is a feeling. It lives in your mind. Abstract."},
  {id:"r4",lv:0,t:"sentence",text:"Grandma baked warm [cookies].",a:"C",why:"You can see, smell, touch, and taste cookies. Concrete."},
  {id:"r5",lv:0,t:"sentence",text:"We admired the rescue team's [courage].",a:"A",trap:"hidden",why:"You can see what the team did, but not courage itself. Courage is a quality. Abstract."},
  {id:"r6",lv:0,t:"sentence",text:"The [roar] of the crowd was deafening.",a:"C",trap:"sound",why:"You can hear a roar. Anything you can hear is concrete."},
  {id:"r7",lv:0,t:"sentence",text:"The [truth] finally came out.",a:"A",why:"Truth is an idea. You can't see, hear, touch, taste, or smell it. Abstract."},
  {id:"r8",lv:0,t:"sentence",text:"A cool [breeze] blew through the window.",a:"C",trap:"sound",why:"You can feel a breeze on your skin and hear it. You can't hold it, but you can sense it. Concrete."},
  {id:"r9",lv:0,t:"sentence",text:"His [skill] at chess is impressive.",a:"A",trap:"hidden",why:"You can see him play, but not the skill. A skill is an ability. Abstract."},
  {id:"r10",lv:0,t:"sentence",text:"The [siren] wailed as the ambulance passed.",a:"C",trap:"sound",why:"You can hear a siren. Concrete."},
  {id:"r11",lv:0,t:"sentence",text:"Everyone could see her [excitement].",a:"A",trap:"hidden",why:"The sentence says \"see,\" but you see her smile and bouncing, not the excitement. It's a feeling. Abstract."},
  {id:"r12",lv:0,t:"sentence",text:"[Brotherhood] kept the team together.",a:"A",trap:"pair",why:"A brother is a person (concrete). Brotherhood is the bond between people. Abstract."},
  {id:"r13",lv:0,t:"tap",text:"The firefighter showed great bravery.",nouns:{firefighter:"C",bravery:"A"},ask:"A",trap:"hidden",why:"Bravery is a quality. The firefighter is a person you can see."},
  {id:"r14",lv:0,t:"tap",text:"The wind gave me an idea.",nouns:{wind:"C",idea:"A"},ask:"C",trap:"sound",why:"You can feel and hear the wind, so it's concrete. An idea lives in your mind."},
  {id:"r15",lv:0,t:"write",base:"weak",frame:"Our team was weak on defense. The coach worked on that ___.",answers:["weakness"],why:"weak + -ness → weakness"}
];
ITEMS.push(...REFRESHER_ITEMS);
for (const it of REFRESHER_ITEMS) BY_ID[it.id] = it;
const REFRESHER_TEST = ["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15"];

const LESSONS = [
  {title:"What's a noun?",
   body:["A noun names a person, place, thing, or idea.", "Every noun is either concrete or abstract. Your test asks you to tell which one."],
   examples:[["teacher","person"],["park","place"],["backpack","thing"],["freedom","idea"]]},
  {title:"Concrete nouns",
   body:["Concrete nouns are things you can sense.", "You can see, hear, touch, taste, or smell them. They're real stuff in the world."],
   chips:{C:["apple","teacher","backpack","rain","music"]}, check:"q1"},
  {title:"Abstract nouns",
   body:["Abstract nouns can't be sensed.", "They live in your mind: feelings, ideas, and qualities."],
   chips:{A:["happiness","fear","honesty","freedom","friendship"]}, check:"q2"},
  {title:"The five-senses test",
   body:["For any noun, ask: can I see it, hear it, touch it, taste it, or smell it?", "One yes is enough: concrete. No to all five: abstract."],
   check:"q3"},
  {title:"Trap 1: you can't hold it, but you can sense it",
   body:["Some concrete nouns can't be picked up: music, thunder, wind, steam, smoke, a rainbow, a shadow.", "You can still hear them, see them, or feel them. One sense is enough, so they're concrete."],
   chips:{C:["music","thunder","wind","steam","rainbow"]}, check:"q4"},
  {title:"Trap 2: ideas hiding in real scenes",
   body:["“The victory made the team cheer.” You can see the cheering and the trophy, but you can't see the victory itself. Victory is the idea of winning.", "Ask: can I sense this word, or only the stuff around it? Watch out when a sentence says “see.”"],
   chips:{A:["victory","talent","danger","success","sadness"]}, check:"q5"},
  {title:"Trap 3: look-alike pairs",
   body:["The person or thing is concrete. The idea made from it is abstract.", "Endings like -ness, -ship, -hood, -dom, -ity, -ment, -ence, and -ism are a clue. Always double-check with the five-senses test."],
   pairs:[["friend","friendship"],["child","childhood"],["leader","leadership"],["hero","heroism"],["tears","sadness"]], check:"q6"},
  {title:"Ready for the test",
   body:["15 questions. No hints this time. You'll see explanations at the end.", "Use the five-senses test on every one, and watch for the three traps."]}
];
