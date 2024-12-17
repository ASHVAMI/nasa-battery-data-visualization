import { useState, useEffect } from 'react';
import { BatteryData, BatteryDataState } from '../types/battery';
import { fetchBatteryData } from '../services/batteryDataService';

const initialState: BatteryDataState = {
  data: [],
  loading: true,
  error: null
};

export const useBatteryData = () => {
  const [state, setState] = useState<BatteryDataState>(initialState);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      if (!mounted) return;
      
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        const batteryData = await fetchBatteryData();
        
        if (!mounted) return;
        
        setState({
          data: batteryData,
          loading: false,
          error: null
        });
      } catch (error) {
        if (!mounted) return;
        
        setState({
          data: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load battery data'
        });
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return state;
};