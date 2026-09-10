# BSM Traders Co. — Next.js Website

Ye aapki website ka **React/Next.js** version hai — same design, same functionality, lekin ab proper components mein organized hai (easy to maintain aur future features add karne ke liye behtar base).

## Project structure

```
app/
  layout.js            → shared HTML shell (header, footer, fonts, Snipcart)
  page.js               → Home
  about/page.js          → About
  services/page.js      → Services
  shop/page.js           → Shop
  wishlist/page.js       → Wishlist (saved products, this device only)
  blog/page.js            → Blog listing
  blog/[slug]/page.js     → Individual blog post
  gift-cards/page.js      → Gift cards (Snipcart-wired)
  contact/page.js        → Contact
  globals.css             → all styling (design tokens: navy/gold/ivory)
components/
  Header.js, Footer.js, PageHero.js, Faq.js
  SearchBar.js            → instant product search (header)
  ContactForm.js           → Web3Forms wiring
  Newsletter.js            → footer email signup (Web3Forms)
  PaymentBadges.js         → footer payment method badges
  ProductGrid.js            → shop grid, category + tag filters, quick view, wishlist
  QuickViewModal.js         → product quick-view popup
  SnipcartProvider.js       → cart + checkout wiring, live cart count/total
data/
  products.js              → edit this to add/remove/update products, categories, tags
  posts.js                  → edit this to add/remove/update blog posts
lib/
  wishlist.js                → wishlist logic (browser-local, no account needed)
public/
  logo-compact.jpg, logo-full.jpg
```

## What's new since the last version

- **Search** — instant product search in the header, no page reload
- **Wishlist** — heart icon on every product, saved list at `/wishlist` (stored on that visitor's device, no login needed)
- **Quick View** — hover a product and click "Quick View" for a popup with full details, without leaving the page
- **Sub-category tag filters** — shop page now filters by tag (e.g. "Best Seller", "Bulk Case") in addition to category
- **Live cart total** — header cart icon shows item count and running total once Snipcart is connected
- **Blog** — `/blog` listing + individual post pages, with sample posts ready to replace with your own
- **Gift Cards** — `/gift-cards` page with 4 preset amounts, wired to Snipcart checkout
- **Newsletter signup** — footer email capture, sends via the same Web3Forms key as the contact form
- **Payment badges** — Visa/Mastercard/Amex/PayPal badges in the footer

### Not included yet (need real information or bigger infrastructure)
- **Customer accounts / login** — needs a real auth + database backend (e.g. Clerk, Supabase, Auth0). Can be added as a separate project phase if you want it.
- **Real social media links** — footer icons still point to `#`. Send me your actual Facebook/Instagram/LinkedIn URLs and I'll wire them in.
- **"Also on Amazon/Walmart/eBay" strip** — only worth adding if you actually sell there; let me know which marketplaces apply.
- **Real testimonials & stats** — current ones are placeholders. Swap in real reviews/numbers whenever you have them (in `app/page.js`, `app/about/page.js`).
- **Showrooms page** — skipped since I don't have real showroom addresses; happy to build it once you share locations.

## Running it locally

```bash
npm install
npm run dev
```
Opens at `http://localhost:3000`.

## Before going live — same 2 steps as before

### 1. Contact form → real email (Web3Forms, free)
Open `components/ContactForm.js`, find:
```js
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
```
Get a free key at **https://web3forms.com** (just enter your email, no signup) and paste it in.

### 2. Shop checkout → real payment (Snipcart, free tier)
Open `components/SnipcartProvider.js`, find:
```js
const SNIPCART_PUBLIC_API_KEY = "YOUR_SNIPCART_PUBLIC_API_KEY";
```
Get your public key from **https://snipcart.com** (free account) and paste it in. Then connect Stripe or PayPal in the Snipcart dashboard so payments land in your own account.

### 3. Editing products
Open `data/products.js` — add, remove, or edit items in the `products` array. Each needs a unique `id`, a `category` (must match a key in `categories`), `name`, `price`, `desc`, and an optional `tags` array for sub-filtering.

### 4. Editing blog posts
Open `data/posts.js` — add a new object to publish a post. `slug` becomes the URL (`/blog/your-slug`), `body` is an array of paragraphs.

### 5. Gift cards — one extra Snipcart setting
Gift cards work like any other product, but for the email to actually contain a redeemable code, mark them as **digital products** in your Snipcart dashboard (Products → the gift card item → Digital good). Otherwise they'll check out fine but won't auto-deliver a code.

## Deploying

**Easiest — Vercel (made by the Next.js team, free tier):**
1. Push this folder to a GitHub repo
2. Go to vercel.com → Import Project → select the repo → Deploy
3. Done — Vercel builds and hosts it automatically, including future git pushes

**Any other host (cPanel, your own server, etc.):**
```bash
npm run build
npm run start
```
This runs a small Node server — needs a host that supports Node.js (Vercel, Netlify, Railway, Render, or a VPS). Plain static file hosting (like old-school shared hosting) won't run a Node app directly — if you need that, let me know and I can switch the project to a static export instead.

## Editing content later
All page text lives directly in the `app/*/page.js` files as JSX — readable and close to plain HTML. Colors/fonts/spacing are in `app/globals.css`. If you want help adding pages, a blog, search, or wishlist next, just ask.
