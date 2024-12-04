<h1 align="center">CRISP Web Release</h1>

<div style="margin-left: 600px; margin-right: 600px;">

<details>
<summary><b>07/10/2023 Release</b></summary>

### Notes

- This release enhances the inspection overview page with activity tracking, adds sorting to inspection list views, and introduces a new report type.

### Features

1. **Activity Tracker Updates**:
   - The activity tracker on the inspection overview page now displays updates done on mobile and via the API.
2. **Sortable Inspection List Views**:
   - Phases in the inspection list views are now sortable, improving usability.
3. **'Site Not Ready' Report**:
   - Introduced a new "Site Not Ready" report to assist with inspection documentation.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details >
<summary><b>05/30/2023 Release</b></summary>

### Notes

- This release focuses on frontend library updates and enhancements to the water test report.

### Features

1. **Frontend Library Updates**:
   - Updated frontend libraries to the latest versions. The login dialog now has a slightly updated appearance.
2. **Water Test Report Updates**:
   - Added standard language, equipment certification links, and new hierarchy nodes for recording specimen pass/fail and equipment observations.
   - Instructions for using the updated template will be provided in a separate email.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details >
<summary><b>01/27/2022 Release</b></summary>

### Notes

- This release introduces observation conversion functionality, photo annotation updates, and new templates.

### Features

1. **Convert Observation Types**:
   - Added the ability to convert observations between IOC, NCI, and Conforming types. Annotation colors in photos are also updated accordingly.
2. **Kessler Report Template**:
   - Introduced a new Kessler report template.
3. **Inspection Point Editing**:
   - Removed the "Promote to Global" button from inspection point editing.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>12/23/2022 Release</b></summary>

### Notes

- This release introduces new features for inspection reviewer changes and email distribution lists, along with bug fixes for formatting and missing fields.

### Features

1. **Change Reviewer in Reviewing Status**:
   - Users can now change the reviewer for an inspection while it is in reviewing status.
2. **Email Distribution List**:
   - Added an email distribution list to projects to prepare for emailing reports directly from CRISP.

### Bug Fixes

1. **Distribution List Formatting**:
   - Resolved formatting issues where long distribution lists would break across the page.
2. **Black Screens from Missing Fields**:
   - Fixed issues causing black screens due to missing fields.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>10/05/2022 Release</b></summary>

### Notes

- This release introduces scoped IOC/NCI counts on the overview page and inspection status updates in the overview tab.

### Features

1. **Inspection Status Updates in Overview Tab**:
   - Inspection status updates are now displayed at the bottom of the overview tab, improving visibility.
2. **Scoped IOC/NCI Counts**:
   - IOC/NCI counts on the overview page are now scoped by phase, ensuring consistency with the report.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>08/29/2022 Release</b></summary>

### Notes

- This release introduces functionality for creating inspections directly on the Web and includes a bug fix for inspection aging status calculations.

### Features

1. **Create Inspections on Web**:
   - Users can now create inspections directly from the Web application, expanding the platform's capabilities.

### Bug Fixes

1. **Inspection Aging Status**:
   - The aging status of inspections on the dashboard now accounts for working days only. Holidays are not included in the calculation (yet).

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>07/17/2022 Release</b></summary>

### Notes

- This release introduces functionality for managing observations in the CSI hierarchy and includes fixes for photo annotation screens.

### Features

1. **Move Observations in CSI Hierarchy**:
   - Added the ability to move an observation to a new spot within the CSI hierarchy, providing greater flexibility in organizing inspection data.

### Bug Fixes

1. **Photo Annotation Screen Adjustment**:
   - Resolved an issue where the lower part of the photo was covered by the text annotation box, ensuring a better user experience.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>07/17/2022 Release</b></summary>

### Notes

- This release introduces functionality for managing observations in the CSI hierarchy and includes fixes for photo annotation screens.

### Features

1. **Move Observations in CSI Hierarchy**:
   - Added the ability to move an observation to a new spot within the CSI hierarchy, providing greater flexibility in organizing inspection data.

### Bug Fixes

1. **Photo Annotation Screen Adjustment**:
   - Resolved an issue where the lower part of the photo was covered by the text annotation box, ensuring a better user experience.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>06/27/2022 Release</b></summary>

### Notes

- This release introduces new features for reviewing engineers and enhances the inspection view with a cover letter tab.

### Features

1. **Dashboard for Reviewing Engineers**:
   - Added a dedicated dashboard to assist reviewing engineers in managing and reviewing inspections more effectively.
2. **Cover Letter Tab in Inspection View**:
   - Introduced a cover letter tab in the inspection view, initially designed for use with infrared thermographic inspections.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>06/10/2022 Release</b></summary>

### Notes

- This release introduces new features for managing IOCs/NCIs and stage notes, along with fixes for annotation colors and report formatting.

### Features

1. **Close Current and Prior IOCs/NCIs**:
   - Added functionality to close both current and prior IOCs/NCIs, streamlining the process for managing inspection corrections.
2. **Create and Modify Stage Notes**:
   - Users can now create and modify stage notes, enhancing documentation capabilities during inspections.

### Bug Fixes

1. **Annotation Color for Correction Observations**:
   - Updated the annotation color for correction observations to green for consistency.
2. **Milestone Table Formatting**:
   - Fixed an issue where the milestone table on standard reports would break across pages.
3. **Standard Report Header Padding**:
   - Adjusted the padding on the header of the standard report to ensure it does not slip under report sections.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>05/12/2022 Release</b></summary>

### Notes

- This release introduces enhancements to observation creation, project setup, and PAS reports, along with bug fixes for report formatting and project name handling.

### Features

1. **Create Observations in Reviewing or Revising Status**:
   - Observations can now be created even when an inspection is in Reviewing or Revising status.
2. **Project Code Requirement Removed**:
   - A project code is no longer required when creating a new project.
3. **Phase Included in Status Update Emails**:
   - Status update emails now include the inspection phase if one is assigned.
4. **PAS Report Disclaimer**:
   - Updated the disclaimer language on PAS reports with milestone stamps to be more general-purpose.

### Bug Fixes

1. **Report Header Formatting**:
   - Resolved issues with long addresses and company names overlapping the report content by reformatting the page header.
2. **Project Names with Special Characters**:
   - Fixed errors in report generation caused by project names containing special symbols (e.g., `&`).

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>04/20/2022 Release</b></summary>

### Notes

- This release introduces new functionality for managing prior items and hierarchy visibility while resolving critical bugs.

### Features

1. **Prior Items in Inspection View**:
   - Prior items are now visible directly in the inspection view, improving access to historical inspection data.
2. **Hierarchy Items Hidden Attribute**:
   - Added the ability to set a hidden attribute for hierarchy items using a checkbox. This feature will be used to scope down the hierarchy visible on the iPad in the future.
3. **Closing Observation Text**:
   - The text for a closing observation is now automatically pulled from the primary photo description, eliminating the need to set it in multiple places.

### Bug Fixes

1. **Missing Arrival Time Warning**:
   - Added a warning message to notify users if the EFT forgets to set the arrival time.
2. **Report Rendering for Large Data Sets**:
   - Fixed an issue where reports with over 100 inspections failed to render correctly.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>04/05/2022 Release</b></summary>

### Notes

- This release focuses on addressing technical debt by upgrading the libraries the Web application relies on. No new Web-specific features were introduced.

### Features

- None specific to this release.

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
<summary><b>02/02/2022 Release</b></summary>

### Notes

- This release introduces a new custom report template and resolves an issue with the pending tab for observations.

### Features

1. **Custom Report Template for Fairfield Residential**:
   - A new custom report template has been added to support Fairfield Residential.

### Bug Fixes

1. **Pending Tab for Observations**:
   - Fixed an issue where the pending tab for observations was not functioning correctly.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>01/11/2022 Release</b></summary>

### Notes

- This release introduces enhancements to photo ordering, observation management, and restructuring of the PAS Report on the Web application.

### Features

1. **Reorder Inspection and Observation Photos**:
   - Users can now drag and drop photos into a specific order, which will be reflected in the Standard Report.
2. **Delete an Observation**:
   - Observations can now be deleted when an inspection is in Reviewing or Revising status.
3. **PAS Report Restructuring**:
   - The PAS Report has been restructured with the following changes:
     - **All Open NCIs/IOCs**: Includes both prior items and unreviewed new items.
     - **Newly Closed NCIs/IOCs**: Includes any reviewed or unreviewed corrections that have not appeared on previous reports. This also includes items closed on the associated inspection date and corrections with overridden dates created with this report.
     - The PAS will no longer print the full record of all prior items if they appeared closed on a previous report.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>12/20/2021 Release</b></summary>

### Notes

- This release introduces new features for handling correction/resolution dates, submission statuses, and phase selection on the Web application.

### Features

1. **Correction / Resolution Date**:
   - Users can now set a correction/resolution date that differs from the inspection date to handle off-cycle corrections received virtually.
   - **Note**: Add a notation to the Field Notes and Internal Comments to reference the date change.
2. **Submitting Status Indicator**:
   - Reviewing Engineers can now start a review for reports that display either Submitted or Submitting status.
3. **New Scroll Bar for Phase Selection**:
   - Projects with more than three Phases now display a scroll bar for improved Phase selection during a new inspection.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>12/01/2021 Release</b></summary>

### Notes

- This release introduces new functionality for managing closing observation dates and ensures consistency in photo order between the Web app and reports.

### Features

1. **Change Date on Closing Observation**:
   - Users can now change the date on a closing observation to be different from the inspection date.
2. **Consistent Photo Order**:
   - The order of site progress and observation photos in reports will now match the order in which they appear in the Web application.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>10/25/2021 Release</b></summary>

### Notes

- This release includes backend changes to facilitate more rapid development and deployment, along with a fix for Standard Report Output.

### Features

1. **Extra Locations on Standard Report Output**:
   - Resolved an issue where "extra" locations were not printing out on the Standard Report Output. These are now included as expected.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- Backend improvements to support faster development and deployment.

### Backend Changes

1. Enhanced infrastructure to streamline future development processes.

</details>

---

<details>
<summary><b>10/08/2021 Release</b></summary>

### Notes

- This release introduces changes to the standard report, enhancing the organization and readability of inspection data.

### Features

1. **Open IOCs and NCIs Ordering**:
   - Open IOCs and NCIs are now ordered by date and then code in ascending order, making it easier to review.
2. **Milestone Visit Log Relocation**:
   - The additional inspection log for milestone visits has been moved to the end of the field notes section.
3. **Field Notes Layout Update**:
   - Field notes are now displayed in two columns for a less crowded and more organized appearance.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>09/29/2021 Release</b></summary>

### Notes

- This release focuses on significant performance enhancements for the Mobile application. No Web-specific features or updates are included in this release.

### Features

- None specific to the Web application.

### Bug Fixes

- None specific to this release.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>09/09/2021 Release</b></summary>

### Notes

- This release introduces enhancements to inspection number filtering and site progress photo management on the Web application.

### Features

1. **Inspection Number Helper Enhancement 2**:
   - The inspection number helper now filters by the current inspection phase, making it easier for Reviewing Engineers and Admins to assign accurate inspection numbers.
2. **Site Progress Photo Uploads**:
   - Users can now upload Site Progress Photos from the CRISP Web application to any Inspection that is in an editable status.

### Bug Fixes

- None specific to the Web application.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>08/26/2021 Release</b></summary>

### Notes

- This release addresses several improvements in inspection numbering, PAS report output, and contact management on the Web application.

### Features

1. **Inspection Number Helper Enhancement**:
   - Added a Phase to assist Reviewing Engineers and Admins in properly numbering inspections.
2. **PAS Report Output**:
   - The PAS report output now includes all unreviewed NCI and IOC observations.
3. **Report Output Provider**:
   - Switched from the SaaS version of JSReports to the self-hosted version to mitigate timeouts.
4. **Report Output Change - Milestones**:
   - The report output for Milestone inspections now includes ALL milestones, regardless of whether an inspection has been conducted against them.
5. **Project Details > Contacts**:
   - Contacts previously associated with a client are now prioritized at the top of the list when adding new contacts.

### Bug Fixes

- None specific to the Web application.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>08/12/2021 Release</b></summary>

### Notes

- This release introduces features for enhanced project management and status notifications, along with troubleshooting updates for Mobile.

### Features

1. **Status Change Notifications**:
   - Users associated with a Project (e.g., EFT, Project Admin, Reviewing Engineer) now receive email notifications of status changes in inspections.
2. **Project Path**:
   - A new field has been added to Project Details to store the Project Path attribute from the Criterium ERP system (currently InFocus).

### Troubleshooting Features

- None specific to this release.

### Bug Fixes

- None specific to the Web application.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>07/27/2021 Release</b></summary>

### Notes

- This release adds enhancements for managing photos, milestone workflows, and weather data on the Web application.

### Features

1. **Designate Primary Location Group**:
   - Users can now designate the Primary Location Group using a checkbox in Edit mode. This determines what appears in the Report Output Template grids.
2. **Add Photos to Observations**:
   - Users can now add photos to NCI/IOC/CI Observations while in Edit mode for Submitted or In Review status. Photos appear after exiting Edit mode.
3. **PDF Report Output Naming**:
   - PDF reports are automatically named using the format: `Client Name - Project Name - Phase (if available) - Inspection # (including code, if not Standard) - Inspection Date (MM-DD-YYYY).pdf`.
4. **Manual Weather Editing**:
   - Weather conditions can now be edited directly in the Inspection Details section. This feature helps when historical Weather API data is unavailable or incorrect.

### Bug Fixes

1. **Template Status Column**:
   - Fixed an issue where the Status column in the Templates section was not properly populating.
2. **Order of Milestones Not Being Respected**:
   - Milestones now display in the correct order as defined in the Milestone Template.
3. **Not Able to Delete Observation Photo**:
   - Resolved an issue preventing the deletion of Observation photos.

### Infrastructure Updates

- None specific to this release.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>07/08/2021 Release</b></summary>

### Notes

- This release does not include Web-specific features but addresses Mobile-specific bug fixes and infrastructure updates.

### Features

- None specific to the Web application.

### Infrastructure Updates

- None specific to this release.

### Bug Fixes

- None specific to the Web application.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>07/01/2021 Release</b></summary>

### Notes

- This release introduces features to enhance the handling of weather data, milestone tracking, and phase management.

### Features

1. **Retrigger Weather from Web**:
   - Users can now retrigger the API call to grab weather data when setting the inspection date and arrival time. This is subject to a 5-day historical limit. Manual population of weather fields will be available in a future release.
2. **Weather Visibility in Web**:
   - Weather observations are now visible in the Inspection Details alongside the rest of the Field Notes data.
3. **Reviewing Engineer Assignment**:
   - The Reviewing Engineer is now assigned at the Project level upon Inspection creation and reflected in the Inspections grids and report outputs.
4. **Phase Name Editing**:
   - Phase names can now be modified freely after entry.
5. **Unit Name Editing**:
   - Units can now be modified freely after entry.
6. **Report Output Scoped to Phase**:
   - Observations in the Report Output are now scoped to the same phase.
7. **Milestone Inspection Matrix**:
   - A matrix-style display of Milestones and Units has been added to the Inspection Details page, allowing Reviewing Engineers to track completed Milestones.

### Infrastructure Updates

1. **Upgrade the AWS Amplify CLI**:
   - Upgraded AWS Amplify CLI to address common data issues, reducing the frequency of reported problems.

### Bug Fixes

- None specific to the Web application.

### Backend Changes

- None specific to this release.

</details>

---

<details>
<summary><b>06/17/2021 Release</b></summary>

### Notes

- This release introduces features for managing phases, milestones, and observations, along with improved inspection workflows.

### Features

1. **Project Phase**:
   - Users can now define Units under each Phase. This functionality builds towards scoping Observations to Phases.
   - **Note**: Observation scoping to phases is not yet available and will be addressed in a future release.
2. **Hierarchy Scope**:
   - Users can now define the default Hierarchy Scope of a Project, with changes flowing between Web and Mobile apps.
3. **Milestone Bundles and Templates**:
   - Introduced the ability to define Milestone Bundles (groups of CSI Categories) and combine them into Milestone Templates. These can be assigned to Projects.
   - Additional work is needed for Mobile and Report Templates to fully support this feature.
4. **Observation Review Workflow Change**:
   - Observations now open to the tab where action can be taken (e.g., resolution/correction), reducing confusion about missing APPROVE/DECLINE buttons.
5. **Revise Mode**:
   - Reports in a 'Final' state (Approved or Sent) can now be opened for revising without kicking them back to the EFT.
6. **Reviewing Engineer Name on Inspections Grid**:
   - The Reviewing Engineer is now displayed on the Inspections grid.
7. **Display Inspection Number in Inspections Grids**:
   - Inspection numbers are now visible in tab-filtered grids if assigned.

### Bug Fixes

1. **Unable to Generate Report**:
   - Fixed an issue where timeout limits were being hit during report generation.

### Backend Changes

- None specific to this release.

### Other Changes

- None specific to the Web application.

</details>

---

<details>
<summary><b>05/21/2021 Release</b></summary>

### Notes

- This release introduces new features and improves flexibility in generating reports and managing inspections.

### Features

1. **Preliminary Action Summary (PAS)**:
   - Enabled PAS report generation on the Web interface. The PAS template is a work-in-progress, currently displaying only NCIs in the last-generation report format.
2. **Inspection Number Enhancement**:
   - Reviewing Engineers can now assign inspection numbers during the review process, aligning with predefined types like Standard, Specialty - Window Water Test, etc.
3. **Allow Report Generation Regardless of Status**:
   - Users can now generate reports from the Web interface no matter the inspection status.
4. **Change Date of Inspection**:
   - Added the ability to change the inspection date directly from the Web without requiring the inspection to be declined.

### Bug Fixes

- None specific to the Web application.

### Backend Changes

1. **Data Updates**:
   - Modified data for several inspections as requested by the Criterium Team. Added work items to enable authorized users to make similar updates in the future.

### Other Changes

- None specific to the Web application.

</details>

---

<details>
<summary><b>05/03/2021 Release</b></summary>

### Notes

- This release focuses on enhancing the user experience and resolving critical bugs.

### Features

- None

### Bug Fixes

1. **Dash in Project Code**:
   - Resolved an issue where dashes in project codes caused problems with Observation IDs.
2. **Username Case Sensitivity**:
   - Updated the system to handle usernames case-insensitively, preventing mismatches between Web and Mobile.

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

</div>
