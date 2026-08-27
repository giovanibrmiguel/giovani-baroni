# Analytics & attribution

Goal: know which traffic source/campaign/ad drove visits to a `/listen/*` page,
and whether those visitors clicked through to Spotify (or another platform).

## What's in place

- **Umami Cloud** (free Hobby plan — 100k events/mo, includes UTM reports and
  custom events) tracks every pageview across the site, with no cookies and
  no personal data collected. Script: `src/components/shared/Analytics.astro`,
  included in `BaseLayout.astro` and in each standalone `/listen/*` page.
- Every streaming platform button on `/listen/fishyboy`, `/listen/mecanicadosfluidos`,
  and `/listen/blu` fires a `stream_click` event on click, tagged with which
  platform (`spotify`, `appleMusic`, etc.) and which song (`release.id`).
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`,
  `utm_term`) on the incoming URL are captured **automatically** by Umami —
  nothing to build for this part.
- **Meta (Facebook/Instagram) Ads Pixel** (`src/components/shared/MetaPixel.astro`,
  included in `BaseLayout.astro` and each standalone `/listen/*` page, same
  pattern as Umami) fires the standard `PageView` event plus a custom
  `StreamClick` event on the same platform-button clicks Umami tracks — no
  duplicate markup, it just listens for `[data-umami-event="stream_click"]`.
  This exists so Meta's ad delivery can optimize toward people who actually
  click through to a streaming platform, not just anyone who loads the page.
  Unlike Umami, this sets a cookie and sends data to Meta — see "GDPR/consent"
  below before relying on it for EU traffic.

## One-time setup (you do this, not code)

1. Create a free account at [umami.is](https://umami.is) → Cloud → Hobby plan.
2. Add a website with domain `giovanibaroni.com`. Umami gives you a **Website
   ID** (not secret, just an identifier).
3. In **Cloudflare Pages → your project → Settings → Environment variables**,
   add `PUBLIC_UMAMI_WEBSITE_ID` = that ID, for the Production environment.
   Redeploy (or push a commit) to pick it up.
4. (Optional, for local testing) copy `.env.example` to `.env` and fill in the
   same ID — dev traffic is skipped automatically either way (`astro dev`
   never loads the script), so this is only useful if you build+preview locally.

No other infrastructure, database, or paid tool involved. If you ever want to
stop paying attention to it, deleting the env var silently disables tracking
without touching code.

## Meta Pixel setup (do this to enable ad-conversion optimization)

1. In [Meta Events Manager](https://business.facebook.com/events_manager), create
   a Pixel (or use the existing one for your ad account) and copy its ID.
2. Add `PUBLIC_META_PIXEL_ID` = that ID in Cloudflare Pages env vars (same
   place as `PUBLIC_UMAMI_WEBSITE_ID`), Production environment. Redeploy.
3. In Events Manager, create a **Custom Conversion** based on the `StreamClick`
   custom event (Data Sources → your pixel → Custom Conversions → From Pixel →
   event = `StreamClick`).
4. In Ads Manager, at the ad set level, set **Performance Goal / Conversion
   event** to that custom conversion instead of "Link Clicks" — this is what
   actually changes ad delivery (who Meta shows the ad to), not just what gets
   reported. Needs some conversion volume (Meta's rule of thumb is ~50/week
   per ad set) to reliably exit the learning phase.

### GDPR/consent

The Meta Pixel sets a third-party cookie and sends visitor data (IP, fbclid,
etc.) to Meta for ad-targeting purposes — unlike Umami, this generally
requires a consent banner for EU/UK/Swiss visitors under GDPR/ePrivacy, and
Meta's own business-tools terms require consent for EEA traffic regardless of
mechanism (Pixel or server-side Conversions API). Ads here are geo-targeted to
Brazil only, where LGPD doesn't mandate the same banner mechanic, so this is
live without a banner for now — a stray non-Brazilian organic visitor to a
`/listen/*` page is a small, currently-accepted residual gap, not a resolved
one. Add a consent banner before running any EU/UK-targeted campaigns.

## UTM convention — use this for every link you hand out

| Param | Meaning | Examples |
|---|---|---|
| `utm_source` | Where the click came from | `meta`, `instagram`, `hypeddit`, `google` |
| `utm_medium` | Type of channel | `paid_social`, `organic_social`, `smartlink`, `email` |
| `utm_campaign` | The push/release this belongs to | `mdf_launch`, `fishyboy_ads_aug` |
| `utm_content` | The specific ad/creative/placement | `video1_copyA`, `reel_bio_link`, `story_swipeup` |
| `utm_term` | Optional, only if you're A/B testing audiences/interests | `prog_rock_fans` |

Keep values lowercase, no spaces (use `_`). Consistency matters more than
cleverness — Umami's UTM report groups by exact string match.

### Meta / Facebook / Instagram Ads

Don't hand-type a different URL per ad. In Ads Manager, at the **ad** level,
open **Website URL parameters** (or "URL Parameters" under the Destination /
Tracking section) and set:

```
utm_source=meta&utm_medium=paid_social&utm_campaign=mdf_launch&utm_content={{ad.name}}
```

`{{ad.name}}` is a Meta dynamic parameter — it auto-fills with each ad's name
at click time, so every ad in the campaign is distinguishable in Umami without
you building separate links. Name your ads/ad-sets meaningfully in Ads Manager
(e.g. `video1_copyA`, `carousel_copyB`) since that name becomes your
`utm_content` value. Other useful dynamic params: `{{campaign.name}}`,
`{{adset.name}}`, `{{placement}}`.

The **destination URL itself** (what the ad links to) stays the plain landing
page: `https://www.giovanibaroni.com/listen/mecanicadosfluidos/` — the URL
parameters field appends the UTM query string automatically.

### Instagram organic (bio link, story, post)

Don't rely on Instagram's referrer — its in-app browser often strips or
mangles `document.referrer`, so untagged clicks can misleadingly show up as
"direct". Tag these manually:

```
https://www.giovanibaroni.com/listen/mecanicadosfluidos/?utm_source=instagram&utm_medium=organic_social&utm_campaign=mdf_launch&utm_content=bio_link
```

Use `utm_content=story_<date>` or `utm_content=reel_<name>` per post so you
can tell which post drove clicks.

### Hypeddit

Set the destination URL in your Hypeddit campaign to:

```
https://www.giovanibaroni.com/listen/mecanicadosfluidos/?utm_source=hypeddit&utm_medium=smartlink&utm_campaign=mdf_launch
```

### Internal links (other pages on the site linking to a /listen/ page)

Already tagged in code — every link from the homepage, a project page, or a
sibling `/listen/*` page's "more releases" card carries:

```
?utm_source=internal&utm_medium=onsite&utm_content=<homepage_strip|project_page_cta|related_release_card>
```

So filtering `utm_source = internal` tells you how much of a listen page's
traffic is people who were already browsing the site, as opposed to arriving
from an ad or external link. If you add a new internal link to a `/listen/*`
page later, tag it the same way — and link directly to the concrete page
(e.g. `/listen/fishyboy`), not the bare `/listen` path: that route is a
static redirect (`astro.config.mjs`) that does a hard meta-refresh to a fixed
URL and drops any query string, which would silently swallow the tag.

### Everything else (direct, Google, unknown)

Leave untagged. Umami shows these under Referrers as `google.com`, `(none)`
(direct), etc. — no action needed.

## Reading the funnel in Umami

For a given landing page (e.g. `/listen/mecanicadosfluidos/`):

1. Open the website in Umami, set the date range.
2. Add a filter for the UTM values you care about (e.g. `utm_source = meta`,
   `utm_campaign = mdf_launch`). The **Sessions** count with that filter =
   landing page visitors from that source/campaign.
3. Go to the **Events** tab (same filter still applied) and look at
   `stream_click` — broken down by `platform` and `song` properties. That
   count = outbound clicks from that source/campaign.
4. `stream_click count ÷ sessions count` = click-through rate for that
   source/campaign/ad.
5. Use the **UTM** report tab for a quick top-level breakdown across all
   campaigns/content without setting filters manually each time.

This gets you: source/campaign/ad → visitors → Spotify (or other platform)
clicks → CTR, without building any custom dashboard.

## Known limitations (accepted trade-offs, not bugs)

- In-app browsers (Instagram/Facebook) can undercount unique visitors
  slightly compared to a full browser, since they sometimes clear storage
  between opens. Doesn't affect UTM/event correlation.
- No cross-page-journey UTM persistence was added — unnecessary here since
  the ad click and the Spotify click happen on the same landing-page load.
- Ad blockers that block `cloud.umami.is` will hide those sessions, same as
  with any analytics tool. Expect undercounting on the order of ~5-10%, not
  a fundamental attribution failure.
