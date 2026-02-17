import React, { useState } from 'react';
import { X, Award, Download, Eye } from 'lucide-react';

const DiplomaShowcase = () => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [imageError, setImageError] = useState({});

  // Diplom məlumatları - bu hissəni öz diplomlarınızla əvəzləyin
  const diplomas = [
    {
      id: 1,
      title: "Work Sertificate",
      institution: "Okmedia",
      year: "2025-2026",
      image: "/work.jpeg", // Öz diplom şəklinizin yolunu daxil edin
      description: "HTML, CSS, JavaScript, Tailwind və s. frontend texnologiyaları ilə bağlı praktiki təcrübə və biliklərimi nümayiş etdirən iş sertifikatı."
    }
  ];

  const handleImageError = (diplomaId) => {
    setImageError(prev => ({ ...prev, [diplomaId]: true }));
  };

  const openModal = (diploma) => {
    setSelectedDiploma(diploma);
  };

  const closeModal = () => {
    setSelectedDiploma(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Əkrəm Abıyev</h1>
            </div>
            <div className="text-sm text-gray-600">
              Frontend Developer
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            İş <span className="text-blue-600">Sertifikatım</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Okmedia kompaniyasında iş göstərdiyim zaman aldığım sertifikat
          </p>
        </div>
      </section>

      {/* Diploma Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {diplomas.map((diploma) => (
              <div key={diploma.id} className="group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  {/* Diploma Image */}
                  <div className="relative bg-gray-100 overflow-hidden">
                    {!imageError[diploma.id] ? (
                      <img
                        src={diploma.image}
                        alt={diploma.title}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        onError={() => handleImageError(diploma.id)}
                      />
                    ) : (
                      <div className="w-full h-80 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
                        <div className="text-center">
                          <Award className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                          <p className="text-blue-600 font-semibold">Diplom şəkli</p>
                          <p className="text-sm text-gray-500 mt-2">Şəkli əlavə edin</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openModal(diploma)}
                        className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Baxış</span>
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {diploma.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {diploma.institution}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {diploma.year}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {diploma.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Əlaqə</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-300">
            <a href="tel:050-496-56-85" className="hover:text-blue-400 transition-colors">
              📞 050-496-56-85
            </a>
            <a href="mailto:abyvkrm2004@gmail.com" className="hover:text-blue-400 transition-colors">
              ✉️ abyvkrm2004@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/akramabiyev0/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedDiploma && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedDiploma.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-6 max-h-[60vh] overflow-auto">
                {!imageError[selectedDiploma.id] ? (
                  <img
                    src={selectedDiploma.image}
                    alt={selectedDiploma.title}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                      <p className="text-blue-600 font-semibold text-lg">Diplom şəkli</p>
                      <p className="text-gray-500 mt-2">Şəkli əlavə edin</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Təşkilat:</h4>
                  <p className="text-blue-600">{selectedDiploma.institution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tarix:</h4>
                  <p className="text-gray-600">{selectedDiploma.year}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Təsvir:</h4>
                  <p className="text-gray-600">{selectedDiploma.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiplomaShowcase;