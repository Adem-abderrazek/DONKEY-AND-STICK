import React from 'react';

const MenuSection = ({ selectedSection, menuItems }) => {
  return (
    <div className="w-600px mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 relative inline-block">
          {selectedSection}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 -mb-4"></span>
        </h2>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
              />
              {item.isSpecial && (
                <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Chef's Special
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                {item.description}
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-amber-600">
                  ${item.price}
                </span>
                <button className="px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold 
                  transform transition duration-300 hover:bg-amber-600 hover:shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection; 