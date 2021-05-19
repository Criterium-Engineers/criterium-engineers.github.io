## Welcome to the Release Notes for CRISP by Criterium Engineers

As features are released and bugs are squashed, we will post updates to this page so that users can know what to expect.

### 05/17/2021 Release

#### Features
**Preliminary Action Summary (Mobile & Web)**: Now, when you have connectivity, you can trigger the generation of a Preliminary Action Summary report. This functionality is located in the 3-dot menu when you are in an inspection on CRISP Mobile. The PAS template is also available from the Web interface. The template itself is a work-in-progress, and is displaying only NCIs in the last-generation report format. This can and will be updated as needs change.

**Confirmation for Destructive Changes (Mobile)**: When the user tries to take a destructive action (deleting observations, locations, photos, or inspections), they will receive a warning. It is NOT possible to recover from these actions.

**Inspection Number Enhancement (Mobile & Web)**: On the mobile app, when creating a New Inspection the user will choose from a list of pre-defined types. Currently those include: Standard, Specialty - Window Water Test, Specialty - Mock Up, Specialty - Air Barrier, and Excluded. Excluded is by request of Deb Adams for special circumstances. Upon starting Review on the Web side, the Reviewing Engineer can choose to assign an inspection number based on where the inspection fits in with others of that type.

**Allow Report Generation from Web Regardless of Status (Web)**: Previously, reports were only allowed to be generated in certain statuses. We have unlocked the capability to generate a report no matter what status an inspection is in.

**Delete Inspection (Mobile)**: A user can now Delete any inspection if it is in an Active state. There is no recovering from this action, so it should be used carefully and sparingly.

#### Bugs Fixed
**Inspection Details**: There have been instances where details such as Arrival Time or Check-in seem to disappear. Changes have been made to mitigate those occurences.

**Duplicate Favorites**: This should resolve the duplication of Favorite Projects on the Mobile app.

#### Other work
**Data Updates**: Changed the underlying data for several inspections per request of the Criterium Team. Where possible, we have added work items to unlock the ability for those changes to be made by authorized users.

### 05/03/2021 Release

#### Features
**Change Observation Type**: is now available on the mobile application. Previously, once an Observation was made and the user navigated away from that screen, they no longer had the ability to change the observation type. This restriction has been removed.

#### Bugs Fixed
**Dash in Project Code**: was causing some issues displaying Observation IDs. This has been resolved.

**Untyped Observations**:  were occurring when details were entered in a certain order (photos before text). Users can now collect Observation details in any order.

**Username**: mismatches were occurring for mixed-case users. The system has been updated to ignore the case of a username.

**Double tapping observation types**: were causing duplicate observations to spawn. This has now been resolved.

**Site Check-in Search**: had unintended behavior where the keyboard would minimize after each character. This has been resolved.

**Location tags**: would not allow adding a location if it was a partial match to an existing location tag. This has been resolved.

#### Other work
**Allow of Backdating of Closing Observations**: to facilitate migration of historical reports.

**New Contacts**: no longer need an email address or phone number in order to be saved.

**Report Enhancements**: have been made to help with readability.

Various other non-user facing changes to improve performance and reliability

#### Contact

Questions about what you see here? Reach out to [Tim Torrisi](mailto:tim@clovehitchmanagement.com).
