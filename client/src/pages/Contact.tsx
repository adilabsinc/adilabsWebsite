import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Building2,
  Users,
  MessageCircle
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';
import { Link } from 'wouter';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@adilabs.com',
      description: 'Send us an email anytime'
    },
    // {
    //   icon: Phone,
    //   title: 'Call Us',
    //   details: '+1 (623) 336-5336',
    //   description: 'Mon-Fri from 9am to 6pm PST'
    // },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Toronoto, CA',
      description: 'Come visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri 9:00AM-6:00PM PST',
      description: 'We are here to help'
    }
  ];

  const offices = [
    {
      city: 'Toronoto',
      country: 'Canada',
      // address: '586 Winterton way Mississuaga Ontario L5R 3J4',
      // phone: '+1 (623) 336-5336'
    },
    {
      city: 'Hyderabad',
      country: 'India',
      // address: 'Gachiboli, Hyderabad, Telangana',
      // phone: '+91 9133085364'
    },
    {
      city: 'Los Angeles',
      country: 'USA',
      // address: '586 Winterton way Mississuaga Ontario L5R 3J4',
      // phone: '+1 (623) 336-5336'
    },
  ];

  // Coordinates for 586 Winterton way Mississuaga Ontario L5R 3J4
  const officePosition: LatLngExpression = [43.6066, -79.6849];

  return (
    <div className="pt-16">
      {/* Hero Section - same dark theme as Home */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}>
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to revolutionize your business with our technology solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
              
              {isSubmitted && (
                <motion.div
                  className="mb-6 p-4 bg-green-900/30 border border-green-500/40 rounded-lg flex items-center space-x-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">
                    Thank you! Your message has been sent successfully.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/5 text-white placeholder-gray-500"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/5 text-white placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/5 text-white placeholder-gray-500"
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/5 text-white placeholder-gray-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/5 text-white placeholder-gray-500"
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    {...register('message')}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white/5 text-white placeholder-gray-500"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-gray-900 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-600 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sky-400 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="section-dark-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/contact">
                    <button className="w-full flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-left">
                      <MessageCircle className="w-5 h-5 text-sky-400" />
                      <span className="text-white">Schedule a Demo</span>
                    </button>
                  </Link>
                  <button className="w-full flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-left">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-white">Consultation Call</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-left">
                    <Building2 className="w-5 h-5 text-sky-400" />
                    <span className="text-white">Enterprise Inquiry</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Global Presence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices around the world, we're here to serve you locally
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="section-dark-card p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {office.city}
                </h3>
                <p className="text-sky-400 font-medium mb-4">
                  {office.country}
                </p>
                {/* <p className="text-gray-300 mb-3">
                  {office.address}
                </p> */}
                {/* <p className="text-white font-medium">
                  {office.phone}
                </p> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Find Us</h2>
          </motion.div>
          <motion.div
            className="bg-white/5 border border-white/10 h-96 rounded-xl flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full">
              <MapContainer 
                center={officePosition} 
                zoom={15} 
                scrollWheelZoom={false} 
                style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={officePosition}>
                  <Popup>
                    586 Winterton way<br />Mississuaga, Ontario L5R 3J4
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}