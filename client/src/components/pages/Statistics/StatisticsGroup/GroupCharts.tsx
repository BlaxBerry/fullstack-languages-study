import React, { useState } from 'react'
import { TinyColumn, TinyArea, Bullet } from '@ant-design/plots'

type GroupChartsItemTypes = {
  title: string
  chart: JSX.Element
  description: string
  loading: boolean
}
type GroupChartsTypes = {
  [key: string]: GroupChartsItemTypes
}

export default function GroupCharts(): GroupChartsTypes {
  // TODO: FAKE DETLETE
  const loadingOneWeekWords = false
  const loadingOneMonthWords = false
  const [loadingOneDayWords, setLoadingOneDayWords] = useState(true)
  setTimeout(() => {
    setLoadingOneDayWords(false)
  }, 5000)

  // 1.
  const BulletOnDayWords = () => {
    const data = [
      {
        title: '',
        ranges: [100],
        measures: [14],
        target: 50,
      },
    ]
    const config = {
      data,
      autoFit: true,
      xField: 'title',
      measureField: 'measures',
      rangeField: 'ranges',
      targetField: 'target',
      label: {
        target: true,
      },
      yAxis: false,
      color: {
        range: '#f0efff',
        measure: '#5B8FF9',
        target: '#3D76DD',
      },
      tooltip: {
        showContent: false,
        showMarkers: false,
      },
    }
    return <Bullet {...config} />
  }

  // 3.
  const TinyAreaOnWeekWords = () => {
    const data = [10, 20, 10, 9, 9, 0, 3]
    const config = {
      autoFit: true,
      data,
      smooth: true,
      areaStyle: {
        cursor: 'pointer',
      },
      tooltip: {
        customContent: (
          _title: unknown,
          data: { data: { x: string; y: number } }[]
        ) => `周${Number(data[0]?.data?.x) + 1}：${data[0]?.data?.y} words`,
      },
    }
    return <TinyArea {...config} />
  }

  // 4.
  const TinyColumnOneMonthWords = () => {
    const data = [
      8, 9, 20, 21, 22, 3, 4, 5, 1, 2, 3, 11, 2, 13, 14, 5, 6, 7, 4, 5, 6, 7, 8,
      9, 10, 6, 7, 8, 9, 30, 31,
    ]
    const config = {
      autoFit: true,
      data,
      tooltip: {
        customContent: (
          _x: unknown,
          data: { data: { x: string; y: number } }[]
        ) => `${Number(data[0]?.data?.x) + 1}日：${data[0]?.data?.y} words`,
      },
      columnStyle: {
        cursor: 'pointer',
      },
    }
    return <TinyColumn {...config} />
  }

  return {
    OneDayWords: {
      title: '今日份目标',
      chart: <BulletOnDayWords />,
      description: '一日份的单词量',
      loading: loadingOneDayWords,
    },
    OneWeekWords: {
      title: '一周份',
      chart: <TinyAreaOnWeekWords />,
      description: '一周份的单词量',
      loading: loadingOneWeekWords,
    },
    OneMonthWords: {
      title: '一月份',
      chart: <TinyColumnOneMonthWords />,
      description: '一月份的单词量',
      loading: loadingOneMonthWords,
    },
  }
}
