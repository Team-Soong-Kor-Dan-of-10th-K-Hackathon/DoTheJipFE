import { Dimensions, StatusBar } from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const FontScale = Dimensions.get('screen').fontScale + 0.1;
const AndroidBottomBarHeight = Height - Dimensions.get('window').height - StatusBar.currentHeight;

export default {
    Width,
    Height,
    FontScale,
    AndroidBottomBarHeight
};
