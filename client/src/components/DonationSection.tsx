import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Heart, Trophy, Users, DollarSign, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Donation {
  id: string;
  donor: string;
  amount: number;
  date: string;
}

export default function DonationSection() {
  const { user } = useAuth();
  const [amount, setAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [donations, setDonations] = useState<Donation[]>([
    { id: '1', donor: 'Dr. Priya Sharma', amount: 50000, date: '2025-03-10' },
    { id: '2', donor: 'Rajesh Kumar', amount: 25000, date: '2025-03-08' },
    { id: '3', donor: 'Sneha Reddy', amount: 15000, date: '2025-03-05' },
    { id: '4', donor: 'Arjun Patel', amount: 10000, date: '2025-03-03' },
    { id: '5', donor: 'Kavya Nair', amount: 8000, date: '2025-03-01' },
  ]);

  const handleDonate = () => {
    if (amount && parseFloat(amount) > 0) {
      const newDonation: Donation = {
        id: Date.now().toString(),
        donor: user?.name || 'Anonymous',
        amount: parseFloat(amount),
        date: new Date().toISOString().split('T')[0],
      };
      
      setDonations(prev => [newDonation, ...prev].sort((a, b) => b.amount - a.amount));
      setShowThankYou(true);
      console.log(`Donation of ₹${amount} received from ${user?.name}`);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
        setAmount('');
      }, 3000);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (user?.role !== 'alumni') {
    return null;
  }

  return (
    <Card className="rounded-xl hover:shadow-lg transition-all duration-300 border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-t-xl">
        <CardTitle className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Heart className="h-5 w-5" />
          </div>
          Alumni Donations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {showThankYou ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your generous donation of {formatCurrency(parseFloat(amount))} has been received.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Your contribution helps support current students and alumni programs.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Donation Form */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border border-pink-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-pink-600" />
                Make a Donation
              </h3>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder="Enter amount (₹)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1"
                  min="1"
                />
                <Button 
                  onClick={handleDonate}
                  className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white"
                  disabled={!amount || parseFloat(amount) <= 0}
                >
                  Donate
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Your donation supports scholarships, infrastructure, and alumni programs.
              </p>
            </div>

            {/* Top Donors Leaderboard */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Top Donors
              </h3>
              <div className="space-y-3">
                {donations.slice(0, 5).map((donation, index) => (
                  <div 
                    key={donation.id} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{donation.donor}</p>
                        <p className="text-xs text-gray-500">{donation.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">{formatCurrency(donation.amount)}</p>
                      {index < 3 && (
                        <Badge variant="secondary" className="text-xs">
                          {index === 0 ? '🥇 Top Donor' : index === 1 ? '🥈' : '🥉'}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-600">Total Donors</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{donations.length}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <DollarSign className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-600">Total Raised</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  {formatCurrency(donations.reduce((sum, d) => sum + d.amount, 0))}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
