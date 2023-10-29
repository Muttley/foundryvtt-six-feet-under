Hooks.on("ready", async () => {
	Hooks.on("applyTokenStatusEffect", (token, statusId, active) => {
		if (!game.user.isGM) return;

		if (statusId === "dead" && active) {
			token.document.update({elevation: -6});
		}
		else if (statusId === "dead" && !active) {
			token.document.update({elevation: 0});
		}
	});
});
