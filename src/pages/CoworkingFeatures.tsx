import React from 'react';

type Feature = {
  img: string;
  heading: string;
  description: string;
};

const features: Feature[] = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPdzPUTKPK3aUYdNi27G0NvBmG_KtbLayTSov6bd-E2kBttlnfKHdYqxQGLCEyhw42E8&usqp=CAU',
    heading: 'Modern Workspace',
    description: 'Productive & comfortable.',
  },
  {
    img: 'https://img.freepik.com/premium-photo/hotel-lobby-featuring-botanical-garden-sustainable-design_1230681-12123.jpg',
    heading: 'Vibrant Community',
    description: 'Network with professionals.',
  },
  {
    img: 'https://images.kreatecube.com/usefull/vendor/12401/Gallery/5972.jpg',
    heading: 'Convenient Amenities',
    description: 'Essential amenities easily accessible.',
  },
];

const CoworkingFeatures: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-purple-900 text-white px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-400 text-center mb-16">
        Belapur's Premier Coworking Space
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg text-white rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={feature.img}
              alt={feature.heading}
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">{feature.heading}</h2>
              <p className="text-base opacity-90">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoworkingFeatures;
