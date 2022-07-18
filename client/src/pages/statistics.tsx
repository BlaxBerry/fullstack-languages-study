import React from 'react'
import {
  StatisticsGroup,
  StatisticsWeek,
  StatisticsRate,
} from '../components/pages/Statistics'

export default function Statistics() {
  return (
    <>
      <StatisticsGroup />

      <StatisticsWeek />

      <StatisticsRate />
    </>
  )
}
