# CRISP Mobile App Deploy Notes

CRISP is both a web app and a mobile app, using a common AWS Amplify hosted backend. The deployment process for the mobile app is dependent on the backend deployment, which is triggered by the web app.

## Deploying Mobile App

There are two types of mobile app releases: Over the Air (OTA) and Native Build.

### 1. Over the Air (OTA) Deployment

For minor changes that do not require interaction with iOS libraries:

- [ ] Check `nvm current` (should be version 14).
- [ ] Check `amplify --version` (must match the backend environment version).
- [ ] Pull the appropriate environment with `amplify pull --appId <AppID> --envName dev`.
  - If errors occur about region mismatch, remove the amplify folder and try again.
- [ ] Verify amplify pull did not unintentionally update `schema.js`.
  - **Git stash any unintended changes to `schema.js`.**
- [ ] Run `npm install`.
- [ ] Double-check environment with `cat src/aws-exports.js`.
- [ ] Run `npx standard-version --release-as X.X.X` to bump the version.
- [ ] Push changes (especially those in `package.json` and `app.json`) to GitHub with a commit message like "Bump patch for OTA release."
- [ ] Set environment variables: `export APP_ENV=dev` and `export CRISP_ENV=dev`.
- [ ] Ensure the release channel in the `publish_ota_production.sh` script matches the last native build.

### 2. Native Build Deployment

For changes requiring iOS library updates, follow these steps:

- [ ] Check `nvm current` (should be version 14).
- [ ] Check `amplify --version` (7.6.15).
- [ ] Run `npm install`.
- [ ] Pull the appropriate environment with `amplify pull --appId <AppID> --envName dev`.
  - Ensure amplify pull did not update `schema.js` unless intended.
- [ ] Check environment with `cat src/aws-exports.js`.
- [ ] Run `npx standard-version --release-as X.X.X` to bump the version (minor version for native code changes).
- [ ] Push changes to GitHub with a commit message like "Bump minor version."
- [ ] Run the appropriate script from the `expo-build` folder (e.g., `build_ios_dev.sh` for dev builds).
  - For production builds, rename the release channel to the minor version.
- [ ] Set environment variables: `export CRISP_ENV=dev`.
- [ ] Go to the Expo project page and submit the new build to the app store.

### EAS Native Build Instructions

- Skip the TestFlight upload as EAS handles it.
- Ensure environment variables in `eas.json` and scripts are correct.
- Run `standard-version` as described above.
- Execute the appropriate script in `build-scripts` for the EAS build (e.g., `eas-build-ios-dev.sh`).

### 3. Expo (EAS) Build

For changes requiring iOS library updates, follow these steps:

- [ ] Ensure proper versions of Node, Amplify, + Expo. Install dependencies if necessary.

- [ ] To ensure the backend is up-to-date, pull the appropriate environment with `amplify pull --appId <AppID> --envName dev`. (for production build pull `prod`, for development build pull `dev` etc.)
  - Ensure amplify pull did not update `schema.js` unless intended.

- [ ] Check environment in `src/aws-exports.js`. If development, endpoints will end with `dev` and so on.

- [ ] In the `build-scripts/Prebuild` directory run `eas-json-updater.js`. Follow the prompts to update the version numbers and release channel. Or run `node ./build-scripts/Prebuild/eas-json-updater.js`.

- [ ] In the `build-scripts/ManualRelease/EASbuild` directory run `build_ios_dev.sh`. Watch on `expo.dev/accounts/criterium-engineers/projects/crisp-dev` to see any errors in the build. Only move to the next step if the build succeeds. Or run `./build-scripts/EASbuild/ManualRelease/build_ios_dev.sh`.

- [ ] In the `build-scripts/ManualRelease/EASbuild` directory run `submit_ios_dev.sh`. Wait for the submit to complete. Or fun `./build-scripts/EASbuild/ManualRelease/submit_ios_dev.sh`

  - [ ] If only for internal testing on testflight, look at those instructions below.
  - [ ] If for production on appstore connect, look at those instructions below.

- [ ] Push changes to GitHub with a commit message like "Bump minor version."

### App Store Connect Production Submission

Go to <https://appstoreconnect.apple.com/teams/9437acc2-e109-4f69-9268-63d43a1d8e23>

- [ ] Select the proper build, for development you will select `DevCRISP` and so on.
- [ ] **For TestFlight select the TestFlight tab**:
- [ ] Add individuals to a group:
  - [ ] Under the `INTERNAL TESTING` menu, you will see groups. Click on that group to add new individuals. Only individuals that have access to that app will appear.
- [ ] Give an individual access to an app:
  - [ ] Go to the `Users and Access` tab in the header. Search for the individual and edit their profile to add the proper app OR add a new individual. We are using the role `Customer Support` for users that have volunteered to test.
- [ ] Add Group to the build:
  - [ ] Click the dropdown arrow next to the version you just build.
  - [ ] Place your cursor under `GROUPS` and add the appropriate group to the build. This will trigger a notification to the apple devices connected to their appleId as well as an email to that account.

### Steps to add above

- Apple Push Notification service (APNs): This is a service included in the app or a library in our app. There has to be an App ID enabled for this service to work and for the app to properly submit to Apple. Do this by:
  - going to Apple Developer, under Certificates, Identifiers & Profiles, select Identifiers.
  - Locate the App ID and ensure that Push Notifications are enabled.
  - If no certificates, follow these steps to create one: [Create Certificate](https://developer.apple.com/help/account/create-certificates/create-a-certificate-signing-request)
