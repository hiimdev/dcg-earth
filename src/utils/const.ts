export const isProduction = process.env.NODE_ENV === 'production';

export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
  SANDBOX_DCG_URL: process.env.NEXT_PUBLIC_SANDBOX_DCG_URL || '',
  DCG_MAIL_CONTACT: process.env.SMTP_DEFAULT_EMAIL || '',
  DCG_MAIL_CC: process.env.NEXT_PUBLIC_DCG_MAIL_CC || '',
};

// export const API_IPIFY_URL = 'https://api.ipify.org';
// export const API_IP_URL = 'http://ip-api.com';
export const API_IP_INFO_URL = 'https://ipinfo.io/json';

export const USER_COOKIES = {
  ip: 'ip',
  countryCode: 'country_code',
};

export const IMAGE_TYPE = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
export const VIDEO_TYPE = ['mp4', 'mov', 'webm', 'ogg', 'wmv'];
