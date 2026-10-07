const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
	const updateHeaderOffset = () => {
		document.documentElement.style.setProperty("--site-header-height", `${siteHeader.getBoundingClientRect().height}px`);
	};

	updateHeaderOffset();
	new ResizeObserver(updateHeaderOffset).observe(siteHeader);
}
