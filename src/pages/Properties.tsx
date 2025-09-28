import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroProperty from '@/assets/hero-property.jpg';
import interiorLiving from '@/assets/interior-living.jpg';

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const properties = [
    {
      id: 1,
      title: '3 Bedroom Terraced Duplex with BQ',
      bedrooms: 3,
      bathrooms: 4,
      price: '₦65M',
      originalPrice: '₦70M',
      paymentPlan: '16-18 Months',
      monthlyPayment: '₦3.3M',
      image: heroProperty,
      features: [
        'All Ensuite with Ante-room',
        'Living Room & Dining',
        'Guest Toilet',
        'Kitchen & Store',
        'Master Bedroom with Walk-in-closet'
      ],
      isOfferPrice: true,
      type: 'terraced'
    },
    {
      id: 2,
      title: '4 Bedroom Semi-Detached Duplex with BQ',
      bedrooms: 4,
      bathrooms: 5,
      price: '₦75M',
      originalPrice: '₦80M',
      paymentPlan: '16-18 Months',
      monthlyPayment: '₦3.6M',
      image: interiorLiving,
      features: [
        'All Ensuite with Ante-room',
        'Spacious Living Areas',
        'Guest Toilet',
        'Modern Kitchen & Store',
        'Master Suite with Walk-in-closet'
      ],
      isOfferPrice: true,
      type: 'semi-detached'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Properties', count: properties.length },
    { id: 'terraced', label: 'Terraced Duplex', count: 1 },
    { id: 'semi-detached', label: 'Semi-Detached', count: 1 }
  ];

  const filteredProperties = selectedFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Premium Properties
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover luxury duplex homes designed for modern investors with excellent rental income potential
            </p>
          </div>
        </div>
      </section>

      {/* Property Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'golden' : 'outline'}
                onClick={() => setSelectedFilter(filter.id)}
                className="relative"
              >
                {filter.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-muted text-muted-foreground text-xs"
                >
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                price={property.price}
                originalPrice={property.originalPrice}
                paymentPlan={property.paymentPlan}
                monthlyPayment={property.monthlyPayment}
                image={property.image}
                features={property.features}
                isOfferPrice={property.isOfferPrice}
              />
            ))}
          </div>

          {/* Property Features Comparison */}
          <section className="mt-16 bg-secondary/30 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
              All Properties Include
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Infrastructure & Documentation',
                'Deed of Assignment',
                'Survey Plan',
                'All rooms en-suite with ante-room',
                'Living Room & Dining area',
                'Guest toilet & modern kitchen',
                'Boys Quarter (BQ)',
                'Master bedroom with walk-in closet',
                'Access to swimming pool & gym',
                'Children play area & basketball court',
                'Good roads & potable water supply',
                'Constant electricity & secured environment',
                'Mild landscaping & green areas'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Payment Information */}
          <section className="mt-16 bg-primary text-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Flexible Payment Options
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                We offer convenient payment plans to make your dream home more accessible
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-accent mb-4">Off-Plan Offer</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Initial deposit: ₦10M - ₦15M</li>
                  <li>• 16-18 months payment plan</li>
                  <li>• Zero interest rate</li>
                  <li>• Project completion: Oct - Nov 2025</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-accent mb-4">Full Payment</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Immediate ownership transfer</li>
                  <li>• All documentation included</li>
                  <li>• Priority unit selection</li>
                  <li>• Additional discounts may apply</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;