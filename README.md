# Discover Gitata

The official guide to Gitata's people, culture, heritage, and opportunities — Karu LGA, Nasarawa State, Nigeria.

Sister platform to [GitataHub](https://github.com/SamsonJunior/Gitatahub) (day-to-day news, jobs, business & property listings). This site is the heritage/identity layer: history, traditional leadership, culture & tourism, and a community directory.

## Structure

Static HTML/CSS/JS, no build step. Deploy as-is to Vercel.

```
index.html          Home
about.html           About Gitata
history.html         History & Heritage (ledger timeline)
leadership.html      Traditional Leadership
culture.html         Culture & Tourism
communities.html     Communities & Villages directory
business.html        Business & Investment
gallery.html         Gallery
news.html            News & Updates
contact.html         Contact form
css/style.css         Design system (all pages share this file)
js/main.js            Nav interactions + Firebase placeholder
vercel.json           Clean URL routing
```

## Design system

- **Palette:** indigo (`#1E2A44`), laterite red-clay (`#A34B2E`), savanna gold (`#C9963C`), forest green (`#33502F`), parchment background (`#F4EEDD`).
- **Type:** Fraunces (display/headings), Work Sans (body), IBM Plex Mono (labels, dates, eyebrows).
- **Signature elements:** the circular "seal" mark (recurring emblem instead of numbered badges) and the ledger timeline component on the History & Heritage page.

To change a color or font sitewide, edit the `:root` variables at the top of `css/style.css`.

## What's still placeholder — fill these in before launch

1. **All heritage content** — history timeline dates/text, leadership title-holder names, culture/festival details, community & village names. Every placeholder is marked in the HTML with `[bracketed text]` or an *[Editorial note]*.
2. **WhatsApp number** — currently `2340000000000` in `contact.html`, `index.html`, and every generated page's footer/floating button. Find-and-replace once you have the real number.
3. **GitataHub link** — footer and the Business page currently point to the GitHub repo (`github.com/SamsonJunior/Gitatahub`). Swap this for the live Vercel URL once you send it to me.
4. **Photography** — every `.media-block` is a placeholder gradient with a caption. Swap in real photos when ready (same approach you used for GitataHub's property images).
5. **Firebase** — `js/main.js` has the same commented-out `firebaseConfig` pattern as GitataHub, ready to uncomment once a "discovergitata" Firebase project exists. Until then the whole site runs on static content, same as GitataHub's fallback approach.

## Deploying

Same flow as GitataHub: push to a GitHub repo, import into Vercel, done — no build command needed since it's static files.
