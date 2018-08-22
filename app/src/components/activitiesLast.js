export default (theme: MuiTheme) => {
  const chartMargins = {
    left: theme.spacing.unit,
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    bottom: theme.spacing.unit
  }

  return {
    legend: {
      wrapperStyle: {
        color: theme.palette.text.primary
      }
    },
    tooltip: {
      wrapperStyle: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: 2
      },
      cursor: {
        stroke: theme.palette.divider,
        strokeWidth: 2
      }
    },
    yAxis: {
      tick: {
        fill: theme.palette.text.primary
      },
      axisLine: false
    },
    xAxis: {
      tick: {
        fill: theme.palette.text.primary
      },
      axisLine: false
    },
    chart: {
      margin: chartMargins
    },
    barChart: {
      margin: chartMargins
    },
    lineChart: {
      margin: chartMargins
    },
    responsiveContainer: {
      minWidth: 300,
      minHeight: 100,
      aspect: 3,
      debounce: 200,
      maxWidth: '100%'
    },
    cartesianGrid: {
      strokeDasharray: '3 3',
      stroke: theme.palette.divider
    },
    primaryLine: {
      stroke: theme.palette.primary.main,
      dot: {
        stroke: theme.palette.primary.main,
        fill: theme.palette.primary.main
      },
      activeDot: {
        stroke: theme.palette.secondary.main,
        fill: theme.palette.secondary.main
      }
    },
    secondaryLine: {
      stroke: theme.palette.secondary.main,
      dot: {
        stroke: theme.palette.secondary.main,
        fill: theme.palette.secondary.main
      },
      activeDot: {
        stroke: theme.palette.primary.main,
        fill: theme.palette.primary.main
      }
    },
    primaryArea: {
      stroke: theme.palette.primary.main,
      dot: {
        stroke: theme.palette.primary.light,
        fill: theme.palette.primary.light
      },
      activeDot: {
        stroke: theme.palette.secondary.light,
        fill: theme.palette.secondary.light
      }
    },
    secondaryArea: {
      stroke: theme.palette.secondary.main,
      dot: {
        stroke: theme.palette.secondary.light,
        fill: theme.palette.secondary.light
      },
      activeDot: {
        stroke: theme.palette.primary.light,
        fill: theme.palette.primary.light
      }
    }
  }
}
