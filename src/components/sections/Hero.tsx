import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/project-entrance.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Rotary Wheels
                <span className="block text-accent">Court</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Where luxury meets opportunity in the heart of Lekki
              </p>
              <p className="text-lg text-white/80 max-w-lg">
                Premium real estate investment powered by RC Lekki Golden. Exclusive properties designed for modern investors with excellent rental income potential.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="golden" size="lg" className="text-lg px-8" asChild>
                <Link to="/project">
                  View Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/contact">Show Interest</Link>
              </Button>
            </div>

            {/* Price Range */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-3">Starting From</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-accent">₦65M</span>
                <span className="text-white/80">3-Bedroom Duplex</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;