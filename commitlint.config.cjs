module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert']],
    'scope-empty': [1, 'never'],
    'subject-full-stop': [2, 'never', '.'],
  }
};