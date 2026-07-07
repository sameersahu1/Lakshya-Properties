# 🏠 Lakshya Properties

> **"Your Dream Home Awaits"**

A modern, fully responsive real estate website built with **React 19**, **Vite**, **TypeScript** and **Tailwind CSS v4**. Lakshya Properties helps families find their perfect homes across India.

---

## 🌐 Live Preview

After build, the site is a single `dist/index.html` file — deploy anywhere (Netlify, Vercel, GitHub Pages, etc.).

---

## ✨ Features

| Section | What It Does |
|---|---|
| **Header** | Sticky navbar + top bar with phone/email (`sameersahu111.nm@gmail.com`), mobile hamburger menu, "Book a Visit" CTA |
| **Hero** | Fullscreen hero with Buy/Rent toggle, location search bar, animated stats (500+ Sold, 1200+ Families, 15+ Cities, 10+ Years) |
| **Featured Properties** | 9 property cards with real Pexels images, Villa/Apartment filter tabs, like buttons, price in ₹, beds/baths/area |
| **About Us** | Brand story (Lakshya = "Goal"), floating stats badge, 6 key selling points with check icons |
| **Services** | 8 services: Residential Sales, Commercial, Property Mgmt, Legal, Home Loans, Investment, Verification, Interior Design |
| **Why Choose Us** | 4 stat cards: 500+ Verified Listings, 48hr Response, 15+ Awards, 24/7 Support |
| **Gallery** | 6-image masonry grid with hover overlay showing title & category |
| **Testimonials** | 3 client reviews with 5-star ratings, photos and quotes |
| **CTA Banner** | Parallax background CTA with "Schedule a Visit" and "Call Now" buttons |
| **Contact Form** | Full form with EmailJS — sends enquiry to `sameersahu111.nm@gmail.com` + auto-reply: *"We'll get in touch soon!"* |
| **Footer** | Brand info, quick links, property types, cities served, contact details, newsletter, social links, scroll-to-top button |

### 📧 Contact Form — Email Flow

```
User fills form → clicks "Send Message"
        │
        ▼
  EmailJS sends TWO emails simultaneously:
        │
        ├─► NOTIFICATION to sameersahu111.nm@gmail.com
        │    (you receive the enquiry details)
        │
        └─► AUTO-REPLY to the user's email
             ("We will get in touch soon!")
```

---

## 🎨 Design

- **Colors**: Navy/Slate (`slate-900`) + Gold/Amber (`amber-500`) — premium real estate feel
- **Fonts**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Fully Responsive**: mobile → tablet → desktop
- **Animations**: hover cards, fade-in sections, smooth scroll, sticky header, animated spinner
- **Custom Logo**: House icon with target crosshair (Lakshya = Target/Goal)
- **Custom Scrollbar**: styled for webkit browsers

---

## 🚀 Tech Stack

| Tech | Usage |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 7](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Lucide React](https://lucide.dev) | Icons |
| [EmailJS](https://www.emailjs.com) | Client-side email (no backend needed) |
| [Google Fonts](https://fonts.google.com) | Playfair Display + Inter |

---

## 📦 Getting Started

### Prerequisites
- **Node.js** v18+ and **npm** v9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build
```

The production build outputs a single `dist/index.html` file (~304 KB gzip: ~84 KB).

---

## 📧 Setup EmailJS (5 Minutes)

> **Target email:** `sameersahu111.nm@gmail.com`

### Step 1 — Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) → **Sign Up Free** (200 emails/month)
2. Verify your email

### Step 2 — Connect Gmail as Email Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** → **Connect Account** → use the same Gmail account
3. Copy the **Service ID** (e.g., `service_xxxxxxxx`)

### Step 3 — Create Template 1: "Notification"
1. Go to **Email Templates** → **Create New Template**
2. Set it up like this:

```
Subject: New Enquiry from {{full_name}}

To Email: sameersahu111.nm@gmail.com

Body:
━━━━━━━━━━━━━━━━━━━━
Name:    {{full_name}}
Phone:   {{phone}}
Email:   {{user_email}}
Property: {{property_interest}}
Budget:  {{budget}}
Message: {{message}}
━━━━━━━━━━━━━━━━━━━━
```

3. **Save** and copy the **Template ID** (e.g., `template_xxxxxxxx`)

### Step 4 — Create Template 2: "Auto-Reply"
1. **Create New Template** again
2. Set **"To Email"** to `{{user_email}}`
3. Configure it:

```
Subject: Thank you for contacting Lakshya Properties, {{to_name}}!

Body:
Dear {{to_name}},

Thank you for reaching out to Lakshya Properties! 

We have received your message and our team will get in touch 
with you soon.

Here's a summary of your enquiry:
• Property Interest: {{property_interest}}
• Budget: {{budget}}
• Your Message: {{message}}

If you have any urgent queries, feel free to call us at 
+91 98765 43210.

Warm regards,
Lakshya Properties Team
```

4. **Save** and copy this **Template ID** too

### Step 5 — Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### Step 6 — Configure `.env` File
1. Open the `.env` file in the project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_PUBLIC_KEY=paste_your_public_key
VITE_EMAILJS_SERVICE_ID=paste_your_service_id
VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID=paste_notification_template_id
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=paste_auto_reply_template_id
```

3. Restart the dev server:

```bash
npm run dev
```

✅ **Done!** Fill the contact form and you'll receive the enquiry at `sameersahu111.nm@gmail.com`, and the sender gets an auto-reply instantly.

---

## 📁 Project Structure

```
lakshya-properties/
├── public/images/
│   ├── logo.png                      # Brand logo (house + target icon)
│   └── hero-bg.jpg                   # Hero background image
├── src/
│   ├── components/
│   │   ├── Header.tsx                # Sticky header + top bar + mobile nav
│   │   ├── Logo.tsx                  # Lakshya Properties logo component
│   │   ├── Hero.tsx                  # Hero section with search
│   │   ├── FeaturedProperties.tsx    # Property grid + filter buttons
│   │   ├── PropertyCard.tsx          # Individual property card
│   │   ├── About.tsx                 # About us + brand story
│   │   ├── Services.tsx              # 8 services grid (dark theme)
│   │   ├── WhyChooseUs.tsx           # 4 stat cards
│   │   ├── Gallery.tsx               # Masonry image gallery
│   │   ├── Testimonials.tsx          # Client reviews + ratings
│   │   ├── CTA.tsx                   # Call-to-action banner
│   │   ├── Contact.tsx               # Contact form + info panel
│   │   └── Footer.tsx                # Full footer + scroll-to-top
│   ├── data/
│   │   └── properties.ts             # 9 properties + 3 testimonials
│   ├── services/
│   │   └── emailService.ts           # EmailJS send logic (dual email)
│   ├── App.tsx                       # Root component
│   ├── main.tsx                      # React entry point
│   ├── index.css                     # Tailwind + global styles
│   └── env.d.ts                      # TypeScript env type declarations
├── .env                              # Your EmailJS credentials (git-ignored)
├── .env.example                      # EmailJS credentials template
├── index.html                        # HTML entry + Google Fonts
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Customization

### Change Contact Email
The contact form sends to `sameersahu111.nm@gmail.com`. To change it:
1. Update the email in `.env.example` and your `.env`
2. Update the display email in `Header.tsx`, `Contact.tsx`, `Footer.tsx`

### Change Property Listings
Edit `src/data/properties.ts` — update titles, prices (₹), locations, images, beds, baths, area.

### Change Brand Colors
Replace all `amber` classes with your preferred Tailwind color (e.g., `emerald`, `blue`, `rose`) across all component files.

### Change Logo
Replace `public/images/logo.png` with your own logo file.

### Change Hero Background
Replace `public/images/hero-bg.jpg` with your own image.

---

## 📄 License

MIT License — free for personal and commercial use.

---

## 👨‍💻 Contact

**Lakshya Properties**  
📧 sameersahu111.nm@gmail.com  
📞 +91 98765 43210  
🏢 42, MG Road, Sector 14, Gurgaon, Haryana 122001
