import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Eye, Upload, Image as ImageIcon } from 'lucide-react';
import heroProperty from '@/assets/hero-property.jpg';
import amenitiesImage from '@/assets/amenities.jpg';
import interiorLiving from '@/assets/interior-living.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample images - you mentioned you'll upload more later
  const galleryImages = [
    {
      id: 1,
      src: heroProperty,
      title: 'Exterior Architecture',
      category: 'exterior',
      description: 'Modern duplex exterior design with premium finishes'
    },
    {
      id: 2,
      src: interiorLiving,
      title: 'Living Room Interior',
      category: 'interior',
      description: 'Spacious living area with contemporary design'
    },
    {
      id: 3,
      src: amenitiesImage,
      title: 'Premium Amenities',
      category: 'amenities',
      description: 'Resort-style amenities including pool and recreational areas'
    },
    // Placeholder for more images
    {
      id: 4,
      src: heroProperty,
      title: 'Building Facade',
      category: 'exterior',
      description: 'Elegant building design and landscaping'
    },
    {
      id: 5,
      src: interiorLiving,
      title: 'Master Bedroom',
      category: 'interior',
      description: 'Luxurious master bedroom with walk-in closet'
    },
    {
      id: 6,
      src: amenitiesImage,
      title: 'Swimming Pool Area',
      category: 'amenities',
      description: 'Resort-style swimming pool and relaxation area'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Images', count: galleryImages.length },
    { id: 'exterior', label: 'Exterior Views', count: galleryImages.filter(img => img.category === 'exterior').length },
    { id: 'interior', label: 'Interior Spaces', count: galleryImages.filter(img => img.category === 'interior').length },
    { id: 'amenities', label: 'Amenities', count: galleryImages.filter(img => img.category === 'amenities').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore the beauty and elegance of Rotary Wheels Court through our comprehensive image gallery
            </p>
            <Badge className="bg-accent text-accent-foreground text-sm px-6 py-2">
              <ImageIcon className="w-4 h-4 mr-2" />
              More images coming soon
            </Badge>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'golden' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="relative"
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-muted text-muted-foreground text-xs"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Upload Notice */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Upload className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-primary">Gallery Expanding Soon</h3>
            </div>
            <p className="text-muted-foreground">
              We're continuously updating our gallery with new images. More stunning photos of the project will be added regularly.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => setSelectedImage(image.src)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-0">
                          <div className="relative">
                            <img 
                              src={image.src} 
                              alt={image.title}
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                              <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                              <p className="text-white/90">{image.description}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-white/90 text-primary text-xs">
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {image.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <section className="mt-16 bg-secondary/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              More Images Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're working on adding more comprehensive images including construction progress, 
              detailed interior shots, landscaping updates, and amenity showcases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                'Construction Progress Updates',
                'Detailed Interior Designs',
                'Landscaping & Exterior Views'
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ImageIcon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-primary">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;