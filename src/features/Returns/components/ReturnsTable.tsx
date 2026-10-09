import React, { useState } from 'react';
import type { ReturnRequestItem, ReturnStatus } from '../types/returns';

// 1. إضافة واجهة الـ Props
interface ReturnsTableProps {
  onViewDetails?: (id: string) => void;
}

const dummyReturnRequests: ReturnRequestItem[] = [
  {
    id: '1',
    orderImage: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=100&q=80',
    returnRequestId: '#9999987657',
    orderId: '#8965445534',
    itemId: '#1111112236',
    requestDate: '28-5-2026',
    returnReason: 'customer changed mind',
    status: 'Accepted',
    actionType: 'Viewed',
  },
  {
    id: '2',
    orderImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&q=80',
    returnRequestId: '#9999956781',
    orderId: '#8458445534',
    itemId: '#1111111896',
    requestDate: '3-6-2026',
    returnReason: 'Customer change mind',
    status: 'Rejected',
    actionType: 'Viewed',
  },
  {
    id: '3',
    orderImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100&q=80',
    returnRequestId: '#9999976781',
    orderId: '#8956945534',
    itemId: '#1156112236',
    requestDate: '21-6-2026',
    returnReason: 'Wrong product',
    status: 'Rejected',
    actionType: 'Viewed',
  },
  {
    id: '4',
    orderImage: 'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?w=100&q=80',
    returnRequestId: '#9998756781',
    orderId: '#8965785534',
    itemId: '#1115812236',
    requestDate: '31-5-2026',
    returnReason: 'Product Defect',
    status: 'Pending',
    actionType: 'View Details',
  },
  {
    id: '5',
    orderImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80',
    returnRequestId: '#9999987658',
    orderId: '#8965285534',
    itemId: '#1891112236',
    requestDate: '27-6-2026',
    returnReason: 'It doesnot match my house',
    status: 'Pending',
    actionType: 'View Details',
  },
];

// 2. استقبال onViewDetails داخل المكون
export const ReturnsTable: React.FC<ReturnsTableProps> = ({ onViewDetails }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All Status');

  const filteredData = dummyReturnRequests.filter((item) => {
    if (selectedStatus === 'All Status') return true;
    return item.status === selectedStatus;
  });

  const getStatusColor = (status: ReturnStatus) => {
    switch (status) {
      case 'Accepted':
        return 'text-emerald-500 font-medium';
      case 'Rejected':
        return 'text-red-500 font-medium';
      case 'Pending':
        return 'text-amber-500 font-medium';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-4 font-sans">
      {/* Dropdown Filter */}
      <div className="flex justify-end">
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-gray-700 outline-none cursor-pointer shadow-xs focus:border-slate-400"
        >
          <option value="All Status">All Status</option>
          <option value="Accepted">Accepted</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700 border-collapse">
            <thead className="bg-slate-50/70 border-b border-gray-200">
              <tr className="text-gray-800 font-bold">
                <th className="py-4 px-4">Order Image</th>
                <th className="py-4 px-4">Return Request ID</th>
                <th className="py-4 px-4">Order ID</th>
                <th className="py-4 px-4">Item ID</th>
                <th className="py-4 px-4">Request Date</th>
                <th className="py-4 px-4">Return Reason</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4">
                    <img
                      src={item.orderImage}
                      alt="Order Item"
                      className="w-12 h-12 object-cover rounded-lg border border-gray-100"
                    />
                  </td>
                  <td className="py-3 px-4 text-gray-700 font-medium">{item.returnRequestId}</td>
                  <td className="py-3 px-4 text-gray-700">{item.orderId}</td>
                  <td className="py-3 px-4 text-gray-700">{item.itemId}</td>
                  <td className="py-3 px-4 text-gray-600">{item.requestDate}</td>
                  <td className="py-3 px-4 text-gray-700 max-w-[150px] leading-relaxed">
                    {item.returnReason}
                  </td>
                  <td className="py-3 px-4">
                    <span className={getStatusColor(item.status)}>{item.status}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item.actionType === 'View Details' ? (
                      /* 3. ربط onClick لزر View Details هنا */
                      <button
                        onClick={() => onViewDetails && onViewDetails(item.id)}
                        className="text-indigo-600 font-medium hover:underline cursor-pointer"
                      >
                        View Details
                      </button>
                    ) : (
                      <span className="text-gray-500 font-normal">Viewed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-gray-100 text-xs text-gray-500">
          <div>Showing 1 to 250 results</div>
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

export default ReturnsTable;