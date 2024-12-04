## CRISP Mobile Release

<details>
<summary><b>CRISP 1.5.2</b></summary>

### Notes

- This release includes updates to scoped IOC/NCI counts and fixes for duplicated favorite projects.

### Features

1. **Scoped IOC/NCI Counts on Badges**:
   - IOC/NCI counts on badges at the top of inspections are now scoped by phase, ensuring consistency with the report.

### Bug Fixes

1. **Duplicate Favorite Projects**:
   - Resolved an error caused by duplicated favorite projects.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.5.1</b></summary>

### Notes

- This release includes updates for inspection type management and a new app icon to differentiate it from other Criterium mobile apps.

### Features

1. **Infrared Inspection Type**:
   - Added a new inspection type for Infrared, expanding the app's functionality for specialized inspections.
2. **New App Icon**:
   - Introduced a new app icon to differentiate this app from other Criterium mobile applications.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.5.0</b></summary>

### Notes

- This release includes updates for inspection type management and a new app icon to differentiate it from other Criterium mobile apps.

### Features

1. **Infrared Inspection Type**:
   - Added a new inspection type for Infrared, expanding the app's functionality for specialized inspections.
2. **New App Icon**:
   - Introduced a new app icon to differentiate this app from other Criterium mobile applications.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.4.5</b></summary>

### Notes

- This release adds support for phase ID handling and includes bug fixes for milestone table issues during new inspections.

### Features

1. **Phase ID Handling**:
   - Added code to start filling in phase IDs, laying the groundwork for limiting the download of inspections that belong to inactive phases.

### Bug Fixes

1. **Milestone Table on New Inspections**:
   - Resolved an issue that caused the milestone table to be missing when creating a new inspection.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.4.4</b></summary>

### Notes

- This release includes updates to inspection type management and backend data recording for troubleshooting.

### Features

1. **Inspection Type Dropdown Updates**:
   - Removed `Mock Up` and `Air Barrier` from the inspection type dropdown.
2. **Data Usage Recording**:
   - App data usage is now recorded on the backend to facilitate troubleshooting.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.4.3</b></summary>

### Notes

- This release improves data handling and introduces new features for app version tracking and data model enhancements.

### Features

1. **App Version Stored in Backend**:
   - The user's app version is now stored in the backend database, reducing the need for email inquiries about app versions.
2. **Data Model Enhancements**:
   - Added new fields to the data model to prepare for limiting the download of completed phases to iPads, reducing data usage and storage needs.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.4.2</b></summary>

### Notes

- This release addresses technical debt by upgrading the libraries the Mobile application relies on and fixes issues with photo upload counts in settings.

### Features

1. **Pending Photo Upload Count**:
   - The settings now accurately display all photos waiting to be synced, including failed and in-process transfers.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

1. **Library Upgrades**:
   - Updated underlying libraries to improve performance, maintainability, and compatibility.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.4.0</b></summary>

### Notes

- This release adds functionality for photo ordering and improves the responsiveness of prior items after deleting closing observations.

### Features

1. **Drag and Drop Photo Ordering**:
   - Users can now drag and drop photos into a specific order, which will be reflected on the Standard Report.

### Bug Fixes

1. **Improved Prior Items Updates**:
   - Prior items now update more quickly after deleting a closing observation, reducing the likelihood of closing an observation multiple times.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.3.1</b></summary>

### Notes

- This is a Native Build Update available through the App Store. Users do not need to turn off Auto-Updates but can manually update if preferred.

### Features

1. **Correction / Resolution Date**:
   - Users can now set a correction/resolution date that differs from the inspection date to handle off-cycle corrections received virtually.
   - **Note**: Add a notation to the Field Notes and Internal Comments to reference the date change.
2. **Submitting Status Indicator**:
   - The status badge will now display “Submitting” until the app confirms the Web side has updated to Submitted status, after which it will update to “Submitted.”
3. **New Scroll Bar for Phase Selection**:
   - Projects with more than three Phases now display a scroll bar for improved Phase selection during a new inspection.

### Bug Fixes

1. **OTA Bug Fix**:
   - Resolved the bug introduced with the last over-the-air (OTA) update.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.2.3</b></summary>

### Notes

- This release introduces changes to the camera module for improved photo capturing capabilities within CRISP.

### Features

1. **Take Another Photo**:
   - Updated the camera module to allow multiple photo captures from within CRISP.
   - **Note**: This change breaks the undocumented feature of using volume buttons to activate the shutter. A solution is planned and in the backlog.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.1.4</b></summary>

### Notes

- Significant work has been done to improve performance in the Mobile application, making it more responsive and reliable.

### Features

1. **Switched to SQLite for On-Device Data Storage**:
   - Transitioned to a more responsive system for storing inspection data and photos.
2. **Reduced Screen Re-Renders**:
   - Decreased the number of times screens are re-rendered based on new data arriving on the device, improving overall app performance.
3. **Updated Sync Status Indicator**:
   - Enhanced the sync status indicator to provide EFTs with better visibility into when the app is busy syncing.
4. **Added Observation Creation Delay**:
   - Introduced a waiting delay on creating new Observations to ensure all data is present before the Observation is created, reducing errors that prevented Observations from syncing off the mobile device.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

--

<details>
<summary><b>CRISP 1.1.3</b></summary>

### Notes

- This release does not include Mobile-specific features or fixes but focuses on updates to the Web application.

### Features

- None specific to this release.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.1.2</b></summary>

### Notes

- This release resolves issues with favorites and photo sync and adds new features for Observation descriptions and PAS report outputs.

### Features

1. **PAS Report Output**:
   - The PAS report output now includes all unreviewed NCI and IOC observations.
2. **Report Output Provider**:
   - Switched from the SaaS version of JSReports to the self-hosted version to mitigate timeouts.
3. **Swap Observation Text for Primary Location/Primary Photo Description**:
   - Observation Text is now replaced with the Description of the Primary Photo from the Primary Location.

### Bug Fixes

1. **Favorites Management**:
   - Removed the ability to add/remove favorites within individual Projects. Favorites can now only be managed from the Projects > All screen to resolve issues with favorites syncing and UI inconsistencies.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.1.1</b></summary>

### Notes

- This release improves notification handling, inspection data export, and photo troubleshooting capabilities on the Mobile app.

### Features

1. **Status Change Notifications**:
   - Users associated with a Project (e.g., EFT, Project Admin, Reviewing Engineer) now receive email notifications of status changes in inspections.
2. **Display Phase on Inspection List**:
   - The Phase Name is now displayed in the Project Details > Inspections screen. Formatting improvements will follow in a future release.

### Troubleshooting Features

1. **Export Single Inspection Data**:
   - In rare cases of inspection data not saving to local storage, users can export inspection data through the triple-dot menu. Data is sent via email for support troubleshooting.
2. **Find Orphaned Photos**:
   - Added the ability to recover orphaned photos from iPad storage that did not sync to the backend. Users can navigate to the Settings screen and tap "Recover Photos" to create a new album in the Photos app containing these orphaned photos.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.1.0</b></summary>

### Notes

- This release introduces performance improvements and new features for milestone workflows and location management on the Mobile app.

### Features

1. **Designate Primary Location Group**:
   - The Primary Location Group now displays first on Mobile. Additional Location Groups have a hamburger menu with options to Set as Primary or Delete.
2. **Milestone Inspection Workflow**:
   - Milestones in a Template are now automatically selected when creating a New Inspection, simplifying the workflow.

### Bug Fixes

1. **Mobile Performance Improvements**:
   - Improved performance by removing certain aggregations, particularly in the My Projects, All Projects, and Project Details > Inspections screens.
2. **Order of Milestones Not Being Respected**:
   - Milestones now display in the correct order as defined in the Milestone Template.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.0.14</b></summary>

### Notes

- This release focuses on resolving critical bugs affecting the functionality and usability of Observations and Inspections.

### Features

- None specific to this release.

### Bug Fixes

1. **Deleting Observations Bug**:
   - Fixed an issue where deleting an Observation with a custom Inspection Point caused the Inspection Point to be removed from other Observations, leaving them in an uneditable state.
2. **Inspections Stuck on iPad**:
   - Resolved occurrences of Inspections becoming "stuck" on the iPad by improving how the user record is persisted.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.0.13</b></summary>

### Notes

- This release focuses on improving the usability of phases, milestones, and inspection details in the Mobile app.

### Features

1. **Landscape Mode**:
   - The Mobile app can now be used in Landscape mode. Note that vertical scrolling may not always be optimal.
2. **Project Details > Outstanding Items Scoped to Phase**:
   - Users can now scope the Project Details > Outstanding Items view to any single phase or view a holistic project view by default.
3. **Inspection Details > Prior Items and Observations**:
   - Prior Items and Observations in the Inspection Details view are now scoped to the phase they are associated with.
4. **Milestone Inspection Usage**:
   - Enhanced functionality for completing "Milestone"-type inspections:
     - New UI controls allow EFTs to select a Phase or Unit for inspections.
     - Milestone visits versus Correction visits are tracked on the backend without additional user input.
     - **Note**: Currently, milestones can only be selected during the New Inspection workflow. Future releases will allow modification.
5. **Milestone Inspection Workflow Enhancements**:
   - Added user interface controls to the Inspection Details view for selecting Phases or Units associated with milestones.

### Infrastructure Updates

1. **Upgrade the AWS Amplify CLI**:
   - Upgraded AWS Amplify CLI to address common data issues, reducing the frequency of reported problems.

### Bug Fixes

- None specific to the Mobile application.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>CRISP 1.0.12</b></summary>

### Notes

- This release adds new features for photo management and introduces improved functionality for inspection workflows.

### Features

1. **Project Phase**:
   - Users must now choose a Phase when creating an Inspection if more than one Phase is defined at the Project.
   - **Note**: Observation scoping to phases is not yet available and will be addressed in a future release.
2. **Save Photos to Library**:
   - While in an Inspection, users can choose to save all photos to an album in the Apple Photos app via the Quick Action Menu.
3. **Share Photo**:
   - Users can long-press any photo to share it via standard Apple methods (e.g., Airdrop, Mail, Notes).
   - **Note**: Sharing via mail currently does not attach the image, which will be fixed in a later release.
4. **Add Multiple Photos from Library**:
   - Users can add multiple photos from the system Photos library (limited to 5 at a time for performance reasons).
5. **Unable to Delete Location**:
   - Fixed an issue where Location Groups could not be successfully deleted from Observations.

### Bug Fixes

1. **Unable to Delete Location**:
   - Resolved an intermittent issue where users could not delete Location Groups from Observations.

### Backend Changes

- None specific to this release.

### Other Changes

- None specific to the Mobile application.

</details>

---

<details>
<summary><b>CRISP 1.0.11</b></summary>

### Notes

- This release introduces features to improve the user experience and prevent accidental data loss.

### Features

1. **Preliminary Action Summary (PAS)**:
   - Enabled PAS report generation via the 3-dot menu within an inspection on the Mobile app. The PAS template is a work-in-progress, currently displaying only NCIs in the last-generation report format.
2. **Confirmation for Destructive Changes**:
   - Users now receive a warning before performing destructive actions like deleting observations, locations, photos, or inspections.
3. **Inspection Number Enhancement**:
   - Users can now choose predefined inspection types (e.g., Standard, Specialty - Window Water Test) when creating a new inspection.
4. **Delete Inspection**:
   - Users can now delete an inspection if it is in an Active state. This action is irreversible and must be used carefully.

### Bug Fixes

1. **Inspection Details**:
   - Fixed an issue where details such as Arrival Time or Check-in sometimes disappeared.
2. **Duplicate Favorites**:
   - Resolved a bug causing duplicate Favorite Projects to appear in the app.

### Backend Changes

1. **Data Updates**:
   - Modified data for several inspections as requested by the Criterium Team. Added work items to enable authorized users to make similar updates in the future.

### Other Changes

- None specific to the Mobile application.

</details>

---

<details>
<summary><b>CRISP 1.0.10</b></summary>

### Notes

- This release focuses on enhancing the user experience and resolving critical bugs.

### Features

1. **Change Observation Type**:
   - Users can now change the type of an observation even after navigating away from the screen. Previously, this was restricted once an observation was created.

### Bug Fixes

1. **Dash in Project Code**:
   - Resolved an issue where dashes in project codes caused problems with Observation IDs.
2. **Untyped Observations**:
   - Fixed a bug where entering details in a specific order (e.g., photos before text) resulted in untyped observations.
3. **Username Case Sensitivity**:
   - Updated the system to handle usernames case-insensitively, preventing mismatches between Web and Mobile.
4. **Double Tapping Observation Types**:
   - Resolved an issue causing duplicate observations to spawn when types were double-tapped.
5. **Site Check-In Search**:
   - Fixed an issue where the keyboard minimized after each character typed in the Site Check-In search field.
6. **Location Tags**:
   - Resolved a bug that prevented adding a location if it was a partial match to an existing tag.

### Backend Changes

1. **Backdating of Closing Observations**:
   - Added the ability to backdate closing observations for easier migration of historical reports.
2. **New Contacts**:
   - Contacts can now be saved without an email address or phone number.
3. **Report Enhancements**:
   - Improved report readability with better formatting.

### Other Changes

- Various non-user-facing updates to improve overall performance and reliability.

</details>
