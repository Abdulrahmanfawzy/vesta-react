export type ReturnStatus = 'Accepted' | 'Pending' | 'Rejected';

export interface ReturnRequestItem {
  id: string;
  orderImage: string;
  returnRequestId: string;
  orderId: string;
  itemId: string;
  requestDate: string;
  returnReason: string;
  status: ReturnStatus;
  actionType: 'Viewed' | 'View Details';
}
export type ReturnStatus = 'Accepted' | 'Pending' | 'Rejected';
export type ExchangeStatus = 'Completed' | 'Pending' | 'Rejected';
export type RefundStatus = 'Completed' | 'Pending' | 'Rejected';

export interface ReturnRequestItem {
  id: string;
  orderImage: string;
  returnRequestId: string;
  orderId: string;
  itemId: string;
  requestDate: string;
  returnReason: string;
  status: ReturnStatus;
  actionType: 'Viewed' | 'View Details';
}

export interface RefundItem {
  id: string;
  orderId: string;
  orderDate: string;
  customerName: string;
  customerEmail: string;
  customerAvatar: string;
  refundReason: string;
  refundAmount: string;
  status: RefundStatus;
  refundDate: string;
  actionType: 'View Details' | 'Viewed';
}

export interface ExchangeItem {
  id: string;
  exchangeId: string;
  orderId: string;
  productDelivered: string;
  requestedProduct: string;
  buyer: string;
  priceDifference: string;
  stockAvailability: string;
  exchangeReason: string;
  buyerNotes: string;
  photos: string;
  exchangeSettingsStatus: ExchangeStatus;
}