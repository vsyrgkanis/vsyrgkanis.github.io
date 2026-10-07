const newsItems = [...document.querySelectorAll(".legacy-news li")];
const newsToggle = document.querySelector("[data-news-toggle]");
const initiallyVisibleNewsCount = 5;

if (newsToggle && newsItems.length > initiallyVisibleNewsCount) {
	const hiddenNewsItems = newsItems.slice(initiallyVisibleNewsCount);

	for (const item of hiddenNewsItems) {
		item.hidden = true;
	}

	newsToggle.hidden = false;
	newsToggle.textContent = `Show all news (${hiddenNewsItems.length} more)`;

	newsToggle.addEventListener("click", () => {
		const expanded = newsToggle.getAttribute("aria-expanded") === "true";

		for (const item of hiddenNewsItems) {
			item.hidden = expanded;
		}

		newsToggle.setAttribute("aria-expanded", String(!expanded));
		newsToggle.textContent = expanded ? `Show all news (${hiddenNewsItems.length} more)` : "Show fewer news items";
	});
}
