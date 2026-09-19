Hooks.on('setup', () => {
    for (let user of game.users) {
        if (user === game.user) {
            // Skip the current user
            continue;
        }
        let settingDef = {
            name: `Hide cursor of ${user.name}`,
            hint: `This client setting will hide you seeing ${user.name}'s mouse cursor.`,
            scope: 'client',
            config: true,
            type: Boolean,
            default: false,
            requiresReload: true
        }
        game.settings.register('hide-their-cursor', user.name, settingDef)

        let hide = game.settings.get("hide-their-cursor", user.name);
        if (hide) {
            user.permissions["SHOW_CURSOR"] = false;
        }
    }
})

