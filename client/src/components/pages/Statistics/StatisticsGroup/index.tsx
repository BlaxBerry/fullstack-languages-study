import React, { useMemo } from 'react'
import { Card, Col, Row, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import getTinyCharts from './GroupCharts'

export default function StatisticsGroup() {
  const { OneWeekWords, OneMonthWords, OneDayWords } = getTinyCharts()
  const CHRAT_GROUP = useMemo(
    () => [
      {
        title: '今日总计',
        chart: (
          <>
            <div>xxx</div>
            <div>xxx</div>
          </>
        ),
        desctiption: '今日总计',
        loading: false,
      },
      {
        title: OneDayWords?.title,
        chart: OneDayWords?.chart,
        desctiption: OneDayWords?.description,
        loading: OneDayWords?.loading,
      },
      {
        title: OneWeekWords?.title,
        chart: OneWeekWords?.chart,
        desctiption: OneWeekWords?.description,
        loading: OneWeekWords?.loading,
      },
      {
        title: OneMonthWords?.title,
        chart: OneMonthWords?.chart,
        desctiption: OneMonthWords?.description,
        loading: OneMonthWords?.loading,
      },
    ],
    [OneDayWords, OneMonthWords, OneWeekWords]
  )

  return (
    <>
      <div>StatisticsGroup</div>

      <Row
        justify="space-around"
        align="middle"
        gutter={[16, 16]}
        className="my-statistics-group"
      >
        {CHRAT_GROUP.map((item, index) => (
          <Col key={index} span={6} xs={24} sm={12} md={12} lg={6}>
            <Card
              loading={item.loading}
              size="small"
              hoverable
              className="my-statistics-group-card"
            >
              {/* title */}
              <div className="my-statistics-group-card-title">
                <span>{item.title}</span>
                <Tooltip title={item.desctiption}>
                  <InfoCircleOutlined />
                </Tooltip>
              </div>
              <h1>xxxx</h1>
              {/* chart */}
              <div className="my-statistics-group-card-chart">{item.chart}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
