# Setup Checklist for Maha's Makeover Website

Use this checklist to ensure everything is set up correctly before going live.

## Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Sanity Project ID configured
- [ ] Sanity Dataset name set
- [ ] Gmail user email set (GMAIL_USER)
- [ ] Gmail App Password generated (GMAIL_APP_PASSWORD)
- [ ] Admin email address set (ADMIN_EMAIL)
- [ ] Google Analytics ID added (optional)

### 2. Content Setup
- [ ] Replace placeholder hero images (hero-1.jpg, hero-2.jpg, hero-3.jpg)
- [ ] Add gallery images to Sanity CMS
- [ ] Add at least 3-5 sample reviews to Sanity
- [ ] Update service descriptions and pricing
- [ ] Add class schedules and details
- [ ] Update contact information (phone, email, address)

### 3. Sanity CMS Configuration
- [ ] Sanity project created
- [ ] Schema imported from `sanity/schema.ts`
- [ ] Studio URL accessible
- [ ] Test adding a gallery image
- [ ] Test approving a review
- [ ] Verify images appear on website

### 4. Email Configuration (Gmail SMTP - FREE)
- [ ] Gmail account ready
- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated (16 characters)
- [ ] Environment variables set (GMAIL_USER, GMAIL_APP_PASSWORD, ADMIN_EMAIL)
- [ ] Test booking form submission
- [ ] Verify admin receives email
- [ ] Verify user receives confirmation email (optional)

### 5. Images & Assets
- [ ] Hero carousel images added (3-5 images)
- [ ] Gallery images added (minimum 12 images)
- [ ] Review images added (optional)
- [ ] Favicon created and added
- [ ] Open Graph image created (og-image.jpg, 1200x630px)
- [ ] All images optimized for web

### 6. Content Review
- [ ] About page content reviewed
- [ ] Services descriptions accurate
- [ ] Pricing information updated
- [ ] Class schedules current
- [ ] Contact information correct
- [ ] Privacy policy reviewed
- [ ] Terms of service reviewed

### 7. Testing
- [ ] Test booking form submission
- [ ] Test model signup form
- [ ] Test review submission
- [ ] Test contact form
- [ ] Test gallery filters
- [ ] Test lightbox functionality
- [ ] Test mobile navigation
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify email notifications work

### 8. SEO Setup
- [ ] Meta titles and descriptions added to all pages
- [ ] Open Graph tags verified
- [ ] JSON-LD structured data verified
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Google Search Console set up
- [ ] Sitemap submitted to Google
- [ ] Alt text added to all images

### 9. Analytics
- [ ] Google Analytics property created
- [ ] Measurement ID added to environment variables
- [ ] Analytics tracking verified
- [ ] Google Search Console verified
- [ ] Test events firing correctly

### 10. Deployment
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added to Vercel
- [ ] Initial deployment successful
- [ ] Custom domain connected (if applicable)
- [ ] SSL certificate active
- [ ] HTTPS working

### 11. Post-Deployment
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Forms submit successfully
- [ ] Emails sending correctly
- [ ] Images loading properly
- [ ] Mobile experience tested
- [ ] Performance checked (Lighthouse)
- [ ] SEO verified


## Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Important Notes

1. **Images**: Replace all placeholder images in the `public/` directory with actual portfolio photos
2. **Contact Info**: Update phone number, email, and address throughout the site
3. **Domain**: Update `mahasmakeover.com` references to your actual domain
5. **CMS**: All content should be managed through Sanity CMS for easy updates

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Once all items are checked, your website is ready to go live!** 🎉

