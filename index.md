## Release Notes for CRISP by Criterium Engineers

As features are released and bugs are squashed, we will post updates to this page so that users can know what to expect.

### 06/17/2021 Release

#### Features
**Project Phase (Mobile & Web)**: On the Web, a user can now define Units under each Phase. On Mobile, if more than one Phase is defined at the Project, a user will need to choose a Phase to create an Inspection against. **PLEASE NOTE THAT THIS FUNCTIONALITY SHOULD NOT BE USED YET AS OBSERVATIONS ARE NOT BEING SCOPED TO PHASE. THIS WILL BE ADDRESSED SOON**.

**Hierarchy Scope (Web)**: On the Web, a user can now define the default Hierarchy Scope of a Project, similar to how they could do so in the Mobile app. This will flow through to the Mobile app. Changes on the Mobile app will flow through to the Web app as well. When starting a New Inspection, the selections made in Hierarchy Scope on Web or Mobile will show as the default choices while in Scoped mode.

**Milestone Bundles and Templates (Web)**: On the Web, a user can now define a Milestone Bundle (a group of CSI Categories). These bundles can then be combined into a Milestone Template, which can be assigned to a Project. This functionality is building towards what is needed for clients such as K Hovnanian.  Additional work needs to be done on both Mobile and in the Report Template to complete this, but setup can now begin.

**Observation Review Workflow Change (Web)**: On the Web, when a user clicks into an Observation it will open to the tab where action can be taken. In the case of a closing observation, that would be the resolution/correction. This is to reduce confusion when the APPROVE and DECLINE buttons are missing.

**Save Photos to Library (Mobile)**: On the Mobile application, while in an Inspection a user can choose to Save Photos to Library from the Quick Action Menu. This will create an album in the Apple Photos app that contains all photos from that particular inspection.

**Share Photo (Mobile)**: On the Mobile application, long-pressing on any photo will allow the user to Share a photo using any of the standard Apple methods, including Airdrop, Mail, Reminders, Notes, etc.

**Revise Mode (Web)**: On the Web, a user now has the option to open any report that is in a 'Final' state (either Approved or Sent) to a 'Revising' state, where they can edit it without kicking it back to the EFT.

**Reviewing Engineer Name on Inspections Grid (Web)**: The Reviewing Engineer is now displayed on the Inspections grid.

**Add Multiple Photos from Library (Mobile)**: On the Mobile application, a user can now add multiple photos from the system Photos library. **PLEASE NOTE: This process is currently somewhat slow, and it might not be immediately obvious that the application is still working on adding photos. We will be adding a "loading spinner" in an upcoming release.**

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
