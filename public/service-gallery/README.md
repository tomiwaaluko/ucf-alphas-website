# Service Gallery Image Organization

This directory contains organized service event photos for the Xi Iota Chapter gallery system.

## Directory Structure

```
service-gallery/
├── community-food-drive/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
├── educational-mentorship/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
├── youth-leadership-workshop/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
├── health-wellness-fair/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
├── back-to-school-supply-drive/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
└── senior-citizen-support/
    ├── image1.jpg
    ├── image2.jpg
    └── ...
```

## Adding New Events

1. Create a new folder with the event name (use kebab-case)
2. Add photos to the folder
3. Update the event data in `ServiceGalleryDetail.tsx` to include the new event
4. Add the event to the gallery list in `ServiceGallery.tsx`

## Image Guidelines

- Use high-quality images (preferably 1920x1080 or higher)
- Compress images to keep file sizes reasonable
- Include descriptive captions for each photo
- Credit photographers when possible
- Ensure all photos have proper permissions for use

## Caption Format

Each photo should have:

- Descriptive caption explaining what's happening
- Photographer credit
- Event context if needed

Example:

```
"Brothers organizing food donations for distribution to local families during our annual holiday food drive"
```
