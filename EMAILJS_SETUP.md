# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form to work properly.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

### Template Subject:
```
[URGENT] New Business Inquiry - {{service}}
```

### Template Body:
```
Dear {{to_name}},

ACTION REQUIRED: New potential client contact

═══════════════════════════════════════════════════════════

CLIENT INFORMATION:
- Full Name: {{from_name}}
- Email Address: {{from_email}}
- Phone Number: {{phone}}
- Company: {{company}}
- Service Interest: {{service}}
- Inquiry Date: {{current_date}}

FULL MESSAGE:
{{message}}

═══════════════════════════════════════════════════════════

RECOMMENDED NEXT STEPS:
1. Respond within 24 hours for best conversion rates
2. Reference their specific service interest: {{service}}
3. Consider scheduling a discovery call

This inquiry was automatically generated from your website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxxx`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here', 
  PUBLIC_KEY: 'your_public_key_here',
};
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"** - Double-check your service ID
2. **"Invalid template ID"** - Verify your template ID
3. **"Invalid public key"** - Make sure your public key is correct
4. **"Email not sending"** - Check your email service configuration

### Free Plan Limits:
- 200 emails per month
- 2 email services
- 2 email templates

### Need More Emails?
Upgrade to a paid plan for higher limits and additional features.

## Security Notes

- Never commit your EmailJS credentials to public repositories
- Consider using environment variables for production
- The public key is safe to use in client-side code
- EmailJS handles the email sending securely

## Support

If you need help:
- Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Contact EmailJS support through their dashboard
