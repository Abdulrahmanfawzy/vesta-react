import React, { useState } from 'react';
import ReturnsTable from './ReturnsTable';
import RefundsTab from './RefundsTab';
import ExchangeTab from './ExchangeTab';
import ReturnDetailsPage from './ReturnDetailsPage';

export const ReturnsMainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'refunds' | 'exchanges'>('requests');
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans pl-64 pr-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Returns</h1>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 shadow-2xs cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
            M
          </div>
        </div>
      </div>

      {/* Display Details Page if a request is selected */}
      {selectedRequestId ? (
        <ReturnDetailsPage onBack={() => setSelectedRequestId(null)} />
      ) : (
        <>
          {/* Tabs Bar */}
          <div className="flex items-center gap-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('requests')}
              className={`pb-3 text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'requests'
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Return Requests
            </button>
            <button
              onClick={() => setActiveTab('refunds')}
              className={`pb-3 text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'refunds'
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Refunds
            </button>
            <button
              onClick={() => setActiveTab('exchanges')}
              className={`pb-3 text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'exchanges'
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Exchange Requests
            </button>
          </div>

          {/* Dynamic Content */}
          {activeTab === 'requests' && (
            <ReturnsTable onViewDetails={(id) => setSelectedRequestId(id)} />
          )}
          {activeTab === 'refunds' && (
            <RefundsTab onViewDetails={(id) => setSelectedRequestId(id)} />
          )}
          {activeTab === 'exchanges' && (
            <ExchangeTab onViewDetails={(id) => setSelectedRequestId(id)} />
          )}
        </>
      )}
    </div>
  );
};

export default ReturnsMainPage;