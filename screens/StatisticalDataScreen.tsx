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

export default function StatisticalDataScreen() {
  const pieData = [
    {
      value: 47,
      color: Colors.purple,
      gradientCenterColor: Colors.purple,
    },
    {
      value: 25,
      color: Colors.pink,
      gradientCenterColor: Colors.pink,
    },
    {
      value: 17,
      color: Colors.skyblue,
      gradientCenterColor: Colors.skyblue,
    },
    {
      value: 11,
      color: Colors.green,
      gradientCenterColor: Colors.green,
      focused: true,
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
        innerRadius={Layout.Width * 0.15}
        innerCircleColor={Colors.white}
        centerLabelComponent={() => {
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: Layout.FontScale * 21,
                  color: Colors.black,
                  fontWeight: 'bold',
                }}>
                11%
              </Text>
              <Text
                style={{fontSize: Layout.FontScale * 18, color: Colors.black}}>
                막냉이
              </Text>
            </View>
          );
        }}
      />
      {renderLegendComponent()}
      <BarChart
        isAnimated={true}
        data={[
          {value: 52, label: '마미', frontColor: Colors.purple},
          {value: 28, label: '김공주', frontColor: Colors.pink},
          {value: 13, label: '김아빠', frontColor: Colors.skyblue},
          {value: 7, label: '막냉이', frontColor: Colors.green},
        ]}
        showYAxisIndices={false}
        horizontal={true}
        barWidth={Layout.Height * 0.015}
        roundedBottom={true}
        roundedTop={true}
        maxValue={52}
        hideRules={true}
        hideYAxisText={true}
        yAxisThickness={0}
        xAxisThickness={0}
        height={Layout.Width * 0.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Layout.Width,
    height: Layout.Height,
    backgroundColor: Colors.white,
    paddingHorizontal: Layout.Width * 0.07,
    alignItems: 'center',
  },
});
