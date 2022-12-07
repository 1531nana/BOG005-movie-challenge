module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx, tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest",
        "\\.(jpg|jpeg|png|svg)$": "babel-jest"
      },


      transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
      transformIgnorePatterns: ['<rootDir>/node_modules/'],
}