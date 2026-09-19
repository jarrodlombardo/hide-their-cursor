# hide-their-cursor

Foundry VTT Module that adds a per-client configuration that will hide seeing another user's mouse cursor.

## Installation and Setup

Option 1: Install via the usual foundry package manager. <https://foundryvtt.com/packages/hide-their-cursor>

Option 2: Install by pasting the latest released [module.json](https://github.com/jarrodlombardo/hide-their-cursor/releases/latest/download/module.json) in the module installer's `Manifest URL` box.

After installing, remember to enable the module in the world so your users can configure their settings.

## Usage

Each user can open the Configure Settings dialog and edit the settings for "Hide Their Cursor" there. Each other user will have a checkbox next to their name that will hide that user's mouse cursor for the current user.

## Building from source/contributing

- Nothing special to do.

### Zip for release

From the userdata/Data/modules folder, run `hide-their-cursor/tools/zip.bash` to create module.zip.
