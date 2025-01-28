import React from "react";

const AppCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 w-full md:w-[48%] lg:w-[33%] max-w-[1280px]">
      {/* Image Section */}
      <div className="w-full h-72 bg-gray-100">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      {/* Content Section */}
      <div className="w-full p-6 text-center">
        <h3 className="text-3xl font-bold text-[#038b46] mb-4">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>

        {/* In Progress Label */}
        <span className="inline-block bg-yellow-500 text-white text-sm font-bold py-2 px-4 rounded-full">
          In Progress
        </span>
      </div>
    </div>
  );
};

export const AppShowcase = () => {
  const apps = [
    {
      title: "Photogenic App",
      description:
        "A cutting-edge photography app for capturing, editing, and sharing your moments with professional-grade tools and AI enhancements.",
      image: "/assets/flutter1.png", // Replace with actual image URL
    },
    {
      title: "Stylewear App",
      description:
        "A fashion-forward app offering personalized style recommendations, wardrobe management, and e-commerce integrations for trend enthusiasts.",
      image: "/assets/flutter1.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-gray-50 w-full">
      {apps.map((app, index) => (
        <AppCard
          key={index}
          title={app.title}
          description={app.description}
          image={app.image}
        />
      ))}
    </div>
  );
};

export default AppShowcase;
