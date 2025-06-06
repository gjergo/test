import { writable } from 'svelte/store';
import type { MaterialPreset } from './quality-presets';

export interface LightSettings {
	color: string;
	intensity: number;
	distance: number;
	position: {
		x: number;
		y: number;
		z: number;
	};
}

export type QualityPreset = 'low' | 'default' | 'high';

export interface ViewerSettings {
	visible: boolean;
	lights: {
		key: LightSettings;
		fill: LightSettings;
		rim: LightSettings;
	};
	global: {
		centerDistance: number;
		bloom: boolean;
		showHelpers: boolean;
		lightIntensity: number;
		shadows: boolean;
		qualityPreset: QualityPreset;
		materialPreset: MaterialPreset;
	};
}

export const defaultSettings: ViewerSettings = {
	visible: false,
	lights: {
		key: {
			color: '#ffffff',
			intensity: 50.0,
			distance: 15,
			position: { x: 1, y: 1.5, z: 1 }
		},
		fill: {
			color: '#ffffff',
			intensity: 25.0,
			distance: 15,
			position: { x: -1.5, y: 0.5, z: -1.5 }
		},
		rim: {
			color: '#ffffff',
			intensity: 15.0,
			distance: 15,
			position: { x: 0, y: 2, z: -1.5 }
		}
	},
	global: {
		centerDistance: 5,
		bloom: false,
		showHelpers: false,
		lightIntensity: 1.0,
		shadows: true,
		qualityPreset: 'default',
		materialPreset: 'default'
	}
};

export const viewerSettings = writable<ViewerSettings>(structuredClone(defaultSettings));
