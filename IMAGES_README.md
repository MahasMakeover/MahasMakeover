# Images Setup Guide

This document explains what images you need to add to the website.

## Required Images

### Hero Carousel Images
Location: `public/hero-1.jpg`, `public/hero-2.jpg`, `public/hero-3.jpg`

- **Size**: Recommended 1920x1080px or larger
- **Format**: JPG or WebP
- **Content**: Your best bridal makeup work
- **Quantity**: 3-5 images for carousel rotation
- **Optimization**: Compress images before adding (use tools like TinyPNG or ImageOptim)

### Gallery Images
Location: Upload via Sanity CMS (recommended) or add to `public/gallery-*.jpg`

- **Size**: Recommended 1200x1200px or larger (square format works best)
- **Format**: JPG or WebP
- **Content**: Portfolio images categorized as:
  - Bridal looks
  - Haldi ceremonies
  - Photoshoots
  - Saree draping
  - Before/After transformations
- **Quantity**: Minimum 12 images, more is better
- **Naming**: Use descriptive names like `bridal-look-1.jpg`

### Review Images (Optional)
Location: Upload via Sanity CMS when adding reviews

- **Size**: 400x400px (square, for thumbnails)
- **Format**: JPG or PNG
- **Content**: Client photos (with permission) or avatar placeholders

### Open Graph Image
Location: `public/og-image.jpg`

- **Size**: 1200x630px (exact)
- **Format**: JPG
- **Content**: Your logo or best portfolio image
- **Purpose**: Shows when sharing website on social media

### Favicon
Location: `public/favicon.ico`

- **Size**: 32x32px or 16x16px
- **Format**: ICO
- **Content**: Your logo or brand icon

## Image Optimization Tips

1. **Compress Before Upload**: Use tools like:
   - [TinyPNG](https://tinypng.com)
   - [ImageOptim](https://imageoptim.com)
   - [Squoosh](https://squoosh.app)

2. **Use Next.js Image Component**: The website uses Next.js Image component which automatically optimizes images

3. **Responsive Images**: Next.js handles responsive images automatically

4. **Lazy Loading**: Images are lazy-loaded by default for better performance

## Adding Images via Sanity CMS

1. Log in to Sanity Studio
2. Go to "Gallery Image"
3. Click "Create new"
4. Upload your image
5. Fill in:
   - Title
   - Category (Bridal, Haldi, Photoshoot, etc.)
   - Tags (optional)
   - Check "Approved" to make it visible
6. Save

## Image Rights

**Important**: Ensure you have permission to use all images:
- Client photos require model release forms
- Third-party images require proper licensing
- Always credit photographers when applicable

## Quick Image Checklist

- [ ] 3-5 hero carousel images added
- [ ] 12+ gallery images added via Sanity
- [ ] Open Graph image created (1200x630px)
- [ ] Favicon created
- [ ] All images optimized/compressed
- [ ] Image rights/permissions obtained
- [ ] Alt text added in Sanity for accessibility

---

**Note**: The website will work with placeholder images, but you should replace them with actual portfolio photos before going live.

