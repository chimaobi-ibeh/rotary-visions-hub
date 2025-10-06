import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'The Project', href: '/project' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const contacts = [
    { name: 'RTN. AGNES', phone: '+234 814 901 7989' },
    { name: 'RTN. BUSAYO OWAH', phone: '+234 703 497 0389' },
    { name: 'RTN. OBINNA NWEKE', phone: '+234 816 471 1076' },
    { name: 'RTN. AKINLABI AKINTAYO', phone: '+234 809 843 4810' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/rotary-logo.png" 
                alt="Rotary Club of Lekki Golden" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <h3 className="text-xl font-bold text-accent">Rotary Wheels Court</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Premium real estate investment by RC Lekki Golden. Luxury living spaces designed for modern investors and Rotary members.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Location</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Marshy-Hills Estate, Addo Road, Ajah, Lekki, Lagos State
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  Available 24/7
                </span>
              </div>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2">
              {contacts.slice(0, 3).map((contact, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-accent">{contact.name}</p>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Rotary Club of Lekki Golden. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-primary-foreground/60">
            <span>Powered by RC Lekki Golden Service Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;