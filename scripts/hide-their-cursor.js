Hooks.on('setup', () => {
    for (let user of game.users.filter(u => u !== game.user)) {
        let settingDef = {
            name: game.i18n.format('hide-their-cursor.hideName', { name: user.name }),
            hint: game.i18n.format('hide-their-cursor.hideNameHint', { name: user.name }),
            scope: 'client',
            config: true,
            type: Boolean,
            default: false,
            requiresReload: true
        }
        game.settings.register('hide-their-cursor', user.name, settingDef)

        if (game.settings.get("hide-their-cursor", user.name)) {
            user.permissions["SHOW_CURSOR"] = false;
        }
    }
})
