/**
 * Shared Constants
 */

export enum DeviceStatus {
  CONNECTED = 'connected',
  SYNCING = 'syncing',
  DISCONNECTED = 'disconnected',
}

export const ApiRoutes = {
  SYNC_STATUS: '/api/sync/status',
  SEND_NOTIFICATION: '/api/notifications/send',
} as const;
