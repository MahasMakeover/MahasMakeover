# Deployment Guide - Maha's Makeover Website

This guide will walk you through deploying the Maha's Makeover website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Sanity account (for CMS)
- SendGrid account (for emails)
- Domain name (optional, but recommended)

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/yourusername/mahas-makeover.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Sanity CMS

1. Go to [sanity.io](https://www.sanity.io) and create an account
2. Create a new project
3. Install Sanity CLI:
```bash
npm install -g @sanity/cli
```

4. In your project directory, initialize Sanity:
```bash
cd sanity
sanity init
```

5. Follow the prompts:
   - Choose "Create new project"
   - Enter project name: "Maha's Makeover"
   - Choose dataset: "production"
   - Choose output path: "./"
   - Choose template: "Clean project with no predefined schemas"

6. Copy the schema from `sanity/schema.ts` to your Sanity project

7. Get your Project ID and Dataset from Sanity dashboard
   - Go to your project settings
   - Copy the Project ID
   - Note the Dataset name (usually "production")

## Step 3: Set Up SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify your email address
3. Create an API Key:
   - Go to Settings > API Keys
   - Click "Create API Key"
   - Name it "Maha's Makeover"
   - Give it "Mail Send" permissions
   - Copy the API key (you won't see it again!)

4. Verify a sender email:
   - Go to Settings > Sender Authentication
   - Verify a Single Sender (for testing) or set up Domain Authentication (for production)
   - Use this email as your `FROM_EMAIL`

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub

2. Click "Add New Project"

3. Import your GitHub repository

4. Configure the project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. Add Environment Variables:
   Click "Environment Variables" and add:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SENDGRID_API_KEY=your_sendgrid_api_key
   ADMIN_EMAIL=your_admin_email@example.com
   FROM_EMAIL=noreply@mahasmakeover.com
   NEXT_PUBLIC_GA_ID=your_google_analytics_id (optional)
   ```

6. Click "Deploy"

7. Wait for deployment to complete (usually 2-3 minutes)

## Step 5: Connect Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your domain (e.g., `mahasmakeover.com`)
4. Follow DNS configuration instructions:
   - Add a CNAME record pointing to Vercel
   - Or add A records as instructed
5. Vercel will automatically provision SSL certificate

## Step 6: Set Up Google Analytics (Optional)

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Add to Vercel environment variables as `NEXT_PUBLIC_GA_ID`
5. Redeploy the site

## Step 7: Set Up Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Verify ownership:
   - Choose "HTML tag" method
   - Copy the verification code
   - Add it to `app/layout.tsx` in the `<head>` section
   - Or use DNS verification
4. Submit your sitemap:
   - Go to "Sitemaps" section
   - Add: `https://yourdomain.com/sitemap.xml`
   - Submit

## Step 8: Test Everything

1. **Test Forms**:
   - Submit a booking form
   - Check that admin receives email
   - Check that user receives confirmation

2. **Test CMS**:
   - Log in to Sanity Studio
   - Add a gallery image
   - Approve it
   - Check that it appears on the website

3. **Test Mobile**:
   - Open site on mobile device
   - Test navigation, forms, gallery

4. **Test Performance**:
   - Run Lighthouse audit
   - Check page load times
   - Verify images are optimized

## Step 9: Ongoing Maintenance

### Adding Content

1. **Gallery Images**:
   - Log in to Sanity Studio
   - Go to "Gallery Image"
   - Upload image, add details
   - Check "Approved" to publish

2. **Reviews**:
   - Reviews submitted via website appear in Sanity
   - Review and approve them
   - Check "Featured" to show on homepage

3. **Services**:
   - Edit services in Sanity
   - Update pricing, descriptions, features

### Monitoring

- Check Vercel dashboard for deployment status
- Monitor SendGrid for email delivery
- Check Google Analytics for traffic
- Review form submissions in Sanity

## Troubleshooting

### Deployment Fails

- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors locally first

### Emails Not Sending

- Verify SendGrid API key is correct
- Check sender email is verified
- Check Vercel function logs
- Verify `ADMIN_EMAIL` and `FROM_EMAIL` are set

### Images Not Loading

- Check image paths are correct
- Verify images are in `public/` directory
- For Sanity images, check Project ID is correct
- Check Next.js image configuration

### CMS Not Working

- Verify Sanity Project ID and Dataset
- Check Sanity API token (if using)
- Ensure schema is properly set up
- Check browser console for errors

## Support

For issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Review this README and main README.md
4. Contact support if needed

---

**Congratulations!** Your website is now live! 🎉

