import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Send email using EmailJS with your exact structure
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_name: 'Founders of 404',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
          current_date: new Date().toLocaleString()
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSuccess(true);
        return { success: true, message: 'Message sent successfully!' };
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      const errorMessage = error.text || error.message || 'Failed to send message. Please try again.';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  };

  return {
    sendEmail,
    isLoading,
    error,
    success,
    resetState,
  };
};

export default useEmailJS;
