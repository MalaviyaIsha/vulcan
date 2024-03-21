export interface Dataset {
    label: string;
    data: number[];
    fill?: boolean;
    borderColor?: string;
    tension?: number;
    backgroundColor?: string
  }

  export interface ChartData {
    labels: string[];
    datasets: Dataset[];
  }

  export interface ChartOptions {
    responsive: boolean,
    maintainAspectRatio: boolean,
    scales: {
      y: {
        beginAtZero: boolean,
      },
    },
  }
