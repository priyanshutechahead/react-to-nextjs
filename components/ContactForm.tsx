'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = 'type your full name sir';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'invalid email. type your correct one';
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = 'at least type one paragraph for me. its too short  😅😅';
    }

    return newErrors;
  };

  const onSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setResult('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

    formData.append('access_key', accessKey);

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data: {
        success: boolean;
        message?: string;
      } = await response.json();

      if (data.success) {
        setResult('message sent successfully');
        form.reset();
      } else {
        setResult(
          data.message ||
            'something went wrong. please try again. fix the error yourself'
        );
      }
    } catch {
      setResult(
        'network error. please check your internet connection.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={onSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name">your name</label>

          <input
            type="text"
            id="name"
            name="name"
            className={`search-bar ${
              errors.name ? 'input-error' : ''
            }`}
            placeholder="your name"
          />

          {errors.name && (
            <span className="error-text">
              {errors.name}
            </span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="email">email</label>

          <input
            type="email"
            id="email"
            name="email"
            className={`search-bar ${
              errors.email ? 'input-error' : ''
            }`}
            placeholder="youremail@example.com"
          />

          {errors.email && (
            <span className="error-text">
              {errors.email}
            </span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="message">message</label>

          <textarea
            id="message"
            name="message"
            className={`search-bar ${
              errors.message ? 'input-error' : ''
            }`}
            placeholder="any meaagae for me? type here..."
            rows={5}
            style={{
              borderRadius: '15px',
              resize: 'vertical',
            }}
          />

          {errors.message && (
            <span className="error-text">
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="like-button"
          disabled={isSubmitting}
          style={{ width: '100%' }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {result && (
          <p
            className={`status-message ${
              result.includes('successfully')
                ? 'success'
                : 'error'
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </div>
  );
}