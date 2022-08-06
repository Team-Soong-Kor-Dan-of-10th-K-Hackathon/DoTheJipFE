import * as React from 'react';
import {
  ColorValue,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import {PieChart, BarChart} from 'react-native-gifted-charts';
import { Shadow } from 'react-native-shadow-2'

export default function StatisticalDataScreen() {
  const pieData = [
    {
      value: 47,
      color: Colors.purple,
      gradientCenterColor: Colors.purple,
      text: '마미'
    },
    {
      value: 25,
      color: Colors.pink,
      gradientCenterColor: Colors.pink,
      text: '김공주',
    },
    {
      value: 17,
      color: Colors.skyblue,
      gradientCenterColor: Colors.skyblue,
      text: '김아빠'
    },
    {
      value: 11,
      color: Colors.green,
      gradientCenterColor: Colors.green,
      focused: true,
      text: '막냉이'
    },
  ];
  const renderDot = (color: ColorValue) => {
    return (
      <View
        style={{
          height: Layout.Width * 0.03,
          width: Layout.Width * 0.03,
          borderRadius: Layout.Width * 0.03,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  const [name,setName]=React.useState('막냉이');
  const [rate,setRate]=React.useState(11);
  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot(Colors.purple)}
            <Text style={{color: Colors.black}}>마미 47%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot(Colors.pink)}
            <Text style={{color: Colors.black}}>김공주 25%</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot(Colors.skyblue)}
            <Text style={{color: Colors.black}}>김아빠 17%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot(Colors.green)}
            <Text style={{color: Colors.black}}>막냉이 11%</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <PieChart
        data={pieData}
        donut={true}
        showGradient={true}
        focusOnPress={true}
        sectionAutoFocus={true}
        radius={Layout.Width * 0.3}
        innerRadius={Layout.Width * 0.18}
        innerCircleColor={Colors.white}
        onPress={(e:any)=>{setName(e.text),setRate(e.value)} }
        centerLabelComponent={() => {
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: Layout.FontScale * 21,
                  color: Colors.black,
                  fontWeight: 'bold',
                }}>
                {rate}%
              </Text>
              <Text
                style={{fontSize: Layout.FontScale * 18, color: Colors.black}}>
                {name}
              </Text>
            </View>
          );
        }}
      />
      <Text style={{fontSize:Layout.FontScale*18, marginBottom:10}}>누적 집안일 달성률</Text>
      <Shadow
        viewStyle={{ width: '100%' }} // 스타일을 설정하면 됩니다.
        radius={10} // 그림자 radius
        offset={[0, 5]} // 그림자 위치 (x, y)
        startColor="#dde0ea" // 그림자 색상
      >
        <View style={{width:Layout.Width*0.84, height:Layout.Height*0.102,backgroundColor:Colors.white,flexDirection:'row',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:10}}>
          <View style={{justifyContent:'center',alignItems:'center',marginRight:30}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:Layout.FontScale*28}}>38</Text>
              <Text style={{fontSize:Layout.FontScale*18,color:Colors.deepGray}}>/ 236</Text>
            </View>
            <Text>완료한 집안일</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:Layout.FontScale*28}}>50</Text>
            </View>
            <Text>누적일</Text>
          </View>
        </View>
      </Shadow>
      <Shadow
        viewStyle={{ width: '100%' }} // 스타일을 설정하면 됩니다.
        radius={10} // 그림자 radius
        offset={[0, 5]} // 그림자 위치 (x, y)
        startColor="#dde0ea" // 그림자 색상
      >
        <View style={{width:Layout.Width*0.84, minHeight:Layout.Height*0.33,backgroundColor:Colors.white,borderRadius:10,alignItems:'center',justifyContent:'center',padding:10}}>
          <Text>이번주 통계</Text>
          <View style={{paddingTop:20}}>
          <BarChart
        isAnimated={true}
        data={[
          {value: 52, frontColor: Colors.purple},
          {value: 28, frontColor: Colors.pink},
          {value: 13, frontColor: Colors.skyblue},
          {value: 7, frontColor: Colors.green},
        ]}
        showYAxisIndices={false}
        barWidth={Layout.Height * 0.02}
        roundedBottom={false}
        roundedTop={true}
        maxValue={50}
        hideRules={true}
        hideYAxisText={true}
        yAxisThickness={0}
        xAxisThickness={0}
        initialSpacing={30}
        spacing={40}
        height={Layout.Width * 0.35}
      />
      </View>
        {renderLegendComponent()}
        </View>
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: Layout.Width,
    height: Layout.Height,
    backgroundColor: Colors.white,
    paddingHorizontal: Layout.Width * 0.07,
    alignItems: 'center',
  },
});
