import * as z from 'zod';

export const OrderFormSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters long" }).max(13, { message: "Phone number maximum 13 characters long" }),
    entry_date: z.date({ message: "Invalid date" }),
    ticket_count: z.number().int().min(1, { message: "Ticket count must be at least 1" }).max(200, { message: "Ticket count maximum 200" }),
    ticket_type: z.enum(['premium', 'regular'], { message: "Invalid ticket type" }),
    
});
