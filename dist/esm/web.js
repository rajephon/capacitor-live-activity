// web.ts
// Web shim: exposes the same API with no-ops for non-iOS platforms.
import { WebPlugin } from '@capacitor/core';
export class LiveActivityWeb extends WebPlugin {
    // ---- Local APIs ----
    async startActivity(_options) {
        console.warn('LiveActivity: startActivity is only available on iOS.');
    }
    async updateActivity(_options) {
        console.warn('LiveActivity: updateActivity is only available on iOS.');
    }
    async endActivity(_options) {
        console.warn('LiveActivity: endActivity is only available on iOS.');
    }
    async isAvailable() {
        console.warn('LiveActivity: isAvailable is only available on iOS.');
        return { value: false };
    }
    async isRunning(_options) {
        console.warn('LiveActivity: isRunning is only available on iOS.');
        return { value: false };
    }
    async getCurrentActivity() {
        console.warn('LiveActivity: getCurrentActivity is only available on iOS.');
        return undefined;
    }
    // ---- Push-capable APIs ----
    async startActivityWithPush(_options) {
        console.warn('[LiveActivity] startActivityWithPush is only available on iOS.');
        return { activityId: '' };
    }
    async startActivityScheduled(_options) {
        console.warn('[LiveActivity] startActivityScheduled is only available on iOS 26+.');
        return { activityId: '' };
    }
    async listActivities() {
        console.warn('[LiveActivity] listActivities is only available on iOS.');
        return { items: [] };
    }
    async observePushToStartToken() {
        console.warn('[LiveActivity] observePushToStartToken is only available on iOS.');
    }
}
//# sourceMappingURL=web.js.map