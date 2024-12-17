export interface RawBatteryData {
  cycle: string;
  Re: string;
  Rct: string;
  temperature: string;
  timestamp: string;
}

export interface BatteryData {
  cycle: number;
  Re: number;
  Rct: number;
  temperature: number;
  timestamp: Date;
}

export interface ChartData {
  x: number[];
  y: number[];
  name: string;
  type: string;
  mode: string;
}

export interface BatteryDataState {
  data: BatteryData[];
  loading: boolean;
  error: string | null;
}