## Release Notes for CRISP by Criterium Engineers

As features are released and bugs are squashed, we will post updates to this page so that users can know what to expect.

## 08/25/2021 Release

#### Notes
***We have had several reports of problems adding and removing favorites. The root-cause appears to be related to having the ability to add/remove favorites both from the Projects > All screen and from within an individual Project. For the time being, we have removed the ability to add/remove Favorites from within the Project. All changes should be made from the Projects > All screen. A Project that is a favorite will still display a star within the Project Details screen, but it will not be tappable.***

We believe we have fixed most issues dealing with photos and data not showing in certain cases after they are added. Please reach out immediately if you still see bad behavior after upgrading to the newest version of CRISP Mobile

We are now enforcing some rules around favorites and photo sync. Now, the mobile app will only sync DOWN photos from Favorite projects to cut down on bandwidth and storage requirements

#### Features
**Inspection Number Helper Enhancement (Web)**: In order to help Reviewing Engineers and Admins properly number inspections, we have added a Phase.

**PAS Report Output (Web & Mobile)**: The PAS report output now includes all unreviewed NCI and IOC observations

**Report Output Provider (Web & Mobile)**: We have switched from the SaaS version of JSReports to the self-hosted version. No changes should be noticible, but it will mitigate any timeouts

**Report Output Change - Milestones (Web)**: The report output for Milestone inspections will now include ALL milestones, regardless of whether an inspection has been done against them or not

**Project Details > Contacts (Web)**: Contacts that have been previously associated with the client will be prioritized at the top of the contacts list when adding new contacts

**Swap Observation Text for Primary Location/Primary Photo Description (Mobile)**: In place of the Observation Text we now surface the Description of the Primary Photo from the Primary Location


## 08/12/2021 Release

#### Notes
We are currently investigating an issue where when a CRISP Mobile user adds a photo, it does not appear. In most cases the photo is actually added, and will show if the user changes screens and goes back. Trouble seems to occur when the user keeps trying to add the photo, it ends up showing up multiple times, and then either takes action to delete the photos or the entire observation.

**If you add a photo, and it does NOT appear, please leave that screen and then navigate back to it. Your photo will most likely appear. If this does NOT work, please reach out for support**

#### Features
**Status Change Notifications (Web & Mobile)**: Users associated with a Project will now be notified via email of changes in status. Included on the notification email: The EFT who submitted the Inspection, the Project Admin for the Project, the Reviewing Engineer for the Project, and the user who reviews the inspection (if different from the Project Reviewing Engineer.

**Project Path (Web)**: A field has been added to the Project Details that is meant to hold the Project Path attribute from the Criterium ERP system (currently InFocus).

**Display Phase on Inspection List (Mobile)**: Phase Name has been added to the Project Details > Inspections screen. There is a bit of work to be done around formatting, but we will be tackling adding in the Inspection Number soon and can correct the display formatting once that is integrated.

#### Troubleshooting Features
**Export Single Inspection Data (Mobile)**: We have seen rare instances where, likely due to application load, certain pieces of Inspection data fail to save to local storage. The Inspection appears otherwise to be normal because the application is aware of the data in memory. If, during troubleshooting, a member of the Software Team asks for a single-inspection export, it will be available from within the Inspection itself. You will need to navigate to the triple-dot menu (where the PAS is triggered), choose Export Data, and then choose your email client (Mail or Outlook). The inspection data will be sent in the body of an email to an address that the Software Team will provide.

**Find Orphaned Photos (Mobile)**: We have seen rare instances where, likely due to application load, photos get orphaned on the iPad storage but do not make it to the backend. If, during troubleshooting, a member of the Software Team asks you to check for orphaned photos, simply navigate to the Settings screen and tap the "Recover Photos" button. If any meet the criteria, a new album will be created in the Photos app and these photos will be added to it.

## 07/27/2021 Release

#### Features
**Designate Primary Location Group (Web & Mobile)**: Users of both the Web application as well as CRISP Mobile can now designate which Location Group should be considering the Primary Location. This determines what will show in the Report Output Template grids. On the Web this is done using the Primary checkbox. You need to be in Edit mode for this action to be taken, and immediately after, you will exit edit mode. On Mobile, the primary Location Group displays first. Additional Location Groups will now display a hamburger menu with Set as Primary and Delete as options. This adds to the existing functionality that allows users on both Web and Mobile to designate the Primary Photo within a location group.

**Add Photos (Web)**: Users of the Web application can now add photos to NCI/IOC/CI observations by entering into Edit Mode while in Submitted or In Review status. Immediately after uploading photos, the user will be taken out of Edit Mode. Depending on the size of the photo(s) uploaded, it may take several seconds for them to show up in the user interface.

**PDF Report Output Naming (Web)**: When generating and then saving the PDF Report Output, it will automatically be named in the following format: Client Name - Project Name - Phase (if available) - Inspection # (including code, if not Standard) - Inspection Date (MM-DD-YYYY).pdf

**Manual Weather Editing (Web)**: Weather can now be edited directly in the Inspection Details section of the Web application. This will help in situations where the historical Weather API window has passed (limited to 5 days previous). Instead of editing the Field Notes section to document weather conditions, they can now be entered here and be displayed exactly as if the API had populated them. It will also allow for changes in the rare case that the Weather API conditions did not match the conditions on site.

**Milestone Inspection Workflow (Mobile)**: We have removed the need to select which Milestones are being inspected during the New Inspection workflow. All Milestones in a Template will automatically be selected each time a new Inspection is created.



#### Bugs
**Mobile Performance Improvements (Mobile)**: We seemed to reach a critical volume of data after which the Mobile application took a severe performance hit. This is an ongoing item, but by removing some of the aggregations, we were able to improve performance significantly. The most obvious changes are the removal of the NCI and IOC counts in several places, including the My Projects and All Projects screens and Project Details > Inspections screens.

**Template Status Column (Web)**: Due to a bug, the Status column in the Templates section of the Web application was not properly populating. This is now resolved.

**Order of Milestones Not Being Respected (Web & Mobile)**: Since Milestones occur in a specific order, we fixed a bug that was allowing them to shuffle around. They will now show in the exact order that they are in the Milestone Template.

**Not Able to Delete Observation Photo (Web)**: There was a bug report regarding the removal of photos failing. This has been resolved.


## 07/09/2021 Release

#### Infrastructure Updates / Bug Fixes
**Deleting Observations Bug (Mobile)**: This release fixes an issue that occurred when an Observation with a custom Inspection Point was deleted. If that custom Inspection Point was used in other observations, the Inspection Point would be removed from those Observations as well and it would be stuck in an uneditable state.

**Inspections Stuck on iPad (Mobile)**: This release should also resolve any occurrences of Inspections getting "stuck" on the iPad by changing how the user record is persisted. If you notice this happening still, please reach out to Deb Adams immediately.

## 07/01/2021 Release

#### Features
**Retrigger Weather from Web (Web)**: On the Web, a user can now retrigger the API call to grab the weather in the event that the EFT does not have connectivity when they set the inspection date and arrival time on the Mobile application. This is still subject to a 5-day historical limit, after which the API call will fail. We have functionality mid-flight that will allow completely manual population of the weather fields to cover this case.

**Weather Visibility in Web (Web)**: On the Web, a user can now see the weather observations from the Inspection Details, along with the rest of the Field Notes data.

**Reviewing Engineer Assignment (Web)**: Per Criterium request, we changed the way that a Reviewing Engineer is assigned at to an Inspection. Upon Inspection creation, the Inspection Instance will be assigned the Project-level Reviewing Engineer. This will show in the Inspections grids in the Web application. If a different Reviewing Engineer starts the review process, that Reviewing Engineer will become the one that shows on both the Inspections grids as well as the report output.

**Landscape Mode (Mobile)**: The CRISP Mobile application can now be used in Landscape mode, per user request. No adjustments have been made, so there may be instances where the veritical scrolling is not optimal for this mode. We can enhance further in a future UI redesign effort if necessary.

**Phase Name Editing (Web)**: Previously, once a Phase name had been entered it could not be edited. This has been enhanced so that a Phase name can be modified freely.

**Unit Name Editing (Web)**: Previously, once a Unit had been entered it could not be edited. This has been enhanced so that a Unit can be modified freely.

**Report Output Scoped to Phase (Web)**: To finish off the Phase functionality, we have scoped the Report Output to only show Observations from within the same phase.

**Project Details > Outstanding Items Scoped to Phase (Mobile)**: To finish off the Phase functionality, we have added controls to scope the Project Details > Outstanding Items view on the Mobile application. It will default to "All Phases" to show a holistic view of the Project, but can be scoped to any single phase.

**Inspection Details > Prior Items and Observations (Mobile)**: To finish off the Phase functionality, we have changed the scope of the Prior Items and Observations views so that they only show data from the Phase that they are associated with.

**Milestone Inspection Usage (Mobile)**: We have added several pieces of functionality to allow EFTs to complete "Milestone"-type inspections. There are changes to the new inspection workflow that will automatically scope the CSI categories for the EFT based on what Milestone(s) they choose for an inspection. This will also drive several new user interface controls on the Inspection Details view to allow the EFT to select a Phase or Unit that was inspected to complete a Milestone. The tracking of "Milestone" visits versus "Correction" visits is handled in the application back-end, so the EFT does not need to worry about tracking them any differently. **CURRENTLY THE ONLY PLACE TO CHOOSE YOUR MILESTONES IS DURING THE NEW INSPECTION WORKFLOW, BUT THIS WILL BE UPDATED IN A FUTURE RELEASE SO IT CAN BE MODIFIED AT WILL.**

**Milestone Inspection Matrix (Web)**: We have added a matrix-style display of Milestones and Units on the Inspection Details page to allow the Reviewing Engineer to see what Milestones the EFT has completed. This is editable by the Reviewing Engineer or Project Admin when the inspection is in an editable status.

#### Infrastructure Updates

**Upgrade the AWS Amplify CLI**: Amazon Web Services released some infrastructure updates that address several common issues that have been causing weirdness in the data. We expect this update to cut down the frequency of these data problems significantly.


### 06/17/2021 Release

#### Features
**Project Phase (Mobile & Web)**: On the Web, a user can now define Units under each Phase. On Mobile, if more than one Phase is defined at the Project, a user will need to choose a Phase to create an Inspection against. **PLEASE NOTE THAT THIS FUNCTIONALITY SHOULD NOT BE USED YET AS OBSERVATIONS ARE NOT BEING SCOPED TO PHASE. THIS WILL BE ADDRESSED SOON. THE REPORT OUTPUT ALSO NEEDS TO BE UPDATED TO REFLECT PHASES**.

**Hierarchy Scope (Web)**: On the Web, a user can now define the default Hierarchy Scope of a Project, similar to how they could do so in the Mobile app. This will flow through to the Mobile app. Changes on the Mobile app will flow through to the Web app as well. When starting a New Inspection, the selections made in Hierarchy Scope on Web or Mobile will show as the default choices while in Scoped mode.

**Milestone Bundles and Templates (Web)**: On the Web, a user can now define a Milestone Bundle (a group of CSI Categories). These bundles can then be combined into a Milestone Template, which can be assigned to a Project. This functionality is building towards what is needed for clients such as K Hovnanian.  Additional work needs to be done on both Mobile and in the Report Template to complete this, but setup can now begin.

**Observation Review Workflow Change (Web)**: On the Web, when a user clicks into an Observation it will open to the tab where action can be taken. In the case of a closing observation, that would be the resolution/correction. This is to reduce confusion when the APPROVE and DECLINE buttons are missing.

**Save Photos to Library (Mobile)**: On the Mobile application, while in an Inspection a user can choose to Save Photos to Library from the Quick Action Menu. This will create an album in the Apple Photos app that contains all photos from that particular inspection.

**Share Photo (Mobile)**: On the Mobile application, long-pressing on any photo will allow the user to Share a photo using any of the standard Apple methods, including Airdrop, Mail, Reminders, Notes, etc. **PLEASE NOTE: Share to mail is currently not attaching the image to the message. This will be rectified in a later release since it is not mission-critical**

**Revise Mode (Web)**: On the Web, a user now has the option to open any report that is in a 'Final' state (either Approved or Sent) to a 'Revising' state, where they can edit it without kicking it back to the EFT.

**Reviewing Engineer Name on Inspections Grid (Web)**: The Reviewing Engineer is now displayed on the Inspections grid.

**Add Multiple Photos from Library (Mobile)**: On the Mobile application, a user can now add multiple photos from the system Photos library. **PLEASE NOTE: This process is currently somewhat slow, and it might not be immediately obvious that the application is still working on adding photos. We will be adding a "loading spinner" in an upcoming release. We are also artificially limiting this to 5 at a time so that it does not seem like the app has locked up.**

**Display Inspection Number in Inspections Grids (Web)**: Caleb's first contribution to the code! A user will now be able to see the Inspection Number from any of the tab-filtered Inspection Grids, if the number has been assigned.

#### Bugs
**Unable to Delete Location (Mobile)**: An intermittent issue where a user was not able to successfully delete a Location Group from an Observation has been resolved.

**Unable to Generate Report (Web)**: An issue with timeout limits being hit during report generation has been resolved.

### 05/17/2021 Release

#### Features
**Preliminary Action Summary (Mobile & Web)**: Now, when you have connectivity, you can trigger the generation of a Preliminary Action Summary report. This functionality is located in the 3-dot menu when you are in an inspection on CRISP Mobile. The PAS template is also available from the Web interface. The template itself is a work-in-progress, and is displaying only NCIs in the last-generation report format. This can and will be updated as needs change.

**Confirmation for Destructive Changes (Mobile)**: When the user tries to take a destructive action (deleting observations, locations, photos, or inspections), they will receive a warning. It is NOT possible to recover from these actions.

**Inspection Number Enhancement (Mobile & Web)**: On the mobile app, when creating a New Inspection the user will choose from a list of pre-defined types. Currently those include: Standard, Specialty - Window Water Test, Specialty - Mock Up, Specialty - Air Barrier, and Excluded. Excluded is by request of Deb Adams for special circumstances. Upon starting Review on the Web side, the Reviewing Engineer can choose to assign an inspection number based on where the inspection fits in with others of that type.

**Allow Report Generation from Web Regardless of Status (Web)**: Previously, reports were only allowed to be generated in certain statuses. We have unlocked the capability to generate a report no matter what status an inspection is in.

**Delete Inspection (Mobile)**: A user can now Delete any inspection if it is in an Active state. There is no recovering from this action, so it should be used carefully and sparingly.

**Change Date of Inspection (Web)**: A user can now change the Date of Inspection from the Web, so an Inspection no longer needs to be declined to allow this to be changed on the Mobile app.

#### Bugs Fixed
**Inspection Details (Mobile)**: There have been instances where details such as Arrival Time or Check-in seem to disappear. Changes have been made to mitigate those occurences.

**Duplicate Favorites (Mobile)**: This should resolve the duplication of Favorite Projects on the Mobile app.

#### Other work
**Data Updates**: Changed the underlying data for several inspections per request of the Criterium Team. Where possible, we have added work items to unlock the ability for those changes to be made by authorized users.

### 05/03/2021 Release

#### Features
**Change Observation Type (Mobile)**: is now available on the mobile application. Previously, once an Observation was made and the user navigated away from that screen, they no longer had the ability to change the observation type. This restriction has been removed.

#### Bugs Fixed
**Dash in Project Code (Web & Mobile)**: was causing some issues displaying Observation IDs. This has been resolved.

**Untyped Observations (Mobile)**:  were occurring when details were entered in a certain order (photos before text). Users can now collect Observation details in any order.

**Username (Web & Mobile)**: mismatches were occurring for mixed-case users. The system has been updated to ignore the case of a username.

**Double tapping observation types (Mobile)**: were causing duplicate observations to spawn. This has now been resolved.

**Site Check-in Search (Mobile)**: had unintended behavior where the keyboard would minimize after each character. This has been resolved.

**Location Tags (Mobile)**: would not allow adding a location if it was a partial match to an existing location tag. This has been resolved.

#### Other work
**Allow of Backdating of Closing Observations**: to facilitate migration of historical reports.

**New Contacts**: no longer need an email address or phone number in order to be saved.

**Report Enhancements**: have been made to help with readability.

Various other non-user facing changes to improve performance and reliability

#### Contact

Questions about what you see here? Reach out to [Tim Torrisi](mailto:tim@clovehitchmanagement.com).
