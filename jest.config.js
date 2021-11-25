module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
