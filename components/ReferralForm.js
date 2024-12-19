export default function ReferralForm({ formData, setFormData, nextStep, prevStep }) {
    const addReferral = () => setFormData({
        ...formData,
        referrals: [...formData.referrals, { name: '', email: '', phone: '', university: '' }]
    });
  
    return (
        <form>
            {formData.referrals.map((ref, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Friend's Name"
                        value={ref.name}
                        onChange={(e) => {
                            const newReferrals = [...formData.referrals];
                            newReferrals[index].name = e.target.value;
                            setFormData({ ...formData, referrals: newReferrals });
                        }}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Friend's Email"
                        value={ref.email}
                        onChange={(e) => {
                            const newReferrals = [...formData.referrals];
                            newReferrals[index].email = e.target.value;
                            setFormData({ ...formData, referrals: newReferrals });
                        }}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={ref.phone}
                        onChange={(e) => {
                            const newReferrals = [...formData.referrals];
                            newReferrals[index].phone = e.target.value;
                            setFormData({ ...formData, referrals: newReferrals });
                        }}
                        required
                    />
                    <input
                        type="text"
                        placeholder="University"
                        value={ref.university}
                        onChange={(e) => {
                            const newReferrals = [...formData.referrals];
                            newReferrals[index].university = e.target.value;
                            setFormData({ ...formData, referrals: newReferrals });
                        }}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={addReferral}>Add Friend</button>
            <button type="button" onClick={prevStep}>Back</button>
            <button
                type="button"
                onClick={nextStep}
                disabled={!formData.referrals.every(ref => ref.name && ref.email && ref.phone && ref.university)}
            >
                Next
            </button>
        </form>
    );
  }
  