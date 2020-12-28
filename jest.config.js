module.exports = {
    roots: ["<rootDir>/src", "<rootDir>/test"],
    testMatch: [
        "**/test/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "verbose": true
};
