# Sanity CMS Setup Guide

This project has been configured to use Sanity CMS for managing project data instead of local data files.

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in your project root and add your Sanity project credentials:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=9rcwh0i2
NEXT_PUBLIC_SANITY_DATASET=production
```

### 2. Sanity Project Setup
1. Go to [sanity.io](https://sanity.io) and create a new project
2. Copy your Project ID and Dataset name to your `.env.local` file
3. Run `npm run studio` to start the Sanity Studio
4. Access the studio at `http://localhost:3333`

### 3. Project Schema
The project schema includes the following fields:
- **title** (required): Project title
- **slug** (required): URL-friendly identifier
- **thumbnail** (required): Project thumbnail image with alt text
- **description** (required): Project description
- **clientName** (required): Client name
- **date** (required): Project completion date
- **price** (optional): Project price/cost
- **techStack** (optional): Array of technologies used
- **link** (optional): Live project or demo link

### 4. Adding Projects
1. Open Sanity Studio (`npm run studio`)
2. Create a new "Project" document
3. Fill in all required fields
4. Add optional fields as needed
5. Publish the document

### 5. Development
- Run `npm run dev` for the Next.js development server
- Run `npm run studio` for the Sanity Studio
- Both can run simultaneously on different ports

## Migration from Local Data
The existing local data structure has been preserved for backward compatibility. The `transformProject` function converts Sanity data to match the expected format.

## Files Modified
- `sanity.config.ts` - Sanity configuration
- `sanity/schemas/project.ts` - Project schema definition
- `sanity/lib/client.ts` - Sanity client setup
- `sanity/lib/queries.ts` - GROQ queries for data fetching
- `app/Data.ts` - Updated to use Sanity data fetching
- `app/projects/[slug]/page.tsx` - Updated to fetch individual projects from Sanity
- `app/Sections/projects/page.tsx` - Updated to fetch all projects from Sanity
- `package.json` - Added studio script

## Commands
- `npm run dev` - Start Next.js development server
- `npm run studio` - Start Sanity Studio
- `npm run build` - Build the project
- `npm run start` - Start production server
