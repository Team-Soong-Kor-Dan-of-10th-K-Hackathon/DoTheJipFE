import * as React from 'react';
import {ColorValue, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import {PieChart, BarChart} from 'react-native-gifted-charts';

export default function StatisticalDataScreen() {
  const pieData = [
    {
      value: 47,
      color: Colors.purple,
      gradientCenterColor: Colors.purple,
      text: '마미',
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
      text: '김아빠',
    },
    {
      value: 11,
      color: Colors.green,
      gradientCenterColor: Colors.green,
      focused: true,
      text: '막냉이',
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
  const [name, setName] = React.useState('막냉이');
  const [rate, setRate] = React.useState(11);
  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            width: Layout.Width * 0.6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderDot(Colors.purple)}
            <Text
              style={{color: Colors.black, fontSize: Layout.FontScale * 15}}>
              마미 47%
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderDot(Colors.pink)}
            <Text
              style={{color: Colors.black, fontSize: Layout.FontScale * 15}}>
              김공주 25%
            </Text>
          </View>
        </View>
        <View
          style={{
            width: Layout.Width * 0.6,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderDot(Colors.skyblue)}
            <Text
              style={{color: Colors.black, fontSize: Layout.FontScale * 15}}>
              김아빠 17%
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderDot(Colors.green)}
            <Text
              style={{color: Colors.black, fontSize: Layout.FontScale * 15}}>
              막냉이 11%
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.white,
          alignItems: 'center',
          width: Layout.Width * 0.86,
          borderRadius: 10,
          paddingTop: Layout.Height * 0.025,
          paddingBottom: Layout.Height * 0.015,
        }}>
        <View
          style={{
            paddingLeft: Layout.Width * 0.06,
          }}>
          <PieChart
            data={pieData}
            donut={true}
            showGradient={true}
            focusOnPress={true}
            sectionAutoFocus={true}
            radius={Layout.Width * 0.3}
            innerRadius={Layout.Width * 0.18}
            innerCircleColor={Colors.white}
            onPress={(e: any) => {
              setName(e.text), setRate(e.value);
            }}
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
                    style={{
                      fontSize: Layout.FontScale * 18,
                      color: Colors.black,
                    }}>
                    {name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: Layout.FontScale * 18,
            color: Colors.black,
          }}>
          누적 집안일 달성률
        </Text>
      </View>
      <View
        style={{
          width: Layout.Width * 0.86,
          height: Layout.Height * 0.102,
          backgroundColor: Colors.white,
          flexDirection: 'row',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: Layout.Width * 0.18,
          marginVertical: Layout.Height * 0.015,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: Layout.FontScale * 28,
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              {`38 `}
            </Text>
            <Text
              style={{
                fontSize: Layout.FontScale * 18,
                color: Colors.deepGray,
              }}>
              / 236
            </Text>
          </View>
          <Text
            style={{
              fontSize: Layout.FontScale * 15,
              color: Colors.black,
            }}>
            완료한 집안일
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: Layout.FontScale * 28,
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              50
            </Text>
          </View>
          <Text
            style={{
              fontSize: Layout.FontScale * 15,
              color: Colors.black,
            }}>
            누적일
          </Text>
        </View>
      </View>

      <View
        style={{
          width: Layout.Width * 0.86,
          minHeight: Layout.Height * 0.33,
          backgroundColor: Colors.white,
          borderRadius: 10,
          alignItems: 'center',
          // justifyContent: 'center',
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: Layout.FontScale * 18,
            color: Colors.black,
          }}>
          이번주 통계
        </Text>
        <View style={{paddingTop: 20}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: Layout.Width,
    height: Layout.Height,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: Layout.Width * 0.07,
    alignItems: 'center',
  },
});
