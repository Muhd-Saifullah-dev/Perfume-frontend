import React from 'react';
import { Check } from 'lucide-react';

import { Truck,BadgeCheck,Headset } from 'lucide-react';
const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to Perfume Bliss - Your destination for luxury fragrances.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600">
          At Perfume Bliss, we believe that fragrance is a reflection of personality. Our mission is to bring the finest and most exquisite perfumes from around the world to your doorstep, offering a sensory experience that captures your essence.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Whether you're looking for something bold, elegant, or calming, we curate a wide range of perfumes to cater to every mood and occasion. Our passion for scent drives us to carefully select and offer only the best.
        </p>
      </section>

     

      {/* Values Section */}
      <section className="max-w-4xl mx-auto mb-16">
  <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Values</h2>
  <ul className="mt-6 text-lg text-gray-600 flex flex-col sm:flex-row sm:gap-12 gap-8 items-center justify-center">
    <li className="flex items-center justify-center space-x-3">
      <Check className="text-purple-500 font-extrabold h-10 w-10" />
      <span className=' max-sm:ml-10'>Commitment to Quality</span>
    </li>
    <li className="flex items-center justify-center space-x-3">
      <Check className="text-purple-500 font-extrabold h-10 w-10" />
      <span>Customer Satisfaction</span>
    </li>
    <li className="flex items-center justify-center space-x-3">
      <Check className="text-purple-500 font-extrabold h-10 w-10" />
      <span>Eco-friendly Packaging</span>
    </li>
  </ul>
</section>

      {/* Team Section */}
      <section className="text-center mb-16">
        
        
        <div className="mt-8 flex justify-center space-x-20  max-sm:flex-col max-sm:space-x-0 max-sm:gap-8">
          <div className='flex flex-col items-center gap-2'>
          <BadgeCheck  className="h-[80px] w-[90px] text-red-700 "/>
            <h1 className='text-xl '>Quality You Can Trust</h1>
            </div>
              <div className='flex flex-col items-center gap-2 '>
              <Headset className="h-[80px] w-[90px] text-red-700 " />
            <h1 className='text-xl '>Support at Your Fingertips</h1>
            </div>
              <div className='flex flex-col items-center gap-2'>
            <Truck className="h-[80px] w-[90px] text-red-700  "  />
            <h1 className='text-xl'>Enjoy Free Shipping</h1>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
