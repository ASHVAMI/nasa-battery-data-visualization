// Battery data source URLs in order of preference
export const DATA_SOURCES = {
  PRIMARY: 'https://raw.githubusercontent.com/OpenInspireHub/battery-data/main/impedance_data.csv',
  FALLBACK: 'https://cdn.jsdelivr.net/gh/OpenInspireHub/battery-data@main/impedance_data.csv',
  DEMO: `cycle,Re,Rct,temperature,timestamp
1,0.15,0.32,25,2023-01-01T00:00:00
2,0.16,0.33,25,2023-01-02T00:00:00
3,0.17,0.34,25,2023-01-03T00:00:00
4,0.18,0.35,25,2023-01-04T00:00:00
5,0.19,0.36,25,2023-01-05T00:00:00`
} as const;

export const CHART_CONFIG = {
  width: 800,
  height: 500,
  margin: { l: 50, r: 50, t: 50, b: 50 }
} as const;

export const FETCH_CONFIG = {
  TIMEOUT: 5000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
} as const;