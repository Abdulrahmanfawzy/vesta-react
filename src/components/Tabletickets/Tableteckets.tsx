
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import OverviewSettings from '../OverviewSettings/OverviewSettings';

type TicketStatus = 'Open' | 'In Progress' | 'Resolved' | 'Closed';
type Ticket = { id: string; subject: string; status: TicketStatus; createdAt: string; updatedAt: string; description: string };

const examples: Array<[string, TicketStatus, string, string]> = [
  ['Iseus with return report', 'Open', 'May 20, 2025', 'May 22, 2025'],
  ['Return not processed', 'In Progress', 'May 18, 2025', 'May 21, 2025'],
  ['Export data question', 'Resolved', 'May 15, 2025', 'May 20, 2025'],
  ['Integration setup help', 'Closed', 'May 10, 2025', 'May 19, 2025'],
  ['Login', 'Resolved', 'May 8, 2025', 'May 18, 2025'],
  ['Billing address update', 'Open', 'May 7, 2025', 'May 17, 2025'],
  ['Unable to download invoice', 'In Progress', 'May 5, 2025', 'May 16, 2025'],
  ['Account access request', 'Resolved', 'May 3, 2025', 'May 14, 2025'],
  ['Order status question', 'Closed', 'May 1, 2025', 'May 12, 2025'],
  ['Payment method update', 'Open', 'Apr 28, 2025', 'May 10, 2025'],
];

// Replace this sample data with your API response when you connect the page.
const tickets: Ticket[] = Array.from({ length: 125 }, (_, index) => {
  const [subject, status, createdAt, updatedAt] = examples[index % examples.length];
  return {
    id: `#TKT-${String(123 - index).padStart(6, '0')}`,
    subject,
    status,
    createdAt,
    updatedAt,
    description: `A customer contacted support about “${subject.toLowerCase()}”. The support team is reviewing the request and will follow up with next steps.`,
  };
});

const tabs = ['All Tickets', 'Open', 'In Progress', 'Resolved', 'Closed'] as const;
type Filter = (typeof tabs)[number];
const pageSize = 5;
const statusClass = (status: TicketStatus) => status.toLowerCase().replace(' ', '-');

export default function Tabletickets() {
  const [filter, setFilter] = useState<Filter>('All Tickets');
  const [page, setPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const filteredTickets = useMemo(
    () => tickets.filter((ticket) => filter === 'All Tickets' || ticket.status === filter),
    [filter],
  );
  const pageCount = Math.max(1, Math.ceil(filteredTickets.length / pageSize));
  const startIndex = (page - 1) * pageSize;
  const visibleTickets = filteredTickets.slice(startIndex, startIndex + pageSize);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1).filter(
    (number) => number <= 3 || number === pageCount || Math.abs(number - page) <= 1,
  );

  function selectFilter(nextFilter: Filter) {
    setFilter(nextFilter);
    setPage(1);
  }

  return (
    <>
<div className='my-5 py-10 container mx-auto'>

<OverviewSettings name='My Support Teckets'  />
</div>


      <style>{styles}</style>
      <main className="ticket-shell">
        <nav className="ticket-tabs" role="tablist" aria-label="Filter tickets">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`ticket-tab ${filter === tab ? 'active' : ''}`}
              role="tab"
              aria-selected={filter === tab}
              onClick={() => selectFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="ticket-table-wrap">
          <table className="ticket-table">
            <thead>
              <tr>
                <th>Ticket Id</th><th>Subject</th><th>Status</th><th>Created At</th><th>Last Updated</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td><button className="ticket-id" onClick={() => setSelectedTicket(ticket)}>{ticket.id}</button></td>
                  <td>{ticket.subject}</td>
                  <td><span className={`ticket-badge ${statusClass(ticket.status)}`}>{ticket.status}</span></td>
                  <td>{ticket.createdAt}</td>
                  <td>{ticket.updatedAt}</td>

                  <td className="ticket-action">
                    <Link to={"/backtosupport"} className="ticket-view" >
                      View Details</Link></td>
                
                {/* onClick={() => setSelectedTicket(ticket)} */}
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTickets.length === 0 && <div className="ticket-empty">No tickets found.</div>}
        </div>

        <footer className="ticket-footer">
          <span>
            Showing {filteredTickets.length ? startIndex + 1 : 0} to {Math.min(startIndex + pageSize, filteredTickets.length)} of {filteredTickets.length} results
          </span>
          <div className="ticket-pagination" aria-label="Pagination">
            <button className="ticket-arrow" aria-label="Previous page" disabled={page === 1} onClick={() => setPage(page - 1)}>‹</button>
            {pageNumbers.map((number, index) => (
              <span className="ticket-page-group" key={number}>
                {index > 0 && number - pageNumbers[index - 1] > 1 && <span className="ticket-ellipsis">…</span>}
                <button className={`ticket-page ${number === page ? 'active' : ''}`} aria-current={number === page ? 'page' : undefined} onClick={() => setPage(number)}>{number}</button>
              </span>
            ))}
            <button className="ticket-arrow" aria-label="Next page" disabled={page === pageCount} onClick={() => setPage(page + 1)}>›</button>
          </div>
        </footer>
      </main>

      {selectedTicket && (
        <div className="ticket-overlay" onMouseDown={(event) => event.target === event.currentTarget && setSelectedTicket(null)}>
          <section className="ticket-modal" role="dialog" aria-modal="true" aria-labelledby="ticket-modal-title">
            <div className="ticket-modal-head">
              <div><h2 id="ticket-modal-title">{selectedTicket.subject}</h2><p>{selectedTicket.id}</p></div>
              <button className="ticket-close" aria-label="Close details" onClick={() => setSelectedTicket(null)}>×</button>
            </div>
            <div className="ticket-details-grid">
              <div><label>Status</label><span className={`ticket-badge ${statusClass(selectedTicket.status)}`}>{selectedTicket.status}</span></div>
              <div><label>Created at</label><span>{selectedTicket.createdAt}</span></div>
              <div><label>Last updated</label><span>{selectedTicket.updatedAt}</span></div>
              <div><label>Ticket ID</label><span>{selectedTicket.id}</span></div>
            </div>
            <p className="ticket-description">{selectedTicket.description}</p>
          </section>
        </div>
      )}
    </>
  );
}

const styles = `
.ticket-shell{--ink:#171b34;max-width:1100px;margin:32px auto;background:#fff;border:1px solid #e1e4ea;border-radius:18px;box-shadow:0 8px 28px #17204409;overflow:hidden;color:var(--ink);font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.ticket-tabs{height:73px;display:flex;align-items:stretch;gap:34px;padding:0 30px;border-bottom:1px solid #e8e9ee;overflow-x:auto}
.ticket-tab{position:relative;border:0;background:none;color:#666b77;font-size:14px;white-space:nowrap;padding:0 1px;cursor:pointer}.ticket-tab.active{font-weight:650;color:var(--ink)}.ticket-tab.active:after{content:"";position:absolute;bottom:0;left:0;right:0;height:2px;background:#222b51;border-radius:2px}
.ticket-table-wrap{padding:28px 2px 0;overflow-x:auto}.ticket-table{width:100%;border-collapse:separate;border-spacing:0;min-width:720px;font-size:13px}.ticket-table th{height:46px;text-align:left;background:#f2f3f7;color:var(--ink);font-weight:650;font-size:12px;border-top:1px solid #dedfe5;border-bottom:1px solid #dedfe5}.ticket-table th:first-child{border-radius:7px 0 0 7px;border-left:1px solid #dedfe5;padding-left:15px}.ticket-table th:last-child{border-radius:0 7px 7px 0;border-right:1px solid #dedfe5;text-align:center}.ticket-table td{height:50px;border-bottom:1px solid #e8e9ed;white-space:nowrap}.ticket-table td:first-child{padding-left:15px}.ticket-table tbody tr:hover{background:#fafbfe}.ticket-id{border:0;background:none;padding:0;color:#5884d5;cursor:pointer;font:inherit}.ticket-badge{display:inline-block;border:1px solid;border-radius:20px;min-width:55px;text-align:center;padding:1px 9px;font-size:12px;line-height:1.2}.ticket-badge.open{color:#ec6332;background:#fff3ed;border-color:#f6a27e}.ticket-badge.in-progress{color:#5685d4;background:#eef3ff;border-color:#9ab5eb}.ticket-badge.resolved{color:#32996b;background:#eff9f3;border-color:#91c9a9}.ticket-badge.closed{color:#666;background:#eee;border-color:#aaa}.ticket-action{text-align:center}.ticket-view{background:white;border:1px solid #c8cbd1;border-radius:7px;padding:5px 9px;font-size:11px;color:#222;cursor:pointer}.ticket-view:hover{background:#f5f6fa}.ticket-empty{text-align:center;color:#777;padding:45px}.ticket-footer{display:flex;align-items:center;justify-content:space-between;padding:20px;font-size:12px}.ticket-pagination{display:flex;align-items:center;gap:4px}.ticket-page-group{display:flex;align-items:center;gap:4px}.ticket-page,.ticket-arrow{border:0;background:transparent;color:#22263b;min-width:22px;height:25px;border-radius:5px;cursor:pointer;font-size:12px}.ticket-page.active{background:#f0f2f8;font-weight:700}.ticket-arrow{font-size:18px}.ticket-page:disabled,.ticket-arrow:disabled{opacity:.35;cursor:default}.ticket-ellipsis{padding:0 3px}.ticket-overlay{position:fixed;inset:0;z-index:1000;background:#10172e66;display:flex;align-items:center;justify-content:center;padding:20px}.ticket-modal{width:min(460px,100%);background:white;border-radius:16px;padding:24px;box-shadow:0 22px 70px #0003;color:#171b34}.ticket-modal-head{display:flex;align-items:flex-start;justify-content:space-between}.ticket-modal h2{font-size:19px;margin:0 0 6px}.ticket-modal-head p{font-size:13px;color:#6d7280;margin:0 0 22px}.ticket-close{border:0;background:#f1f2f5;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:18px}.ticket-details-grid{display:grid;grid-template-columns:1fr 1fr;gap:17px}.ticket-details-grid label{display:block;color:#818592;font-size:11px;margin-bottom:6px}.ticket-details-grid>div>span:not(.ticket-badge){font-size:13px}.ticket-description{margin:20px 0 0;padding:15px;background:#f7f8fb;border-radius:10px;font-size:13px;color:#555b68;line-height:1.55}
@media(max-width:600px){.ticket-shell{margin:12px 8px}.ticket-tabs{gap:24px;padding:0 18px;height:62px}.ticket-table-wrap{padding-top:18px}.ticket-footer{padding:16px 12px;gap:10px;align-items:flex-start;flex-direction:column}.ticket-pagination{align-self:flex-end}}
`;

