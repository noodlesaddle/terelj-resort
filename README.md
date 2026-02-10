# Terelj Resort - Property Showcase

A Next.js landing page inspired by NOT A HOTEL's property pages, built with shadcn/ui components.

## Images Used

The page currently displays:

**Hero Image:**
- `/renders/10.jpg` - Main exterior view

**Gallery (8 images):**
1. `/renders/Scene 2.png` - Interior dining/living space
2. `/renders/8.jpg` - Panoramic view
3. `/renders/koridor.jpg` - Corridor connection
4. `/renders/9.jpg` - Natural sanctuary view
5. `/renders/Scene 7.png` - Morning light interior
6. `/renders/15.jpg` - Warm interior space
7. `/renders/Scene 6.png` - Evening exterior
8. `/renders/17.jpg` - Mountain vista

**Floor Plan:**
- `/renders/Image.png` - Architectural floor plan

## Additional Available Images

You have more renders available in `/public/renders/`:
- Images 3-7, 11, 13-16 (various views)
- Scene 222.png, Scene 7a.png
- Image(3.png, Image(5.png
- Pasted Image #1-4.jpg

Feel free to swap any images by editing `components/sections/PropertyGallery.tsx`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add your images to the `public` folder:

```
public/
├── hero.jpg                    # Main hero image
├── renders/
│   ├── exterior-1.jpg         # Exterior render
│   ├── interior-1.jpg         # Interior render
│   ├── bath.jpg               # Bathroom/spa render
│   ├── bedroom.jpg            # Bedroom render
│   ├── living.jpg             # Living area render
│   └── view.jpg               # View/landscape render
└── layouts/
    └── floor-plan.png         # Floor plan (PNG or DWG converted to PNG)
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Converting DWG Files

If you have DWG files, you'll need to convert them to PNG/JPG:
- Use AutoCAD, DraftSight, or online converters
- Export at high resolution (300 DPI recommended)
- Save as PNG for best quality with transparency

## Customization

Edit the content in these files:
- `components/sections/PropertyGallery.tsx` - Gallery images and descriptions
- `components/sections/PropertySpecs.tsx` - Property specifications
- `components/Navigation.tsx` - Site name and navigation
- `app/layout.tsx` - Page title and metadata

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
