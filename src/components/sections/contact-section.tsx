"use client";

import { useState, useTransition } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { portfolioData } from '@/lib/data.tsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast"
import { AnimateOnScroll } from '../animate-on-scroll';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Mail } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { name: "", email: "", message: "" },
    });

    const onSubmit = (values: ContactFormValues) => {
        startTransition(() => {
            // Here you would typically handle form submission, e.g., send an email or save to a database.
            // For this example, we'll just simulate a successful submission.
            console.log(values);
            toast({
              title: "Message Sent!",
              description: "Thank you for reaching out. I'll get back to you soon.",
            });
            form.reset();
        });
    };
    
    return (
        <section id="contact">
            <div className="container">
                <AnimateOnScroll>
                    <h2 className="text-center font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-center text-lg text-muted-foreground">
                        Have a project in mind or just want to say hello?
                    </p>
                </AnimateOnScroll>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    <AnimateOnScroll>
                        <Card>
                            <CardHeader>
                                <CardTitle className='font-headline text-2xl'>Send me a message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="your.email@example.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Tell me about your project or idea..." rows={6} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" className="w-full" disabled={isPending}>
                                            {isPending ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </AnimateOnScroll>

                    <AnimateOnScroll delay={200}>
                         <Card>
                            <CardHeader>
                                <CardTitle className='font-headline text-2xl'>Direct Contact</CardTitle>
                            </CardHeader>
                             <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    Feel free to reach out to me directly through my social channels or email.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <Button asChild>
                                            <a href={`mailto:${portfolioData.contact.email}`}>
                                                <Mail className="mr-2 h-5 w-5"/>
                                                Email Me
                                            </a>
                                        </Button>
                                        {portfolioData.contact.socials.map((social) => (
                                            <Button key={social.name} variant="outline" size="icon" asChild>
                                                <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                                    <social.icon className="h-5 w-5"/>
                                                </Link>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                             </CardContent>
                         </Card>
                    </AnimateOnScroll>
                </div>

                <div className="mt-20 text-center">
                    <p className="font-headline text-xl text-primary">{portfolioData.signOff}</p>
                    <p className="mt-4 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}
