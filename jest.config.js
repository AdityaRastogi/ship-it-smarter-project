module.exports = {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    transformIgnorePatterns: [
      'node_modules/(?!@vue/test-utils|vue)',
      "<rootDir>/src/assets/.*" ,
      'node_modules/(?!vuetify)'
    ],
    moduleNameMapper: {
        "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/tests/fileMock.js',
        '\\.(css|scss|sass|less)$': "<rootDir>/src/tests/styleMock.js",
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      setupFilesAfterEnv: ['<rootDir>/src/tests/setupVuetify.js']
  };
  