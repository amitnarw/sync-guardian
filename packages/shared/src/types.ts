/**
 * API Types
 */

import { DeviceStatus } from './constants.js';

export type DeviceStatusType = Lowercase<keyof typeof DeviceStatus>;

export interface Device {
  name: string;
  status: DeviceStatus | string;
}

export interface SyncStatus {
  syncLevel: number;
  lastSync: string;
  devices: Device[];
}

export interface NotificationPayload {
  token: string;
  title: string;
  body: string;
}

export interface ApiResponse {
  success: boolean;
  error?: string;
  messageId?: string;
}
