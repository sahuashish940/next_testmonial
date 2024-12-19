import dbConnect from '../../lib/mongodb';
import Referral from '../../models/Referral';

export default async function handler(req, res) {
    await dbConnect();
    if (req.method === 'POST') {
        try {
            const referral = new Referral(req.body);
            await referral.save();
            res.status(201).json({ message: 'Referral saved successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to save referral' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
