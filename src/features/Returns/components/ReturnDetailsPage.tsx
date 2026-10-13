import React from 'react';

interface ReturnDetailsPageProps {
  onBack?: () => void;
}

export const ReturnDetailsPage: React.FC<ReturnDetailsPageProps> = ({ onBack }) => {
  return (
    <div className="space-y-6 font-sans">
      {/* Top Header & Request Number */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <button
              onClick={onBack}
              className="text-gray-500 hover:text-gray-900 text-sm font-semibold flex items-center gap-1 cursor-pointer"
            >
              &larr; Back
            </button>
          )}
          <div className="flex items-center gap-3 text-lg font-bold">
            <span className="text-gray-700">Request Number</span>
            <span className="text-gray-900">#9999956781</span>
            <span className="text-amber-500 font-medium text-base">[Pending]</span>
          </div>
        </div>
      </div>

      {/* Grid of 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Product */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/80 shadow-2xs space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&q=80"
              alt="White Sofa"
              className="w-12 h-12 rounded-lg object-cover border border-gray-100"
            />
            <h3 className="text-sm font-bold text-gray-900">1.Product</h3>
          </div>
          <div className="text-xs text-gray-600 space-y-1 pt-1">
            <p className="font-semibold text-gray-800">White Sofa</p>
            <p>
              Item ID: <span className="text-amber-500 font-medium">#1111111896</span>
            </p>
            <p>Price:18,000$</p>
          </div>
        </div>

        {/* Card 2: Return Information */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/80 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-gray-900">2.Return Information</h3>
          <div className="text-xs text-gray-700 space-y-2">
            <p>Reason: Customer changed mind</p>
            <p>Request Date: 3-06-2026</p>
            <p>Return Type: Refund</p>
            <p>Return amount: $120</p>
          </div>
        </div>

        {/* Card 3: Customer Information */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/80 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-gray-900">3.Customer Information</h3>
          <div className="text-xs text-gray-700 space-y-2 leading-relaxed">
            <p>Customer name:Mostafa Ayman</p>
            <p>Email:mostafaayman2001@gmail.com</p>
            <p>Phone number:011125896748</p>
            <p>Shipping address:Nasr City,Mostafa alnahans</p>
          </div>
        </div>

        {/* Card 4: Customer Notes */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/80 shadow-2xs space-y-3 min-h-[160px]">
          <h3 className="text-sm font-bold text-gray-900 text-center">4.Customer Notes</h3>
          <p className="text-xs text-gray-700 pt-3 text-center">It does not match my house</p>
        </div>

        {/* Card 5: Return Policy Eligibility */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/80 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-gray-900">5. Return Policy Eligibility</h3>
          <ul className="text-xs text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1.5">
              <span className="text-gray-800">&#10003;</span> Within return period
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-gray-800">&#10003;</span> Product eligible for return
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-gray-800">&#10003;</span> Product condition meets policy
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-gray-800">&#10003;</span> Required evidence provided
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-gray-800">&#10003;</span> Original packaging/accessories includedh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex items-center justify-center gap-6 pt-6">
        <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold px-12 py-2.5 rounded-xl text-sm transition-colors cursor-pointer shadow-2xs">
          Accept
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-2.5 rounded-xl text-sm transition-colors cursor-pointer shadow-2xs">
          Reject
        </button>
      </div>
    </div>
  );
};

export default ReturnDetailsPage;