import axios from 'axios';

export async function order(formData) {
  // Validate form fields
  const validatedFields = OrderFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    entry_date: formData.get('entry_date'),
    ticket_count: parseInt(formData.get('ticket_count'), 10), // Convert to number
    ticket_type: formData.get('ticket_type')
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Send order request
    const response = await axios.post('/api/orders', {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      entry_date: formData.get('entry_date'),
      ticket_count: parseInt(formData.get('ticket_count'), 10),
      ticket_type: formData.get('ticket_type')
    });

    // Proceed with payment
    const paymentResponse = await axios.post('/api/payment/generate-token', {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      amount: response.data.amount // Use the amount from the order response
    });

    // Redirect to Midtrans Snap for payment
    window.snap.pay(paymentResponse.data.token, {
      onSuccess: (result) => {
        console.log('Payment success:', result);
        // Redirect to success page or perform other actions
      },
      onPending: (result) => {
        console.log('Payment pending:', result);
        // Handle pending state if needed
      },
      onError: (result) => {
        console.error('Payment error:', result);
        // Handle error state if needed
      },
      onClose: () => {
        console.log('Payment popup closed');
        // Handle popup close if needed
      }
    });

    return response.data; // Return data on successful order
  } catch (error) {
    if (error.response) {
      // Return server-side errors
      return { errors: error.response.data.errors || { general: 'Order failed' } };
    } else {
      // Return network error
      return { errors: { general: 'Network error' } };
    }
  }
}
