export default function Preview({ formData, submitForm, prevStep }) {
  return (
    <div>
      <h3>Preview</h3>

      <h4>Testimonial Details:</h4>
      <p><strong>Client Name:</strong> {formData.clientName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Description:</strong> {formData.description}</p>
      <p><strong>LinkedIn URL:</strong> {formData.linkedinURL || 'N/A'}</p>
      <p><strong>Position at Company:</strong> {formData.position}</p>
      <p><strong>Location:</strong> {formData.location}</p>
      <p><strong>Profile Image:</strong> {formData.profileImage ? formData.profileImage.name : 'No image uploaded'}</p>
      <p><strong>Company Logo:</strong> {formData.companyLogo ? formData.companyLogo.name : 'No logo uploaded'}</p>

      <h4>Referrals:</h4>
      {formData.referrals.length > 0 ? (
        formData.referrals.map((ref, index) => (
          <div key={index}>
            <p><strong>Referral {index + 1}:</strong></p>
            <p><strong>Name:</strong> {ref.name}</p>
            <p><strong>Email:</strong> {ref.email}</p>
            <p><strong>Phone Number:</strong> {ref.phone}</p>
            <p><strong>University:</strong> {ref.university}</p>
          </div>
        ))
      ) : (
        <p>No referrals added.</p>
      )}

      <button type="button" onClick={prevStep}>Edit</button>
      <button type="button" onClick={submitForm}>Submit</button>
    </div>
  );
}
