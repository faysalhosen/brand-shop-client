import React from 'react';

const About = () => {
    return (
        <div>
          <section className="bg-gray-100 py-16">
  <div className="container mx-auto flex flex-col items-center justify-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h2>
    <div className="md:flex md:space-x-8">
      <div className="md:w-1/2 text-gray-600">
        <p className="mb-4">At Gadget Gear, we are passionate about technology and innovation. Our journey began with a simple mission - to provide high-quality, cutting-edge gadgets and gear to tech enthusiasts like you.</p>
        <p className="mb-4">Founded in [Year], Gadget Gear has grown from a small startup to a trusted name in the tech industry. We are driven by a commitment to excellence and a dedication to enhancing your digital experience.</p>
        <p className="mb-4">Our team of experts is constantly exploring the latest trends and advancements in technology to bring you the best products. We take pride in our reputation for quality, reliability, and outstanding customer service.</p>
      </div>
      <div className="md:w-1/2">
        <img src="https://i.ibb.co/3znnPVw/images.jpg" alt="About Us Image" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  </div>
</section>
  
        </div>
    );
};

export default About;