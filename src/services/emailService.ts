import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
// Get your Public Key from: https://dashboard.emailjs.com/admin/account
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE';

// Service ID for your connected email service (e.g., Gmail)
// Get it from: https://dashboard.emailjs.com/admin → Email Services
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE';

// Template ID for the notification email sent to Lakshya Properties
const NOTIFICATION_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID || 'YOUR_NOTIFICATION_TEMPLATE_ID';

// Template ID for the auto-reply email sent to the user
const AUTO_REPLY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'YOUR_AUTO_REPLY_TEMPLATE_ID';

let initialized = false;

function ensureInit() {
  if (!initialized) {
    emailjs.init(PUBLIC_KEY);
    initialized = true;
  }
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyInterest: string;
  budget: string;
  message: string;
}

/**
 * Sends the contact form data to kamleshk798@gmail.com
 * AND sends an auto-reply confirmation to the user.
 */
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean }> {
  ensureInit();

  const templateParams = {
    full_name: data.fullName,
    phone: data.phone,
    user_email: data.email,
    property_interest: data.propertyInterest,
    budget: data.budget,
    message: data.message,
    // Auto-reply specific fields
    to_name: data.fullName,
    reply_to: data.email,
  };

  try {
    // 1) Send notification to Lakshya Properties
    const notificationPromise = emailjs.send(
      SERVICE_ID,
      NOTIFICATION_TEMPLATE_ID,
      templateParams,
    );

    // 2) Send auto-reply confirmation to the user
    // The EmailJS template for auto-reply should have "To Email" set to {{user_email}}
    const autoReplyPromise = emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      templateParams,
    );

    await Promise.all([notificationPromise, autoReplyPromise]);
    return { success: true };
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
}
