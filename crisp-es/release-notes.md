---
title: CRISP-ES by Criterium Engineers Release Notes
---
## Release Notes for CRISP-ES by Criterium Engineers

As features are released and bugs are squashed, we will post updates to this page so that users can know what to expect.

## 02/04/2022 Release

#### Notes

This is an update for both Web and Mobile. The Mobile update is via the Apple App Store - please be sure that your Mobile device is FULLY SYNC'D before accepting the update, otherwise data loss may occur.

#### Features

**Auto Save Photos to iPhoto Library (Mobile)** - All photos captured via the Camera in the CRISP-ES Mobile application will automatically be backed up to an iPhoto Album with the Project Name. This defaults to ON, but can be disabled in the Settings screen.


**Delete Evaluation (Web)** - User can (as they can on the Mobile) delete an Evaluation. This is destructive and will cause the permanent loss of all assets associated. This CANNOT be used on a parent System or Location if they have a child System or Location in existance. The user must first delete the child.


**Bulk Photo Upload (Web)** - Users can upload multiple photos at once, either through a system dialog or drag-and-drop


**Allow Project Assignment (Web)** - During the creation of a Project on the Web, the user can "assign" it to another user for field work. This will allow it to show up on the "assigned" user's Mobile device. This defaults to the users who is creating the Project, but can be overridden. This cannot be changed once the Project is saved.

**Disable User (as non-Admin) (Web)** - Users who should no longer have access to CRISP-ES can now be disabled by Admins or Super Admins from the Users screen.


#### Bug Fixes


**Cannot Delete Photo or Note (as non-Admin) (Web)** - Fixed a bug that prevented non-Admin users from deleting Notes or Photos for a Project that they are not the owner.

**Non-Admins Cannot Share Projects (as non-Admin) (Web)** - Fixed a bug that prevented non-Admin users from sharing a Project.

**Same-Office Permissions (as non-Admin) (Web)** - Within an Office, all user should have permissions to modify all Projects. This was not working as intended.



