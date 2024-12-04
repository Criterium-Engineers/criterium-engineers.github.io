# CRISP Workflow Checklist

## 1. Create a New Branch

- [ ] Branch from `develop`.
- [ ] Use proper naming conventions: [branch-naming-conventions](branch-naming-conventions.pdf)
- [ ] Push the branch to Git immediately after creation.

## 2. Make Daily Commits

- [ ] Test all changes locally before committing.
- [ ] Commit code daily with clear, descriptive commit messages.

## 3. Pull Changes from `develop`

- [ ] Pull the latest changes from `develop` into your local branch.
- [ ] Resolve any conflicts as necessary.

## 4. Push Changes to Remote

- [ ] Push your branch regularly to the remote repository.
- [ ] Ensure all commits are descriptive and relevant to the work.

## 5. Submit a Pull Request

- [ ] Create a pull request to the `develop` branch.
- [ ] Add a descriptive title and bullet-point changelog.
- [ ] Notify the reviewer via Teams or Discord.

## 6. Review Process

- Reviewer should:
  - [ ] Pull the branch, install dependencies (`npm install`), and run `amplify pull`.
  - [ ] Log out and back into the app to ensure local data is correct.
  - [ ] Check for confusing code, architectural improvements, and potential issues.
  - [ ] Provide feedback if changes are needed.
  - [ ] Notify team of PR feedback.
  - [ ] If no changes are required, move to step 7.

## 7. Merge Code

- [ ] After review and approval, merge the branch into `develop`.
- [ ] Notify the team when the branch has been merged.

## 8. Keep Branches Up-to-Date

- [ ] Once code is merged into `develop`, merge `develop` into any active branches to keep them up-to-date.

## 9. Additional Guidelines

- Additional Tasks
  - [ ] In meeting task requests completed by next business day or communcated why it isn't complete.
  - [ ] Ensure code changes are pushed up before the weekly CRISP update meetings with Criterium leadership

---

Follow these steps for each task or feature to ensure smooth and consistent progress in the CRISP project.
