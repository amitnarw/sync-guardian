/**
 * API Types
 * 
 * Shared type definitions for SyncGuardian API requests and responses.
 * These types represent the contract between the backend and frontend apps.
 */

/**
 * @typedef {'connected' | 'syncing' | 'disconnected'} DeviceStatusType
 */

/**
 * @typedef {Object} Device
 * @property {string} name - Display name of the device
 * @property {DeviceStatusType} status - Current sync status of the device
 */

/**
 * @typedef {Object} SyncStatus
 * @property {number} syncLevel - Overall sync percentage (0-100)
 * @property {string} lastSync - ISO 8601 timestamp of the last sync
 * @property {Device[]} devices - List of connected devices
 */

/**
 * @typedef {Object} NotificationPayload
 * @property {string} token - FCM device token
 * @property {string} title - Notification title
 * @property {string} body - Notification body text
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Whether the request was successful
 * @property {string} [error] - Error message if the request failed
 * @property {string} [messageId] - Message ID for notification responses
 */

module.exports = {};
