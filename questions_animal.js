const questions = [

    // Layer 1: BLUE (1-8) - Cơ bản nhưng không quá dễ
    {
        text: "Which animal is classified as an obligate carnivore?",
        answers: ["Cow", "Lion", "Rabbit", "Deer"],
        correct: 1
    },
    {
        text: "Which animal is known for echolocation?",
        answers: ["Eagle", "Bat", "Elephant", "Tiger"],
        correct: 1
    },
    {
        text: "Which animal has the longest gestation period?",
        answers: ["Dog", "Elephant", "Cat", "Horse"],
        correct: 1
    },
    {
        text: "Which animal is a marsupial?",
        answers: ["Kangaroo", "Tiger", "Whale", "Snake"],
        correct: 0
    },
    {
        text: "Which animal is cold-blooded?",
        answers: ["Frog", "Dog", "Bird", "Whale"],
        correct: 0
    },
    {
        text: "Which animal is known for its migration over long distances?",
        answers: ["Penguin", "Monarch butterfly", "Lion", "Frog"],
        correct: 1
    },
    {
        text: "Which animal breathes through gills its entire life?",
        answers: ["Frog", "Fish", "Turtle", "Snake"],
        correct: 1
    },
    {
        text: "Which animal is an apex predator?",
        answers: ["Rabbit", "Wolf", "Deer", "Sheep"],
        correct: 1
    },

    // Layer 2: GREEN (9-16) - Tập tính & sinh học
    {
        text: "What type of diet does a herbivore have?",
        answers: ["Meat only", "Plants only", "Both plants and meat", "Insects only"],
        correct: 1
    },
    {
        text: "Which animal uses camouflage to hunt prey?",
        answers: ["Octopus", "Elephant", "Horse", "Dolphin"],
        correct: 0
    },
    {
        text: "Which animal is known to use tools in the wild?",
        answers: ["Chimpanzee", "Tiger", "Shark", "Deer"],
        correct: 0
    },
    {
        text: "What is the main diet of a panda?",
        answers: ["Meat", "Fish", "Bamboo", "Insects"],
        correct: 2
    },
    {
        text: "Which animal hibernates during winter?",
        answers: ["Bear", "Lion", "Elephant", "Giraffe"],
        correct: 0
    },
    {
        text: "Which animal has a symbiotic relationship with clownfish?",
        answers: ["Coral", "Sea anemone", "Jellyfish", "Shark"],
        correct: 1
    },
    {
        text: "Which animal is known for bioluminescence?",
        answers: ["Jellyfish", "Dog", "Eagle", "Cow"],
        correct: 0
    },
    {
        text: "Which animal group is known as omnivores?",
        answers: ["Animals that eat only plants", "Animals that eat only meat", "Animals that eat both plants and meat", "Animals that eat nothing"],
        correct: 2
    },

    // Layer 3: ORANGE (17-24) - Thuật ngữ & hệ sinh thái
    {
        text: "What is an ecosystem?",
        answers: [
            "A single animal",
            "A group of plants only",
            "A community of living organisms and their environment",
            "Only water animals"
        ],
        correct: 2
    },
    {
        text: "Which animal is a keystone species?",
        answers: ["Sea otter", "Cat", "Dog", "Cow"],
        correct: 0
    },
    {
        text: "What does 'nocturnal' mean?",
        answers: [
            "Active during the day",
            "Active at night",
            "Lives in water",
            "Eats plants"
        ],
        correct: 1
    },
    {
        text: "Which animal is known for pack hunting behavior?",
        answers: ["Tiger", "Wolf", "Leopard", "Bear"],
        correct: 1
    },
    {
        text: "What is the role of predators in an ecosystem?",
        answers: [
            "Destroy plants",
            "Control prey populations",
            "Produce oxygen",
            "Eat only plants"
        ],
        correct: 1
    },
    {
        text: "Which animal is an example of a scavenger?",
        answers: ["Vulture", "Lion", "Deer", "Horse"],
        correct: 0
    },
    {
        text: "What is mimicry in animals?",
        answers: [
            "Changing color randomly",
            "Imitating another species for survival",
            "Sleeping during winter",
            "Eating plants"
        ],
        correct: 1
    },
    {
        text: "Which animal is known for territorial behavior?",
        answers: ["Tiger", "Rabbit", "Sheep", "Cow"],
        correct: 0
    },

    // Layer 4: RED (25-32) - Nâng cao
    {
        text: "What is sexual dimorphism?",
        answers: [
            "Different species living together",
            "Differences between males and females of the same species",
            "Animals changing color",
            "Animals changing diet"
        ],
        correct: 1
    },
    {
        text: "Which animal has the most powerful bite force among land animals?",
        answers: ["Lion", "Hyena", "Crocodile", "Tiger"],
        correct: 2
    },
    {
        text: "What is the main function of venom in animals?",
        answers: [
            "Digestion",
            "Defense or capturing prey",
            "Flying",
            "Swimming"
        ],
        correct: 1
    },
    {
        text: "Which animal is known for eusocial behavior?",
        answers: ["Ant", "Tiger", "Elephant", "Bear"],
        correct: 0
    },
    {
        text: "What does 'endangered species' mean?",
        answers: [
            "Species with many individuals",
            "Species at risk of extinction",
            "Species that live in water",
            "Species that eat plants"
        ],
        correct: 1
    },
    {
        text: "Which factor most affects animal extinction?",
        answers: [
            "Weather only",
            "Human activities",
            "Animal size",
            "Color of fur"
        ],
        correct: 1
    },
    {
        text: "What is adaptive evolution?",
        answers: [
            "Animals staying the same",
            "Changes that improve survival in an environment",
            "Animals sleeping more",
            "Animals eating less"
        ],
        correct: 1
    },
    {
        text: "Which animal is capable of regenerating lost limbs?",
        answers: ["Starfish", "Dog", "Cat", "Bird"],
        correct: 0
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}