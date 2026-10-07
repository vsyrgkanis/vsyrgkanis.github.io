const copyBioButton = document.querySelector("[data-copy-bio]");

if (copyBioButton) {
	copyBioButton.addEventListener("click", async () => {
		const biography = document.querySelector("#speaker-bio-text");
		const status = document.querySelector("#copy-bio-status");

		try {
			await navigator.clipboard.writeText(biography.textContent);
			status.textContent = "Bio copied.";
		} catch {
			const selection = window.getSelection();
			const range = document.createRange();
			range.selectNodeContents(biography);
			selection.removeAllRanges();
			selection.addRange(range);
			status.textContent = "Bio selected. Copy it with your keyboard shortcut.";
		}
	});
}
