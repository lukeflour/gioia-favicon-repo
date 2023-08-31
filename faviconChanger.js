window.addEventListener('load', function() {
  // Check if the current page URL matches the desired URL
  if (window.location.href === 'https://gioia.mykajabi.com/products/2148067820/') {
    const appleTouchIconLink = document.createElement("link");
    appleTouchIconLink.rel = "apple-touch-icon";
    appleTouchIconLink.sizes = "180x180";
    appleTouchIconLink.href = "https://raw.github.com/lukeflour/gioia-favicon-repo/main/apple-touch-icon.png";

    const favicon32Link = document.createElement("link");
    favicon32Link.rel = "icon";
    favicon32Link.type = "image/png";
    favicon32Link.sizes = "32x32";
    favicon32Link.href = "https://raw.github.com/lukeflour/gioia-favicon-repo/main/favicon-32x32.png";

    const favicon16Link = document.createElement("link");
    favicon16Link.rel = "icon";
    favicon16Link.type = "image/png";
    favicon16Link.sizes = "16x16";
    favicon16Link.href = "https://raw.github.com/lukeflour/gioia-favicon-repo/main/favicon-16x16.png";

    const manifestLink = document.createElement("link");
    manifestLink.rel = "manifest";
    manifestLink.href = "https://raw.github.com/lukeflour/gioia-favicon-repo/main/site.webmanifest";

    const maskIconLink = document.createElement("link");
    maskIconLink.rel = "mask-icon";
    maskIconLink.href = "https://raw.github.com/lukeflour/gioia-favicon-repo/main/safari-pinned-tab.svg";
    maskIconLink.color = "#5bbad5";

    const shortcutIconLink = document.createElement("link");
    shortcutIconLink.rel = "shortcut icon";
    shortcutIconLink.href = "https://raw.github.com/lukeflour/gioia-favicon-repo/main/favicon.ico";

    const tileColorMeta = document.createElement("meta");
    tileColorMeta.name = "msapplication-TileColor";
    tileColorMeta.content = "#da532c";

    const msApplicationConfigMeta = document.createElement("meta");
    msApplicationConfigMeta.name = "msapplication-config";
    msApplicationConfigMeta.content = "https://raw.github.com/lukeflour/gioia-favicon-repo/main/browserconfig.xml";

    const themeColorMeta = document.createElement("meta");
    themeColorMeta.name = "theme-color";
    themeColorMeta.content = "#ffffff";

    var head = document.querySelector("head");
    head.appendChild(appleTouchIconLink);
    head.appendChild(favicon32Link);
    head.appendChild(favicon16Link);
    head.appendChild(manifestLink);
    head.appendChild(maskIconLink);
    head.appendChild(shortcutIconLink);
    head.appendChild(tileColorMeta);
    head.appendChild(msApplicationConfigMeta);
    head.appendChild(themeColorMeta);
  }
});
