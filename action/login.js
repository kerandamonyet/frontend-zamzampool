import axios from 'axios';
import { LoginFormSchema } from '../utils/LoginSchema';
import { useRouter } from 'next/router';

export async function login(formData) {
  const router = useRouter(); // Initialize router for redirection

  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Send login request
    const response = await axios.post('/api/auth/login', {
      email: formData.get('email'),
      password: formData.get('password'),
    });

    // Store the token in localStorage
    localStorage.setItem('token', response.data.token);

    // Redirect to dashboard or another page
    router.push('/dashboard');

    return response.data; // Return data on successful login
  } catch (error) {
    if (error.response) {
      // Return server-side errors
      return { errors: error.response.data.errors || { general: 'Login failed' } };
    } else {
      // Return network error
      return { errors: { general: 'Network error' } };
    }
  }
}
