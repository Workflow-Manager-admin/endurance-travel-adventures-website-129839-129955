# Supabase Setup Guide for Endurance Travel Adventures

## Quick Setup Checklist

✅ **Environment Variables Configured**
- `NEXT_PUBLIC_SUPABASE_URL` - Set in project .env
- `NEXT_PUBLIC_SUPABASE_KEY` - Set in project .env

✅ **Dependencies Installed**
- `@supabase/supabase-js` - Supabase client
- `tailwind-merge` - Utility styling
- `clsx` - Conditional classes

✅ **Database Schema Ready**
- Adventures table definition
- Contact messages table definition
- Row Level Security policies

## How It Works

### 1. Automatic Database Setup
The application includes automatic database initialization:
- Tables are created on first access if they don't exist
- Sample adventure data is seeded automatically
- RLS policies are applied for security

### 2. Database Operations
All database operations are handled through the API layer:

```typescript
// Fetch adventures
import { getAdventures, getFeaturedAdventures } from '@/lib/api'

// Submit contact form
import { submitContactMessage } from '@/lib/api'

// Check connection
import { checkDatabaseConnection } from '@/lib/api'
```

### 3. Manual Database Setup (if needed)
If automatic setup fails, you can manually initialize:

```typescript
import { initializeDatabase, seedAdventures } from '@/lib/database-setup'

// Run once to set up tables
await initializeDatabase()

// Run once to add sample data
await seedAdventures()
```

## File Structure

```
src/lib/
├── supabase.ts       # Client configuration & TypeScript types
├── api.ts            # Database operations (getAdventures, submitContactMessage)
├── database-setup.ts # Table creation & data seeding
├── utils.ts          # URL utilities & helper functions
├── env.ts            # Environment validation
└── init.ts           # Application initialization
```

## Environment Configuration

### Current Setup
The project is configured with:
- ✅ NEXT_PUBLIC_SUPABASE_URL
- ✅ NEXT_PUBLIC_SUPABASE_KEY

### Supabase Dashboard Configuration
1. **Authentication Settings**
   - Site URL: Set to your domain
   - Redirect URLs: Add your domain + `/**`

2. **Database Settings**
   - Tables are created automatically
   - RLS is enabled by default
   - Public read access for adventures
   - Public insert access for contact messages

## Sample Data

The application includes sample adventures:

### Featured Adventures
- **Everest Base Camp Trek** ($3,500) - 14 days, Hard difficulty
- **Patagonia Wilderness Expedition** ($2,800) - 10 days, Medium difficulty

### Regular Adventures  
- **Arctic Photography Expedition** ($4,200) - 7 days, Easy difficulty

## Security Features

### Row Level Security (RLS)
- ✅ Enabled on all tables
- ✅ Public read access for adventures (anyone can view)
- ✅ Public insert access for contact messages (anyone can submit)
- ✅ No sensitive data exposure

### Environment Validation
- ✅ Required environment variables are validated on startup
- ✅ Proper error messages for missing configuration
- ✅ URL format validation

## Troubleshooting

### Database Connection Issues
1. Verify environment variables are set correctly
2. Check Supabase project status in dashboard
3. Ensure RLS policies allow the operations you're trying to perform

### Build Errors
- All dependencies are installed automatically
- TypeScript types are properly defined
- ESLint issues are resolved

### Missing Data
- Sample data is seeded automatically on first run
- Check browser console for initialization logs
- Manually run seeding functions if needed

## Production Deployment

### Environment Variables
Ensure production environment has:
- `NEXT_PUBLIC_SUPABASE_URL` - Your production Supabase URL
- `NEXT_PUBLIC_SUPABASE_KEY` - Your production Supabase anon key
- `NEXT_PUBLIC_SITE_URL` - Your production domain (optional)

### Supabase Dashboard
1. Update Site URL to production domain
2. Add production domain to Redirect URLs
3. Monitor database usage and performance
4. Consider implementing caching for high-traffic scenarios

## Development Workflow

1. **Local Development**: Environment already configured
2. **Database Access**: Automatic table creation and seeding
3. **API Operations**: Use provided functions in `src/lib/api.ts`
4. **Testing**: Built-in connection validation
5. **Deployment**: Configure production environment variables

## Support

For issues with:
- **Database Operations**: Check `src/lib/api.ts`
- **Table Creation**: Check `src/lib/database-setup.ts`
- **Environment Setup**: Check `src/lib/env.ts`
- **Authentication**: Future implementation in auth utilities

---

**Status**: ✅ Fully Configured and Ready for Use
**Last Updated**: Configuration complete with all dependencies and database schema
