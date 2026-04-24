import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const rideOptions = [
  { id: 1, name: "Tezro Bike", price: "Rs. 150", time: "2 min", img: "/assets/bick1.JPG", rating: "4.8" },
  { id: 2, name: "Tezro Mini (Alto)", price: "Rs. 450", time: "5 min", img: "/assets/Alto.JPG", rating: "4.9" },
  { id: 3, name: "Tezro Sedan (Corolla)", price: "Rs. 800", time: "7 min", img: "/assets/corolla.JPG", rating: "4.7" },
  { id: 4, name: "Tezro Bolan", price: "Rs. 600", time: "4 min", img: "/assets/Suzoki-bolan.JPG", rating: "4.5" },
  { id: 5, name: "Tezro V-VIP", price: "Rs. 1500", time: "10 min", img: "/assets/V-vip.JPG", rating: "5.0" },
];

const RideBooking = () => {
  const [selectedRide, setSelectedRide] = useState(1);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center shadow-sm">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold ml-4">Book a Ride</h1>
      </div>

      {/* Map Placeholder (You can integrate Google Maps here later) */}
      <div className="flex-1 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic">
          [Live Map Integration Area]
        </div>
        
        {/* Destination Card */}
        <div className="absolute top-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <input className="w-full text-sm outline-none" placeholder="Pick up location" defaultValue="Current Location" />
          </div>
          <div className="h-[1px] bg-gray-100 my-2 ml-5" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <input className="w-full text-sm outline-none" placeholder="Where to?" />
          </div>
        </div>
      </div>

      {/* Ride Options List */}
      <div className="bg-white rounded-t-3xl -mt-6 p-6 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Available Rides</h2>
        
        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
          {rideOptions.map((ride) => (
            <div 
              key={ride.id}
              onClick={() => setSelectedRide(ride.id)}
              className={`flex items-center p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedRide === ride.id ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <img src={ride.img} alt={ride.name} className="w-20 h-14 object-contain rounded-lg bg-gray-50" />
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-800">{ride.name}</h3>
                <div className="flex items-center text-xs text-gray-500 gap-2">
                  <span className="flex items-center"><Clock size={12} className="mr-1"/> {ride.time}</span>
                  <span className="flex items-center"><Star size={12} className="mr-1 text-yellow-500 fill-yellow-500"/> {ride.rating}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600 leading-none">{ride.price}</p>
                <p className="text-[10px] text-gray-400">Cash/Wallet</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl mt-6 shadow-lg shadow-blue-200 active:scale-95 transition-transform">
          Confirm {rideOptions.find(r => r.id === selectedRide)?.name}
        </button>
      </div>
    </div>
  );
};

export default RideBooking;
