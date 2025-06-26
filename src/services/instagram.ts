// Instagram Basic Display API Service
export interface InstagramMedia {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  thumbnail_url?: string;
}

export interface InstagramApiResponse {
  data: InstagramMedia[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

class InstagramService {
  private readonly baseUrl = "https://graph.instagram.com";
  private readonly accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

  constructor() {
    if (!this.accessToken) {
      console.warn("Instagram access token not found. Using mock data.");
    }
  }

  /**
   * Fetch user's media from Instagram Basic Display API
   * @param limit Number of media items to fetch (max 25)
   * @returns Promise with Instagram media data
   */
  async getUserMedia(limit: number = 12): Promise<InstagramMedia[]> {
    if (!this.accessToken) {
      throw new Error("Instagram access token not configured");
    }

    try {
      const fields = [
        "id",
        "media_type",
        "media_url",
        "permalink",
        "caption",
        "timestamp",
        "thumbnail_url",
      ].join(",");

      const response = await fetch(
        `${this.baseUrl}/me/media?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        throw new Error(
          `Instagram API error: ${response.status} ${response.statusText}`
        );
      }

      const data: InstagramApiResponse = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
      throw error;
    }
  }

  /**
   * Refresh long-lived access token
   * @returns Promise with new access token data
   */
  async refreshAccessToken(): Promise<{
    access_token: string;
    token_type: string;
    expires_in: number;
  }> {
    if (!this.accessToken) {
      throw new Error("Instagram access token not configured");
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.accessToken}`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error(`Token refresh error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error refreshing Instagram token:", error);
      throw error;
    }
  }

  /**
   * Generate Instagram OAuth URL for authorization
   * @returns Authorization URL
   */
  getAuthUrl(): string {
    const appId = import.meta.env.VITE_INSTAGRAM_APP_ID;
    const redirectUri = import.meta.env.VITE_INSTAGRAM_REDIRECT_URI;

    if (!appId || !redirectUri) {
      throw new Error("Instagram app configuration missing");
    }

    const params = new URLSearchParams({
      client_id: appId,
      redirect_uri: redirectUri,
      scope: "user_profile,user_media",
      response_type: "code",
    });

    return `https://api.instagram.com/oauth/authorize?${params.toString()}`;
  }

  /**
   * Exchange authorization code for access token
   * @param code Authorization code from Instagram
   * @returns Promise with access token data
   */
  async exchangeCodeForToken(
    code: string
  ): Promise<{ access_token: string; user_id: string }> {
    const appId = import.meta.env.VITE_INSTAGRAM_APP_ID;
    const appSecret = import.meta.env.VITE_INSTAGRAM_APP_SECRET;
    const redirectUri = import.meta.env.VITE_INSTAGRAM_REDIRECT_URI;

    if (!appId || !appSecret || !redirectUri) {
      throw new Error("Instagram app configuration missing");
    }

    try {
      const formData = new FormData();
      formData.append("client_id", appId);
      formData.append("client_secret", appSecret);
      formData.append("grant_type", "authorization_code");
      formData.append("redirect_uri", redirectUri);
      formData.append("code", code);

      const response = await fetch(
        "https://api.instagram.com/oauth/access_token",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Token exchange error: ${response.status}`);
      }

      const shortLivedToken = await response.json();

      // Exchange short-lived token for long-lived token
      const longLivedResponse = await fetch(
        `${this.baseUrl}/access_token?grant_type=ig_exchange_token&client_secret=${appSecret}&access_token=${shortLivedToken.access_token}`
      );

      if (!longLivedResponse.ok) {
        throw new Error(`Long-lived token error: ${longLivedResponse.status}`);
      }

      return await longLivedResponse.json();
    } catch (error) {
      console.error("Error exchanging code for token:", error);
      throw error;
    }
  }
}

export const instagramService = new InstagramService();
