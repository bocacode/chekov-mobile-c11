```
npx create-expo-app chekov-mobile
```

https://docs.nativebase.io/install-expo
```
npm install native-base
npx expo install react-native-svg@12.1.1
npx expo install react-native-safe-area-context@3.3.2
npx expo install firebase
npx expo customize metro.config.js
```

<br>

In the `metro.config.js` paste code below
```
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
```