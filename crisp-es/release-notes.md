---
title: CRISP-ES by Criterium Engineers Release Notes
---
## Release Notes for CRISP-ES by Criterium Engineers

As features are released and bugs are squashed, we will post updates to this page so that users can know what to expect.

## 04/18/2022 Release

#### Hotfix

**Fix Invisible Save Button on New Project Creation (Mobile)** - After the last release, the Save button had disappeared. This OTA update resolves that issue.

## 04/08/2022 Release

**Copy Photo to Another System (Web & Mobile)** - Using the triple dot menu visible wherever a photo is displayed, the user can now choose 'Copy', which will allow them to assign a photo to another system. This creates a copy so that it can be annotated differently.

**Restore Original Photo (Web & Mobile)** - Buttons have been added to both the Mobile Annotator and the Web Annotator to allow a user to revert to the original photo, even after it has been annotated or cropped. On Mobile, this will ONLY work if the Original is still available. The only case where it may not be is when a user has cleared their local data store after capturing the photo.

**Project Editability (Mobile)** - Additional restrictions on editing have been made so that if a Project is marked as Inactive or Complete, it will no longer be editable. This matches the existing Web functionality.

**Media Library Show Dates (Mobile)** - The Media Library will now show the datestamp of the photo to allow for easier navigation.

**App Icon Update (Mobile)** - The app icon has been updated to make it easier to differentiate from the CRISP-CES icon. This update will occur when the next non-OTA build is released.

**Sync Expiration Option (Mobile)** - In order to keep the amount of data being synced to the Mobile device reasonable, we have implemented Sync Expiration options. Users will be able to choose between 30 days (default), 60 days, and Unlimited. After the expiration, data is NOT deleted from the Mobile device and will still be shown until the user clears their local data store.

#### Bugs

**Report Output Update (Web)** - Previously, the report output was sized to A4 instead of Letter. This has been corrected.

**Special Characters in OfficeId (Web)** - Certain special characters (in particular "/") could cause issues in the Web app. This has been restricted to only allow numbers, alphabetical characters, and dashes.

**Photo Quality (Mobile)** - Photos taken through the Mobile app were being double compressed in some cases, causing degredation in photo quality

## 03/18/2022 Release

#### Notes
This is an update for both Web and Mobile, mostly focusing on bug fixes. The Mobile update is via an OTA (over-the-air) process within the app itself. You should ONLY be prompted to update if you have no outstanding items that have not synced to the back end. If you force the update (via the Settings page) you risk losing unsynced data.

#### Bugs

**Admin Privilege Fixes (Web)** - Fixing various issues with Admin permissions, including changing the Office logo and adding new users

**Photo Upload Size Limit (Web)** - Work has been done to remove a limit on the size of photo uploads. Testing has been done on images ~ 8.5MB in size, uploading 10 concurrently. Theoretically, there should be no upper limit on either size or concurrent uploads now

**Project Sharing (Web)** - Fixed a bug where sharing of projects did not work in certain situations

#### Features

**Warn User When Exiting Camera (Mobile)** - We have enhanced the photo capture to warn a user that they have not saved/finalized photos if they try to exit the camera capture portion of the application

## 02/14/2022 Release

#### Notes
This is an update for both Web and Mobile. The Mobile update is via an OTA (over-the-air) process within the app itself. You should ONLY be prompted to update if you have no outstanding items that have not synced to the back end. If you force the update (via the Settings page) you risk losing unsynced data.

#### Features

**Super Admin Permissions Adjustment (Web)** - Adjust who can add or remove Super Admin permissions from user accounts

#### Bugs

**Text Annotations (Web)** - Fixing broken Text Annotation tool

**Report Output (Web)** - Fixing layout when using non-square photos

**Change State to Required (Web)** - Update form to require State to be selected

**Fix Country Default (Web)** - Saving a Project when United States is selected by default was not persisting the Country selection

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



