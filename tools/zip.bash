#!/bin/bash

FILE=hide-their-cursor/tools/zip.bash
if [ ! -e "$FILE" ]; then
    echo "This script must only be run from the parent directory of this module."
    exit 1
fi

zip -r module.zip hide-their-cursor -x 'hide-their-cursor/.git/*' -x 'hide-their-cursor/.git*' -x 'hide-their-cursor/tools/*'