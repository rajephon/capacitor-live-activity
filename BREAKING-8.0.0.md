# BREAKING.md — Version 8.0.0

> **🚨 MANDATORY UPGRADE REQUIREMENT — Builds will fail on older iOS targets**
>
> **Capacitor 8 requires iOS 15.0+**.
> You must update your deployment target to **15.0** in your `Podfile`, `App.xcodeproj`, and any extension targets.

---

## What changed?

- **Minimum iOS Version Bump**: The plugin now requires **iOS 15.0** or higher.
- **Dependencies Updated**:
  - `@capacitor/core` → `^8.0.0`
  - `@capacitor/ios` → `^8.0.0`

## Mandatory Steps

### 1. Update `Podfile`

In your `ios/App/Podfile`, update the platform version:

```ruby
platform :ios, '15.0'
```

### 2. Update Xcode Project Targets

1. Open `ios/App/App.xcworkspace` in Xcode.
2. Select the **App** project in the Project Navigator.
3. For **EACH Target** (App, Widget Extensions, etc.):
   - Go to **Build Settings**.
   - Search for **Deployment**.
   - Set **iOS Deployment Target** to **15.0**.

### 3. Update Capacitor Config (if locally overridden)

Ensure your tools and environment meet Capacitor 8 requirements (Node 22+, Xcode 16+).

---

## Troubleshooting

- **Error:** `The iOS deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 14.0, which is lower than the minimum supported version 15.0`
  - **Fix:** You missed updating the deployment target in the `Podfile` or one of the Xcode targets.

---
