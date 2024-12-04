# CRISP Project Workflow Guidelines

## Preamble

The goal of this workflow is to ensure smooth, timely development progress. The developer writing the code is responsible for ensuring it follows this process. Team members are expected to collaborate and assist as needed.

## Quick Workflow Checklist

For a quick reference guide to the workflow, please refer to [crisp-workflow-checklist](crisp-workflow-checklist.pdf).

This checklist summarizes the key steps for creating branches, committing code, performing code reviews, and merging. Use it every time to ensure the proper workflow is followed.

## Git Workflow

## Staging and Master Branches

- **Master Branch:** The `develop` branch is used for active development and should always be kept in a deployable state. After feature branches are merged into `develop`, deployments are triggered as outlined in the deploy process.

- **Staging Branch:** The `main` branch acts as the staging branch, where releases are tested before merging into production. It serves as the final step before production deployment. See [crisp-mobile-deploy-notes](crisp-mobile-deploy-notes.pdf)

### New Code

1. **Create Branch**
   - Always branch from the `develop` branch.
   - Name your branch according to the following conventions: [branch-naming-conventions](branch-naming-conventions.pdf)
   - Push the branch to the remote repository immediately after creating it.

2. **Make Changes**
   - Ensure all build tasks and unit tests are running.
   - Commit changes daily with clear, descriptive commit messages.
   - Test all changes locally before committing.

3. **Push Changes**
   - Pull the latest changes from the `develop` branch into your local branch to keep it up to date.
   - Squash any irrelevant commits (e.g., `[WIP]` commits).
   - Ensure all commit messages are clear and relevant to the work done.
   - Push your branch to the remote repository.

4. **Pull Request**
   - Create a pull request into the `develop` branch.
   - Add a descriptive title and a bullet-point list of changes (changelog).
   - Notify the assigned reviewer on Teams or Discord.

5. **Code Review**
   - Reviewers must:
     - Acknowledge the request and provide a timeframe for review.
     - Pull down the branch, install dependencies (`npm install`), run `amplify pull`, and log out/in of the app to ensure no local issues.
     - Check for architectural improvements, confusing code, potential issues, and appropriate test coverage.
     - Provide detailed feedback if issues are found.
     - If no issues exist, merge the branch into `develop` and notify the branch owner.

## Project-Specific Information

1. **Sync Logic:** The goal is to toggle AWS Amplify auto sync on/off. When auto sync is off, users can manually sync data by pressing a button. This avoids sync loops in areas with low connectivity.

2. **Commit and Push Frequency:** Push code daily to avoid delays in team progress.

3. **Reviewer Responsibilities:**
   - Pull down the code.
   - Log out and back into the app to ensure proper sync of local data.
   - Provide thorough, timely feedback.

## Additional Guidelines

1. **Communication of Deadlines:**
   - If one developer requests a task during specific hours (e.g., 3-6 PM EST), it should be completed or communicated why it is not done by the next working day.

2. **Push Code to Git Regularly:**
   - ClickUp task tracking alone is insufficient; the code needs to be pushed up regularly for visibility and review.

3. **Meeting Accountability:**
   - Weekly meetings with the VP and President require showing real progress in the app. Ensure code changes are pushed up before the meeting.

## Development Schedule

- **Sarah:** Works from 7 AM - 3 PM EST.
- **Austin:** Works from 10 AM - 6 PM EST.

## Final Notes

This document is subject to ongoing improvements. Team members should always use their best judgment and prioritize the smooth progression of tasks. Regular and open communication is key to overcoming challenges.
