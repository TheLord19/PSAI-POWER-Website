// src/app/licenses/page.tsx
export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-28 px-4"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-orange-900 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Licenses & Certifications</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Our credentials and regulatory compliance certifications
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Certifications</h2>
          <p className="text-gray-600 mb-8 text-lg">
            PSAI POWER maintains all necessary licenses and certifications to deliver professional 
            power system engineering services across North America and international markets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Engineering Licenses</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Professional Engineer (P.Eng) Certification</li>
                <li>• North American Board of Certified Energy Practitioners</li>
                <li>• IEEE Power & Energy Society Certification</li>
                <li>• Certified Energy Manager (CEM)</li>
                <li>• Grid Integration Specialist Certification</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety & Compliance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• OSHA Safety Compliance Certification</li>
                <li>• ISO 9001:2015 Quality Management</li>
                <li>• NFPA 70E Electrical Safety Certification</li>
                <li>• CSA Standards Compliance</li>
                <li>• IEC Standards Certification</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Request Documentation</h3>
            <p className="text-blue-700 mb-4">
              For copies of specific certifications or compliance documentation, please contact our compliance department.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Compliance Department
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}