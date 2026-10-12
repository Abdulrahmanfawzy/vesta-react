import React, { useState } from 'react';
import type { ExchangeItem, ExchangeStatus } from '../types/returns';

// 1. إضافة interface لتمرير دالة التنقل عبر الـ Props
interface ExchangeTabProps {
  onViewDetails?: (id: string) => void;
}

const dummyExchangeData: ExchangeItem[] = [
  {
    id: '1',
    exchangeId: '#EX-10482',
    orderId: '#ORD-58291',
    productDelivered: 'iPhone 14\n128GB',
    requestedProduct: 'iPhone 14\n256GB',
    buyer: 'Sara Mohammed',
    priceDifference: '120$',
    stockAvailability: 'Available',
    exchangeReason: 'Wronge storage',
    buyerNotes: 'I want bigger storage',
    photos: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&q=80',
    exchangeSettingsStatus: 'Completed',
  },
  {
    id: '2',
    exchangeId: '#EX-10483',
    orderId: '#ORD-56591',
    productDelivered: 'Nike Air Max\n270',
    requestedProduct: 'Nike Air\nMax 270 –\nSize 42',
    buyer: 'Amir Haitham',
    priceDifference: '0$',
    stockAvailability: 'Available',
    exchangeReason: 'Wrong size',
    buyerNotes: '-',
    photos: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80',
    exchangeSettingsStatus: 'Pending',
  },
  {
    id: '3',
    exchangeId: '#EX-10484',
    orderId: '#ORD-58307',
    productDelivered: 'Samsung\nGalaxy S23',
    requestedProduct: 'Samsung\nGalaxy S24',
    buyer: 'Mariem\nAdel',
    priceDifference: '72$',
    stockAvailability: 'Available',
    exchangeReason: 'Wrong\nmodel',
    buyerNotes: '-',
    photos: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&q=80',
    exchangeSettingsStatus: 'Rejected',
  },
  {
    id: '4',
    exchangeId: '#EX-10485',
    orderId: '#ORD-58344',
    productDelivered: 'IKEA Office\nChair',
    requestedProduct: 'IKEA\nGaming\nChair',
    buyer: 'Omnia\nAlaa',
    priceDifference: '250$',
    stockAvailability: 'Available',
    exchangeReason: 'Wrong\nProduct',
    buyerNotes: 'Product Preference',
    photos: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=100&q=80',
    exchangeSettingsStatus: 'Pending',
  },
];

// 2. استقبال onViewDetails كـ prop
export const ExchangeTab: React.FC<ExchangeTabProps> = ({ onViewDetails }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredData = dummyExchangeData.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.exchangeSettingsStatus === activeFilter;
  });

  const getStatusColor = (status: ExchangeStatus) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-500 font-medium';
      case 'Pending':
        return 'text-amber-400 font-medium';
      case 'Rejected':
        return 'text-red-500 font-medium';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Status Filter Buttons */}
      <div className="flex items-center gap-3">
        {['All', 'Completed', 'Pending', 'Rejected'].map((status) => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            className={`px-6 py-2 rounded-xl text-xs font-medium cursor-pointer border transition-all ${
              activeFilter === status
                ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] text-gray-700 border-collapse">
            <thead className="bg-slate-50/80 border-b border-gray-100">
              <tr className="text-gray-900 font-semibold">
                <th className="py-4 px-3">Exchange ID</th>
                <th className="py-4 px-3">Order ID</th>
                <th className="py-4 px-3">Product Delivered</th>
                <th className="py-4 px-3">Requested Product</th>
                <th className="py-4 px-3">Buyer</th>
                <th className="py-4 px-3">Price Difference</th>
                <th className="py-4 px-3">Stock Availability</th>
                <th className="py-4 px-3">Exchange Reason</th>
                <th className="py-4 px-3">Buyer Notes</th>
                <th className="py-4 px-3">Photos</th>
                <th className="py-4 px-3">Exchange Settings Status</th>
                <th className="py-4 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-3 font-medium text-sky-500 whitespace-nowrap">{item.exchangeId}</td>
                  <td className="py-4 px-3 text-sky-500 whitespace-nowrap">{item.orderId}</td>
                  <td className="py-4 px-3 text-gray-800 whitespace-pre-line leading-tight">{item.productDelivered}</td>
                  <td className="py-4 px-3 text-gray-800 whitespace-pre-line leading-tight">{item.requestedProduct}</td>
                  <td className="py-4 px-3 text-gray-800 font-medium whitespace-pre-line leading-tight">{item.buyer}</td>
                  <td className="py-4 px-3 text-gray-800 font-medium">{item.priceDifference}</td>
                  <td className="py-4 px-3 text-gray-700">{item.stockAvailability}</td>
                  <td className="py-4 px-3 text-gray-700 whitespace-pre-line leading-tight">{item.exchangeReason}</td>
                  <td className="py-4 px-3 text-gray-600 max-w-[120px] truncate">{item.buyerNotes}</td>
                  <td className="py-4 px-3">
                    <img
                      src={item.photos}
                      alt="Product"
                      className="w-10 h-10 rounded-lg object-cover border border-gray-100"
                    />
                  </td>
                  <td className="py-4 px-3">
                    <span className={getStatusColor(item.exchangeSettingsStatus)}>
                      {item.exchangeSettingsStatus}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-right">
                    {/* 3. إضافة حدث النقر لتنفيذ الانتقال عند الضغط على View */}
                    <button
                      onClick={() => onViewDetails && onViewDetails(item.id)}
                      className="text-gray-900 font-bold hover:underline cursor-pointer"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExchangeTab;