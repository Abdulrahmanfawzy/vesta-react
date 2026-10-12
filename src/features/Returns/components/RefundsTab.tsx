import React, { useState } from 'react';
import type { RefundItem, RefundStatus } from '../types/returns';

// 1. إضافة واجهة الـ Props لتلقي دالة onViewDetails
interface RefundsTabProps {
  onViewDetails?: (id: string) => void;
}

const dummyRefundsData: RefundItem[] = [
  {
    id: '1',
    orderId: '#ORD987657',
    orderDate: 'May 21, 2025',
    customerName: 'Ahmed Saad',
    customerEmail: 'Ahmed.Saad@gmail.com',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    refundReason: 'Wrong Size',
    refundAmount: '$45.00',
    status: 'Completed',
    refundDate: 'May 22, 2025',
    actionType: 'View Details',
  },
  {
    id: '2',
    orderId: '#ORD987657',
    orderDate: 'May 20, 2025',
    customerName: 'Sara Mohamed',
    customerEmail: 'Sara.Mohamed@gmail.com',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    refundReason: 'Wrong Product',
    refundAmount: '$30.00',
    status: 'Pending',
    refundDate: 'May 21, 2025',
    actionType: 'View Details',
  },
  {
    id: '3',
    orderId: '#ORD987657',
    orderDate: 'May 19, 2025',
    customerName: 'Mayar Ahmed',
    customerEmail: 'Mayar.Ahmed@gmail.com',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    refundReason: 'Product Defect',
    refundAmount: '$25.00',
    status: 'Rejected',
    refundDate: 'May 20, 2025',
    actionType: 'View Details',
  },
  {
    id: '4',
    orderId: '#ORD987657',
    orderDate: 'May 18, 2025',
    customerName: 'Yara Mosaad',
    customerEmail: 'Yara.Mosaad@gmail.com',
    customerAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
    refundReason: 'It does not match my house',
    refundAmount: '$50.00',
    status: 'Completed',
    refundDate: 'May 19, 2025',
    actionType: 'Viewed',
  },
  {
    id: '5',
    orderId: '#ORD987657',
    orderDate: 'May 17, 2025',
    customerName: 'Maya Sayed',
    customerEmail: 'Maya.Sayed@gmail.com',
    customerAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80',
    refundReason: 'Customer change mind',
    refundAmount: '$15.00',
    status: 'Pending',
    refundDate: 'May 18, 2025',
    actionType: 'View Details',
  },
];

// 2. استقبال onViewDetails كـ prop
export const RefundsTab: React.FC<RefundsTabProps> = ({ onViewDetails }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredData = dummyRefundsData.filter((item) => {
    const matchesFilter = activeFilter === 'All' || item.status === activeFilter;
    const matchesSearch =
      item.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: RefundStatus) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-500 font-medium';
      case 'Pending':
        return 'text-amber-500 font-medium';
      case 'Rejected':
        return 'text-red-500 font-medium';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-5 font-sans">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
          <p className="text-[11px] text-gray-500">Total Refund</p>
          <h3 className="text-base font-bold text-gray-900 mt-1">12,540</h3>
          <span className="text-[10px] text-emerald-500 font-medium">+12.5% vs last 30 days</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
          <p className="text-[11px] text-gray-500">Refunded Amount</p>
          <h3 className="text-base font-bold text-gray-900 mt-1">$125,430.75</h3>
          <span className="text-[10px] text-emerald-500 font-medium">+8.2% vs last 30 days</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
          <p className="text-[11px] text-gray-500">Completed</p>
          <h3 className="text-base font-bold text-gray-900 mt-1">9,152</h3>
          <span className="text-[10px] text-gray-400">72.9% of total</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
          <p className="text-[11px] text-gray-500">Pending</p>
          <h3 className="text-base font-bold text-gray-900 mt-1">2,310</h3>
          <span className="text-[10px] text-gray-400">18.4% of total</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-2xs">
          <p className="text-[11px] text-gray-500">Rejected</p>
          <h3 className="text-base font-bold text-gray-900 mt-1">1,078</h3>
          <span className="text-[10px] text-gray-400">8.6% of total</span>
        </div>
      </div>

      {/* Filters & Export Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 outline-none">
            <option>All Status</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 outline-none">
            <option>All Refund Reasons</option>
          </select>
          <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 flex items-center gap-2">
            <span>May 20, 2025 - Jun 20, 2025</span>
          </div>
        </div>

        <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
      </div>

      {/* Quick Filter Status Buttons & Search */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {['All', 'Completed', 'Pending', 'Rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                activeFilter === status
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search by Order ID, Customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 text-xs w-64 text-gray-700 outline-none focus:border-slate-400"
          />
        </div>
      </div>

      {/* Refunds Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700 border-collapse">
            <thead className="bg-slate-50/70 border-b border-gray-100">
              <tr className="text-gray-800 font-bold">
                <th className="py-3.5 px-4">Order Id</th>
                <th className="py-3.5 px-4">Order Date</th>
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Refund Reason</th>
                <th className="py-3.5 px-4">Refund Amount</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Refund Date</th>
                <th className="py-3.5 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/40 transition-colors">
                  <td className="py-3.5 px-4 text-sky-500 font-medium">{item.orderId}</td>
                  <td className="py-3.5 px-4 text-gray-600">{item.orderDate}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.customerAvatar}
                        alt={item.customerName}
                        className="w-8 h-8 rounded-full object-cover border border-gray-100"
                      />
                      <div>
                        <div className="font-semibold text-gray-800">{item.customerName}</div>
                        <div className="text-[10px] text-gray-400">{item.customerEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-gray-700">{item.refundReason}</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">{item.refundAmount}</td>
                  <td className="py-3.5 px-4">
                    <span className={getStatusBadge(item.status)}>• {item.status}</span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-600">{item.refundDate}</td>
                  <td className="py-3.5 px-4 text-center">
                    {item.actionType === 'View Details' ? (
                      /* 3. ربط onClick لزر View Details هنا */
                      <button
                        onClick={() => onViewDetails && onViewDetails(item.id)}
                        className="text-gray-900 font-bold text-[11px] hover:underline cursor-pointer"
                      >
                        View Details
                      </button>
                    ) : (
                      <span className="text-gray-400 text-[11px]">Viewed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-white border-t border-gray-100 text-xs text-gray-500">
          <div>Showing 1 to 125 results</div>
          <div className="flex items-center gap-2">
            <button className="px-1 text-gray-400 hover:text-gray-600">&lt;</button>
            <button className="px-2 py-0.5 rounded font-bold text-gray-900">1</button>
            <button className="px-2 py-0.5 rounded text-gray-500 hover:text-gray-900">2</button>
            <button className="px-2 py-0.5 rounded text-gray-500 hover:text-gray-900">3</button>
            <span>...</span>
            <button className="px-2 py-0.5 rounded text-gray-500 hover:text-gray-900">25</button>
            <button className="px-1 text-gray-400 hover:text-gray-600">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundsTab;