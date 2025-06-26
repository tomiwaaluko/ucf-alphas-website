# Instagram Integration Setup Guide

## 🚀 Quick Start

Your Instagram feed is now set up with **automatic fallback**:

- ✅ **Currently shows**: Demo data (mock posts)
- ✅ **Will automatically use**: Real Instagram data when configured
- ✅ **No errors**: Graceful fallback system

## 📋 Step-by-Step Setup

### 1. Create Facebook/Instagram App

1. **Go to Facebook Developers**: https://developers.facebook.com/
2. **Create New App**:
   - Choose "Consumer" type
   - Fill in your app details
3. **Add Instagram Basic Display** product
4. **Configure Settings**:
   - Valid OAuth Redirect URIs: `https://your-domain.com/auth/instagram`
   - Deauthorize Callback URL: `https://your-domain.com/auth/instagram/deauth`

### 2. Update Environment Variables

Edit your `.env.local` file with your app credentials:

```env
VITE_INSTAGRAM_APP_ID=your_app_id_here
VITE_INSTAGRAM_APP_SECRET=your_app_secret_here
VITE_INSTAGRAM_REDIRECT_URI=https://your-domain.com/auth/instagram
VITE_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
```

### 3. Get Instagram Access Token

#### Option A: Manual Token Generation (Easiest)

1. **Go to Instagram Basic Display** in your app
2. **Add Instagram Tester**: Add your Instagram account
3. **Generate Token**: Follow the authorization flow
4. **Get Long-Lived Token**: Exchange for 60-day token

#### Option B: Automatic OAuth Flow (Advanced)

The service includes methods for full OAuth implementation:

- `getAuthUrl()` - Generate authorization URL
- `exchangeCodeForToken()` - Exchange code for token
- `refreshAccessToken()` - Refresh expired tokens

### 4. Update Instagram Handle

Replace placeholder links in `InstagramFeed.tsx`:

```tsx
// Line 200 & 310 - Replace with your actual handle
href = "https://instagram.com/your_actual_handle";
```

## 🔧 Configuration Options

### Customize Number of Posts

```tsx
// In InstagramFeed.tsx, change the limit:
const realPosts = await instagramService.getUserMedia(6); // Show 6 posts instead of 12
```

### Modify Instagram Handle Display

```tsx
// Update the display text:
Follow @YourActualHandle
```

### Add Custom Error Messages

```tsx
// In instagram.ts service, customize error handling
```

## 🎨 Customization

### Colors & Styling

- **Primary colors**: Pink/Purple gradients (Instagram brand colors)
- **Hover effects**: Scale and glow animations
- **Grid layout**: Responsive (1-3 columns based on screen size)

### Layout Options

```tsx
// Change grid layout in InstagramFeed.tsx:
className = "grid md:grid-cols-2 lg:grid-cols-4 gap-6"; // 4 columns on large screens
```

## 🚨 Troubleshooting

### Common Issues

1. **"Using demo data" message**:

   - Access token not configured
   - Instagram app not set up correctly
   - Network/API issues

2. **CORS errors**:

   - Instagram API calls must be made from server-side or authorized domains
   - Consider using serverless functions for production

3. **Token expiration**:
   - Instagram tokens expire (60 days for long-lived)
   - Implement refresh logic or manual renewal

### Error Handling

The component automatically:

- ✅ Falls back to demo data if API fails
- ✅ Shows helpful error messages
- ✅ Includes refresh functionality
- ✅ Logs errors for debugging

## 📱 Features Included

- **Responsive design** - Works on all devices
- **Auto-refresh** - Manual refresh button for real data
- **Video support** - Handles Instagram videos with thumbnails
- **Loading states** - Professional loading indicators
- **Error boundaries** - Graceful error handling
- **Accessibility** - Proper alt tags and semantic HTML

## 🔄 Updates & Maintenance

### Token Refresh

Instagram tokens need renewal every 60 days:

```tsx
// Use the refresh method:
await instagramService.refreshAccessToken();
```

### Content Moderation

The feed automatically shows your latest posts. Consider:

- Planning Instagram content strategically
- Using relevant hashtags (#AlphaPhiAlpha #XiIota)
- Regular posting schedule for fresh content

## 📞 Support

If you need help:

1. Check browser console for error messages
2. Verify environment variables are correct
3. Test Instagram app configuration
4. Ensure Instagram account is public or properly authorized

The integration is designed to work seamlessly - just add your credentials and it will automatically switch from demo to real data!
