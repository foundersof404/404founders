// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_3e1q7tg',
  
  // Your EmailJS template ID
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_u3rj9pd',
  
  // Your EmailJS public key
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '3tc-V50OjKWn-6o5g',
};

// EmailJS template variables are now handled directly in the send function
// No need for separate mapping since we use direct field names

export default EMAILJS_CONFIG;
