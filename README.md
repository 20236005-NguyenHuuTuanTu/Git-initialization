# Commit Convention

### Structure: `<type>(<scope>): <description>`

### Supported Types:

- **feat**: A new feature (e.g., `feat(auth): add google login`)
- **fix**: A bug fix (e.g., `fix(api): resolve memory leak`)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **docs**: Documentation only changes (e.g., `docs: update readme`)
- **style**: Formatting, missing semi colons, etc; no code change
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Important Rules
- The `description` must start with a lowercase letter.
- Do not use a period (`.`) at the end of the commit message.
- Specify the affected module in parentheses (e.g., `(api)`, `(ui)`).
- Use "add" instead of "added" or "adds".