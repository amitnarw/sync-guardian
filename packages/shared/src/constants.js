/**
 * Shared Constants
 * 
 * Constants used across all SyncGuardian apps.
 */

/** Device connection status values */
const DeviceStatus = Object.freeze({
  CONNECTED: 'connected',
  SYNCING: 'syncing',
  DISCONNECTED: 'disconnected',
});

/** API route paths */
const ApiRoutes = Object.freeze({
  SYNC_STATUS: '/api/sync/status',
  SEND_NOTIFICATION: '/api/notifications/send',
});

module.exports = {
  DeviceStatus,
  ApiRoutes,
};
