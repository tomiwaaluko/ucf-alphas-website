import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const Poems = () => {
  const poems = [
    {
      title: "Invictus",
      author: "William Ernest Henley",
      content: [
        "Out of the night that covers me,",
        "Black as the Pit from pole to pole,",
        "I thank whatever Gods may be",
        "For my unconquerable soul.",
        "",
        "In the fell clutch of Circumstance",
        "I have not winced nor cried aloud.",
        "Under the bludgeonings of Chance",
        "My head is bloody, but unbowed.",
        "",
        "Beyond this place of wrath and tears",
        "Looms but the Horror of the shade,",
        "And yet the menace of the years",
        "Finds, and shall find me, unafraid.",
        "",
        "It matters not how strait the gate,",
        "How charged with punishments the scroll,",
        "I am the master of my fate:",
        "I am the captain of my soul.",
      ],
    },
    {
      title: "IF",
      author: "Rudyard Kipling",
      content: [
        "If you can keep your head when all about you",
        "Are losing theirs and blaming it on you;",
        "If you can trust yourself when all men doubt you,",
        "But make allowance for their doubting too;",
        "If you can wait and not be tired by waiting,",
        "Or, being lied about, don't deal in lies,",
        "Or, being hated, don't give way to hating,",
        "And yet don't look too good, nor talk too wise;",
        "",
        "If you can dream – and not make dreams your master;",
        "If you can think – and not make thoughts your aim;",
        "If you can meet with triumph and disaster",
        "And treat those two imposters just the same;",
        "If you can bear to hear the truth you've spoken",
        "Twisted by knaves to make a trap for fools,",
        "Or watch the things you gave your life to broken,",
        "And stoop and build 'em up with wornout tools;",
        "",
        "If you can make one heap of all your winnings",
        "And risk it on one turn of pitch-and-toss,",
        "And lose, and start again at your beginnings",
        "And never breath a word about your loss;",
        "If you can force your heart and nerve and sinew",
        "To serve your turn long after they are gone,",
        "And so hold on when there is nothing in you",
        "Except the Will which says to them: 'Hold on';",
        "",
        "If you can talk with crowds and keep your virtue,",
        "Or walk with kings – nor lose the common touch;",
        "If neither foes nor loving friends can hurt you;",
        "If all men count with you, but none too much;",
        "If you can fill the unforgiving minute",
        "With sixty seconds' worth of distance run –",
        "Yours is the Earth and everything that's in it,",
        "And – which is more – you'll be a Man my son!",
      ],
    },
    {
      title: "The Test of a Man",
      author: "Author Unknown",
      content: [
        "The test of a man is the fight that he makes,",
        "The grit that he daily shows,",
        "The way he stands upon his feet,",
        "And takes life's numerous bumps and blows.",
        "",
        "A coward can smile when there's naught to fear.",
        "And nothing his progress bars,",
        "But it takes a man to stand and cheer,",
        "While the other fellow stars.",
        "It isn't the victory after all",
        "But the fight that a Brother makes.",
        "A man when driven against the wall,",
        "Still stands erect and takes the blows of fate",
        "with his head held high,",
        "bleeding and bruised and pale,",
        "Is the man who will win and fate defied,",
        "For he isn't afraid to fail!",
      ],
    },
    {
      title: "The Man Who Thinks He Can",
      author: "Author Unknown",
      content: [
        "If you think you're beaten, you are.",
        "If you think you dare not, you don't.",
        "If you'd like to win, but think you can't,",
        "It's almost a cinch you won't.",
        "",
        "If you think you'll lose, you've lost.",
        "For out in the world we find,",
        "Success begins with a fellow's will,",
        "It's all a state of mind.",
        "",
        "If you think you're out-classed, you are;",
        "You've got to think high to rise.",
        "You've got to be sure of yourself,",
        "Before you can ever win a prize.",
        "",
        "Life's battles does not always go,",
        "To the stronger or faster man.",
        "But, soon or late, the man who wins,",
        "IS THE MAN WHO THINKS HE CAN!!!",
      ],
    },
    {
      title: "To Be An Alpha Man",
      author: "Fred H. Woodruff",
      content: [
        "To be an Alpha man means more than just to wear a pin,",
        "It requires intrinsic qualities that are developed deep within,",
        "It calls for lasting brotherhood, a word sometimes used in vain,",
        "It means an honest devotion, not anticipation of personal gain.",
        "",
        "Fraternity speaks of brotherly love, that's something to achieve,",
        "It's more than just a grip of hands, it's an ideal to conceive.",
        "You're proud to be an Alpha, and share her praises won,",
        "Before you inflate yourself with pride, ask yourself, honestly,",
        "how much have I done?",
        "",
        "To realize the wealth of personal satisfaction, from knowing",
        "you've given your all, To have helped her cause unfalteringly,",
        "when you rally to her call.",
        "",
        "To combine all these qualities, and root them deep within,",
        "The product would be an Alpha man, deserving of his pin.",
        "So take an honest inventory of your character within,",
        "And for every virtue you find missing, try and weave it in.",
        "",
        "For a man without these virtues isn't worth a grain of sand.",
        "It's plain to see, it's more than just a pin, that makes an",
        "Alpha man.",
      ],
    },
    {
      title: "Don't Quit",
      author: "Clinton Howell",
      content: [
        "When things go wrong, as they sometimes will,",
        "When the road you're trudging seems all uphill,",
        "When the funds are low, and the debts are high,",
        "and you you want to smile, but you have to sigh.",
        "When care is pressing you down a bit,",
        "Rest if you must, but don't you quit.",
        "",
        "Life is queer with its twist and turns",
        "As every one of us sometimes learns,",
        "And many a failure turns about,",
        "When he might have won had he stuck it out;",
        "Don't give up though the pace seems slow,",
        "You may succeed with another blow.",
        "",
        "Success is failure turned inside out,",
        "the silver tint of the clouds of doubt,",
        "and you never can tell how close you are,",
        "It may be near when it seems so far;",
        "So stick to the fight when you're hardest hit,",
        "It's when things seem worst, that you must not quit.",
      ],
    },
    {
      title: "House of Alpha",
      author: "Bro. Sidney P. Brown",
      content: [
        "GOODWILL is the monarch of this house",
        "Men, unacquainted, enter, shake hands,",
        "exchange greetings, and depart friends.",
        "Cordiality exists among all who abide within.",
        "",
        "I am the eminent expression of friendship.",
        "Character and temperament change under my dominant power.",
        "Lives, once touched by me become tuned,",
        "and are thereafter, amiable, kindly, fraternal.",
        "",
        "I inspire the musician to play noble sentiments,",
        "and assist the chemist to convert ungenerous personalities",
        "into individuals of great worth.",
        "I destroy all ignoble impulses.",
        "I constantly invoke principles which make for common brotherhood,",
        "and the echo resounds in all communities,",
        "and princely men are thereby recognized.",
        "",
        "Education, health, music, encouragement, sympathy, laughter:",
        "All these are species of interest given of self-invested capital.",
        "Tired moments find me a delightful treat,",
        "Hours of sorrow a shrine of understanding,",
        "At all times I am faithful to the creed of companionship.",
        "",
        "To a few I am the Castle of Dreams,",
        "Ambitious, successful, hopeful dreams.",
        "To many, I am the Poetic Palace",
        "where human feeling is rhymed to celestial motives.",
        "To the great majority,",
        "I am the Treasury of Good Fellowship.",
        "",
        "In fact, I am the College of Friendship;",
        "The University of Brotherly Love;",
        "The School for the Better Making of Men.",
        "",
        "I AM ALPHA PHI ALPHA!",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-black via-gray-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            {" "}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 font-cinzel"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Poems
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Words that have inspired generations of Alpha men to reach higher,
              strive harder, and embody the principles of scholarship,
              fellowship, good character, and the uplifting of humanity.
            </motion.p>
          </div>{" "}
        </motion.section>

        {/* Poems Section with Tabs */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <Tabs defaultValue="invictus" className="w-full">
              <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2 bg-gray-900/50 p-2 rounded-xl border border-yellow-400/30 h-auto">
                  {" "}
                  {poems.map((poem) => (
                    <TabsTrigger
                      key={poem.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}
                      value={poem.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}
                      className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-400 data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-400 data-[state=active]:border-yellow-400/50 transition-all duration-300 rounded-lg border border-transparent font-lora h-auto min-h-[3rem] flex items-center justify-center text-center whitespace-normal leading-tight"
                    >
                      {poem.title === "The Man Who Thinks He Can" ? (
                        <span className="block">
                          <span className="block">The Man Who</span>
                          <span className="block">Thinks He Can</span>
                        </span>
                      ) : (
                        poem.title
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>{" "}
              {poems.map((poem, index) => (
                <TabsContent
                  key={poem.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")}
                  value={poem.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")}
                  className="focus-visible:outline-none"
                >
                  <motion.div
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 md:p-12 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 font-cinzel">
                        {poem.title}
                      </h3>
                      <p className="text-gray-400 text-lg font-lora">
                        by {poem.author}
                      </p>
                    </div>{" "}
                    <div className="font-crimson italic text-gray-300 leading-relaxed space-y-2 text-center max-w-4xl mx-auto">
                      {poem.content.map((line, lineIndex) => (
                        <motion.p
                          key={lineIndex}
                          className={`${
                            line === ""
                              ? "h-4"
                              : line === "I AM ALPHA PHI ALPHA!"
                              ? "text-lg md:text-xl font-bold text-yellow-400"
                              : "text-lg md:text-xl"
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: lineIndex * 0.03,
                          }}
                        >
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}{" "}
            </Tabs>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Poems;
