# Battery Aging Analysis using NASA Battery Dataset

## Project Overview

This project visualizes how certain battery parameters change as a lithium-ion battery cell ages through repeated charge and discharge cycles. Using the NASA Battery Dataset, we focus on three main parameters:

- **Battery Impedance** (`Battery_impedance`): A measure of the opposition that a circuit presents to a current when a voltage is applied.
- **Electrolyte Resistance** (`Re`): Estimated electrolyte resistance, measured in Ohms.
- **Charge Transfer Resistance** (`Rct`): Estimated charge transfer resistance, measured in Ohms.

These parameters provide insights into the internal battery conditions and how they degrade over time.

## Dataset

The dataset used for this project is the [NASA Battery Dataset](https://www.kaggle.com/datasets/patrickfleith/nasa-battery-dataset) from Kaggle. The dataset contains measurements from lithium-ion batteries over repeated charge and discharge cycles, which help to observe aging patterns.

### Data Columns (Replace with actual columns from the dataset)

- `cycle`: Represents the number of charge/discharge cycles.
- `Battery_impedance`: Battery impedance in Ohms.
- `Re`: Electrolyte resistance in Ohms.
- `Rct`: Charge transfer resistance in Ohms.
- `State_of_health`: Indicator of battery aging.

## Installation

To run this project, follow the steps below:

1. Install the required Python dependencies:
   
    pip install pandas plotly numpy

2. Download the NASA Battery Dataset from [Kaggle](https://www.kaggle.com/datasets/patrickfleith/nasa-battery-dataset/data) and place it in the `data/` directory as `nasa_battery_dataset.csv`.

## Running the Visualization

1. Run the Python script to visualize the battery parameters over the charge/discharge cycles:

    python src/visualize_battery_data.py


2. The plot will be displayed in your default web browser.

## Visualization Example

![Battery Aging Plot](example_plot.png)

The plot will show how `Battery_impedance`, `Re`, and `Rct` change over the battery's aging cycles.

## Technologies Used

- **Python**: Used for data manipulation and visualization.
- **Pandas**: For reading and processing the dataset.
- **Plotly**: For creating interactive plots.

## License

This project is open-source and available under the [MIT License](LICENSE).



Made by ashvani singh !!!!!