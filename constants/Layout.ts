import { Dimensions } from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const FontScale = Dimensions.get('screen').fontScale;

export default {
    Width,
    Height,
    FontScale
};
