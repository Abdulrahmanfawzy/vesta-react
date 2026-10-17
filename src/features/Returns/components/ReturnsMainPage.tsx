import React, { useState } from 'react';
import ReturnsTable from './ReturnsTable';
import RefundsTab from './RefundsTab';
import ExchangeTab from './ExchangeTab';
import ReturnDetailsPage from './ReturnDetailsPage';

export const ReturnsMainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'refunds' | 'exchanges'>('requests');
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans px-8 py-8 space-y-6">
      
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