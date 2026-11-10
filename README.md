# Your website — how it works and how to update it

This site is deliberately simple. There is nothing to install, nothing to
"build", and nothing that can break because some tool got a new version.
It is five files and a folder of images.

---

## The files

| File | What it is | Do you edit it? |
|---|---|---|
| **`content.js`** | All of your text: bio, publications, teaching, conferences, links | **Yes — this is the only one** |
| `index.html` | The page skeleton | No |
| `style.css` | The design: colours, fonts, spacing | Only to change colours (see bottom) |
| `app.js` | The code that turns `content.js` into a web page | No |
| `assets/` | Your photo, your CV, the banner image | Replace the files inside |

---

## Updating your text

1. Go to your repository on **github.com**
2. Click **`content.js`**
3. Click the **pencil icon** (top right of the file)
4. Change what you need
5. Scroll down, click the green **Commit changes** button
6. Wait about 30 seconds, then reload your website

That's it. There is no separate "publish" step.

### The three rules

1. Text always goes between `"quote marks"`
2. Every line ends with a **comma**
3. For an apostrophe inside text, write `\'` — e.g. `"the field\'s history"`

### Adding a publication

Find the `publications:` list. Copy one whole block — everything from `{` to
`},` — paste it directly underneath, and change the text:

```js
{
  year: 2026,
  title: "The title of your paper",
  authors: "Your Name, A Coauthor, and Another Coauthor",
  venue: "Journal Name",
  details: "vol. 12, no. 3, pp. 45-67",
  links: [
    { label: "PDF", url: "https://link-to-the-pdf" },
    { label: "DOI", url: "https://doi.org/..." },
  ],
},
```

Notes:

- Publications sort themselves by year automatically. You can paste a new one
  anywhere in the list.
- For work that isn't published yet, leave `year: "",` and add a `status:`
  line. It shows as a small tag above the title and stays at the bottom of
  the list:

  ```js
  {
    year: "",
    status: "Under revision",
    title: "...",
    authors: "...",
    venue: "Journal Name",
    details: "Revise and resubmit, March 2026",
    links: [],
  },
  ```

  When it is accepted, delete the `status:` line and set the real year.
- **Your own name is bolded automatically.** If it doesn't catch it (for
  example because you publish under initials), put asterisks around it:
  `"J. Avery"` → `"*J. Avery*"`
- `links` can hold as many as you like. Common labels: PDF, DOI, Data,
  Preprint, Poster, Code. If there are none, write `links: [],`

Conferences, teaching, projects and education all work the same way.

### The last section (awards, methods, affiliations, languages)

This one is flexible. Each block in the `lists:` section becomes one column
on the page. Add, rename, reorder or delete whole blocks:

```js
lists: [
  {
    title: "Awards & recognition",
    items: [
      { year: "2021", text: "Associate Fellow of Advance HE" },
      { year: "",     text: "Teaching Excellence Award" },
    ],
  },
],
```

`year` is optional — if no item in a block has one, the year column
disappears and the text lines up flush left.

### Placeholder links

Writing `"#"` as a link address means *show this button, but it doesn't go
anywhere yet*. The button appears in its normal place and clicking it does
nothing. Replace the `"#"` with a real address whenever you have one.

### Hiding things

- To hide **one item**, delete its block (from `{` to `},`)
- To hide a **whole section**, make its list empty: `awards: [],`
- To hide a **single line**, set it to empty quotes: `phone: "",`

The navigation menu at the top updates itself — hidden sections disappear
from it automatically.

---

## Changing your photo, CV, or banner

1. Prepare the file:
   - **Photo** — square, around 800 × 800 pixels, saved as `photo.jpg`
   - **CV** — a PDF named `cv.pdf`
   - **Banner** — wide, around 1800 × 560 pixels, named `banner.jpg`
2. On github.com, open the **`assets`** folder
3. Click **Add file → Upload files**
4. Drag the new file in. If it has the same name as the old one, it replaces it.
5. Click **Commit changes**

If you'd rather use different filenames, upload them and then change the
matching line in `content.js` (`photo:`, `banner:`, `cv: { file: ... }`).

To remove the banner image entirely and use a plain coloured band instead,
set `banner: "",` in `content.js`.

---

## Putting the site online (one time only)

1. Create a free account at **github.com**. **The username becomes your web
   address**, so pick it carefully — `janesmith` gives you
   `janesmith.github.io`.
2. Click **+** (top right) → **New repository**
3. Name it exactly: **`yourusername.github.io`** — using your own username
4. Set it to **Public**, then click **Create repository**
5. Click **uploading an existing file**
6. Drag in `index.html`, `style.css`, `content.js`, `app.js`, `README.md`
   **and the whole `assets` folder**
7. Click **Commit changes**
8. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Click Save.
9. Wait 1–2 minutes, then visit `https://yourusername.github.io`

Every change you commit from now on goes live automatically within a minute.

### Nothing is ever lost

GitHub keeps every version of every file. If an edit breaks the page, open
the file, click the **History** button, and restore the previous version.

---

## Later: using your own domain name

Optional, and easy to add at any time — the site does not need rebuilding.

1. Buy the domain (about $10–12 a year). **Cloudflare Registrar** sells at
   cost with no first-year discount tricks; Namecheap and Porkbun are fine too.
2. At the registrar, add these DNS records:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |
   | CNAME | www | `yourusername.github.io` |

3. On GitHub: **Settings → Pages → Custom domain**, type your domain, Save.
4. Tick **Enforce HTTPS** once it becomes available (usually within an hour).

The old `yourusername.github.io` address keeps working and forwards to the
new one.

---

## If something looks broken

Almost every problem is a typo in `content.js`. In order of likelihood:

1. A **missing comma** at the end of a line
2. A **missing quote mark** — quotes must come in pairs
3. An **apostrophe inside text** that wasn't written as `\'`
4. A deleted `{` or `}`

To find it: open the site, press **F12** (or right-click → Inspect), and open
the **Console** tab. It will name the line number.

If you get stuck, use the **History** button on `content.js` in GitHub and
restore the last version that worked.

---

## Changing the colours (optional)

Open `style.css`. The first block at the very top holds every colour on the
site. Change `--accent` to change the links, buttons, and highlights.

```css
--paper:   #FAF8F4;   /* page background */
--ink:     #1E2429;   /* main text */
--accent:  #2F5D57;   /* links, buttons, highlights */
```

A few alternatives that work with the rest of the design:

| Feel | `--accent` | `--accent-deep` | `--accent-wash` |
|---|---|---|---|
| Deep green (current) | `#2F5D57` | `#23453F` | `#EDF3F1` |
| Navy | `#2B4570` | `#1E3252` | `#ECF0F7` |
| Burgundy | `#7A2E3C` | `#5C222D` | `#F7EDEF` |
| Slate | `#41525E` | `#2E3B44` | `#EEF1F3` |
| Warm clay | `#9A5B3B` | `#77452C` | `#F8F0EA` |

---

## Fonts

The site loads **Newsreader** and **Inter** from Google Fonts. If those ever
fail to load, it falls back to Georgia and your system's default sans-serif —
the page still looks fine. To use no external fonts at all, delete the three
`<link>` lines near the top of `index.html`.
