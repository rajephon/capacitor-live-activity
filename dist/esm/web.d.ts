import { WebPlugin } from '@capacitor/core';
import type { LiveActivityPlugin, StartActivityOptions, ScheduledActivityOptions, UpdateActivityOptions, EndActivityOptions, LiveActivityState, ListActivitiesResult } from './definitions';
export declare class LiveActivityWeb extends WebPlugin implements LiveActivityPlugin {
    startActivity(_options: StartActivityOptions): Promise<void>;
    updateActivity(_options: UpdateActivityOptions): Promise<void>;
    endActivity(_options: EndActivityOptions): Promise<void>;
    isAvailable(): Promise<{
        value: boolean;
    }>;
    isRunning(_options: {
        id: string;
    }): Promise<{
        value: boolean;
    }>;
    getCurrentActivity(): Promise<LiveActivityState | undefined>;
    startActivityWithPush(_options: StartActivityOptions): Promise<{
        activityId: string;
    }>;
    startActivityScheduled(_options: ScheduledActivityOptions): Promise<{
        activityId: string;
    }>;
    listActivities(): Promise<ListActivitiesResult>;
    observePushToStartToken(): Promise<void>;
}
