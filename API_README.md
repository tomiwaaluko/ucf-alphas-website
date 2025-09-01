# Contact API Setup

This API endpoint handles contact form submissions securely using Resend email service.

## Files

- `api/contact.ts` - Serverless function that handles contact form submissions
- `src/components/Contact.tsx` - Frontend contact form component

## Security Features

- Server-side API key handling (not exposed to client)
- Input validation and sanitization
- Rate limiting protection through serverless platform
- CORS headers configuration
- Error handling with user-friendly messages

## Environment Variables

Set these in your deployment platform (Vercel, Netlify, etc.):

```bash
RESEND_API_KEY=your_resend_api_key_here
TO_EMAIL=your-email@example.com
FROM_EMAIL=onboarding@resend.dev  # or your verified domain
```

## Testing

1. Run your development server
2. Open browser console
3. Call `window.testContactAPI()` to test the endpoint

## Deployment

The API will automatically deploy with your application on Vercel/Netlify as a serverless function.

## Migration Notes

This setup replaces the previous client-side Resend implementation for improved security:

- API keys are now server-side only
- No more CORS issues
- Better error handling
- Protection against client-side tampering
