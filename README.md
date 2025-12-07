# Maha's Makeover - Luxury Bridal Makeup Website

A modern, luxury website for Maha's Makeover - a professional bridal makeup artist offering bridal looks, event makeup, saree draping, photoshoots, and bridal makeup classes.

## 🚀 Features

- **Modern Luxury UI**: Elegant design with warm neutrals, gold accents, and smooth animations
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Gallery**: Filterable image gallery with lightbox
- **Booking System**: Comprehensive booking form with email notifications
- **Reviews**: Client review system with moderation workflow
- **CMS Integration**: Sanity CMS for easy content management
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Analytics Ready**: Google Analytics integration
- **Serverless Functions**: Form submissions and email sending via Vercel

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 (React) with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity
- **Email**: SendGrid
- **Hosting**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ and npm
- Sanity account (for CMS)
- SendGrid account (for emails)
- Google Analytics account (optional)

## 🚦 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# SendGrid (for email notifications)
SENDGRID_API_KEY=your_sendgrid_api_key
ADMIN_EMAIL=your_admin_email@example.com
FROM_EMAIL=noreply@mahasmakeover.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

```

### 3. Set Up Sanity CMS

1. Create a new project at [sanity.io](https://www.sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`
3. Run `sanity init` in the project root
4. Import the schema from `sanity/schema.ts`
5. Get your Project ID and Dataset name
6. Add them to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes (serverless functions)
│   ├── about/             # About page
│   ├── book/              # Booking form page
│   ├── classes/           # Classes page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── models/            # Model signup page
│   ├── reviews/           # Reviews page
│   ├── services/          # Services page
│   └── layout.tsx        # Root layout
├── components/            # React components
├── lib/                   # Utility functions
├── sanity/                # Sanity CMS configuration
└── public/                # Static assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  base: '#FBF9F7',      // Off-white background
  accent: '#C69C6D',    // Warm gold
  text: '#2B2B2B',      // Charcoal text
  neutral: '#8F8F8F',   // Soft gray
  accent2: '#8B4A6B',  // Deep plum
}
```

### Fonts

Fonts are loaded from Google Fonts in `app/globals.css`. To change fonts, update the import and `tailwind.config.ts`.

### Hero Images

Replace placeholder images in the `public/` directory:
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` - Hero carousel images
- `gallery-*.jpg` - Gallery images
- `review-*.jpg` - Review images

## 📧 Email Setup (SendGrid)

1. Sign up for a SendGrid account
2. Create an API key with "Mail Send" permissions
3. Verify your sender email address
4. Add the API key to `.env.local`

### Email Templates

The booking form sends two emails:
- **Admin notification**: Sent to `ADMIN_EMAIL` with booking details
- **User confirmation**: Sent to the user confirming receipt

## 📊 Analytics Setup

### Google Analytics

1. Create a GA4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to `.env.local` as `NEXT_PUBLIC_GA_ID`
4. Analytics will automatically track page views

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (HTML tag method recommended)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Build your Next.js app
- Deploy serverless functions
- Set up HTTPS
- Provide a preview URL for each PR

### Custom Domain

1. In Vercel dashboard, go to your project settings
2. Add your domain (e.g., `mahasmakeover.com`)
3. Update DNS records as instructed by Vercel
4. SSL certificate is automatically provisioned

## 📝 Content Management

### Adding Gallery Images

1. Log in to Sanity Studio (usually at `/admin` or separate URL)
2. Go to "Gallery Image"
3. Upload image, add title, select category
4. Check "Approved" to make it visible
5. Add tags for filtering

### Managing Reviews

1. Reviews submitted via the website appear in Sanity
2. Review each submission
3. Check "Approved" to publish
4. Check "Featured" to show on homepage

### Updating Services

1. Go to "Service" in Sanity
2. Edit service details, pricing, features
3. Set "Display Order" to control order on page

## 🔒 Security

- All forms include input validation
- File uploads are limited (size and type)
- Environment variables are never exposed to client
- HTTPS enforced in production
- Content Security Policy can be added in `next.config.js`

## 📱 Mobile Optimization

- Responsive design tested on all screen sizes
- Touch-friendly buttons and forms
- Mobile menu with smooth animations
- Optimized images with Next.js Image component

## 🎯 SEO Checklist

- ✅ Meta tags on all pages
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (LocalBusiness)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt text for images (add in CMS)
- ✅ Fast page load times
- ✅ Mobile-friendly

## 🐛 Troubleshooting

### Forms not sending emails

- Check SendGrid API key is correct
- Verify sender email is verified in SendGrid
- Check server logs in Vercel dashboard

### Images not loading

- Ensure images are in `public/` directory
- Check image paths in components
- Verify Sanity image URLs if using CMS images

### Build errors

- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild

## 📞 Support

For questions or issues:
- Email: mahasmakeoverr@gmail.com
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Sanity documentation](https://www.sanity.io/docs)

## 📄 License

This project is proprietary and confidential.

## 🎉 Next Steps

1. **Add Real Images**: Replace placeholder images with actual portfolio photos
2. **Set Up Sanity**: Complete Sanity CMS setup and add initial content
3. **Configure Email**: Set up SendGrid and test email sending
4. **Add Analytics**: Set up Google Analytics and Search Console
5. **Test Forms**: Test all forms and email notifications
6. **Deploy**: Deploy to Vercel and connect your domain
7. **SEO**: Submit sitemap and verify in Search Console

---

Built with ❤️ for Maha's Makeover

