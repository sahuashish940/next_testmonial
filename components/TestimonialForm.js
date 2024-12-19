import { useState } from 'react';


export default function TestimonialForm({ formData, setFormData, nextStep }) {
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formData.clientName.trim()) return "Client Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) return "A valid Email is required.";
    if (!formData.description.trim()) return "Description is required.";
    if (
      formData.linkedinURL &&
      !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedinURL)
    ) {
      return "A valid LinkedIn URL is required.";
    }
    if (!formData.position.trim()) return "Position at Company is required.";
    if (!formData.location.trim()) return "Location is required.";
    if (!formData.profileImage) return "Profile Image is required.";
    return null; // No errors
  };

  const handleNext = () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    setError('');
    nextStep();
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validImageTypes.includes(file.type)) {
        setError('Only JPG, JPEG, and PNG formats are allowed.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB.');
        return;
      }
      setError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [field]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="bg-blue-500 text-white p-4 rounded-lg">
  This is a test element for Tailwind CSS.
</div>
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Submit Your Testimonial
      </h3>
      <form className="space-y-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Client Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.clientName}
            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Description</label>
          <textarea
            placeholder="Share your experience"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">LinkedIn URL</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/your-profile"
            value={formData.linkedinURL}
            onChange={(e) => setFormData({ ...formData, linkedinURL: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Position at Company</label>
          <input
            type="text"
            placeholder="e.g., Software Engineer"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Location</label>
          <input
            type="text"
            placeholder="e.g., New York, USA"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Upload Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, 'profileImage')}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Upload Company Logo (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, 'companyLogo')}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="button"
          onClick={handleNext}
          disabled={
            !formData.clientName ||
            !formData.email ||
            !formData.description ||
            !formData.position ||
            !formData.location ||
            !formData.profileImage
          }
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
