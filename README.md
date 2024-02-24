# StockSavvyAI-Django-Web-Application
Reliable Stock Price Prediction and Analysis with StockPredictHQ web service

<img src="stockpredictionapp/stockpredictionapp/static/image/Stock.png" alt="StockSavvyAI - Stock Market Prediction Web Application">

## Introduction
StockSavvyAI is a web application designed to provide users with stock market predictions using machine learning techniques. The core of our service lies in utilizing an LSTM (Long Short-Term Memory) model, a type of recurrent neural network known for its ability to process and predict sequences of data, making it particularly suitable for time-series forecasting tasks like stock price prediction.

## Features

- **Dashboard**: The application offers a user-friendly dashboard where users can input the companies they want to predict and view real-time predictions presented with visually appealing charts and graphs.
- **Data Preprocessing**: Before feeding data into the LSTM model, it undergoes preprocessing, including normalization and splitting into training and testing sets, to ensure optimal performance.
- **Model Training**: Our LSTM model architecture, built using the Keras API of TensorFlow, comprises two LSTM layers followed by two fully connected Dense layers. The model is trained using mean squared error loss and the Adam optimizer.
- **Prediction**: Users can input the number of days they want to predict stock prices for, based on the most recent historical data available.
- **User Authentication**: The application features secure user registration, account activation, and login functionalities to ensure data privacy and security.

## Technology Stack

### Languages

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white): The markup language used for structuring web pages.
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white): The style sheet language used for styling web pages.
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black): The programming language used for adding interactivity to web pages.
- ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white): The programming language used for backend logic and machine learning implementations.

### Frameworks

- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white): Bootstrap is used for frontend styling and layout.
- ![Django](https://img.shields.io/badge/-Django-092E20?style=flat&logo=django&logoColor=white): Django is the backend framework used for building robust web applications.

### Machine Learning/Deep Learning

- ![Numpy](https://img.shields.io/badge/-Numpy-013243?style=flat&logo=numpy&logoColor=white): Numpy is used for numerical computing and data manipulation.
- ![Pandas](https://img.shields.io/badge/-Pandas-150458?style=flat&logo=pandas&logoColor=white): Pandas is used for data manipulation and analysis.
- ![Scikit-learn](https://img.shields.io/badge/-Scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white): Scikit-learn is used for machine learning algorithms and model evaluation.
- ![TensorFlow](https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white): TensorFlow is employed for building and training machine learning models.
- ![Keras](https://img.shields.io/badge/-Keras-D00000?style=flat&logo=keras&logoColor=white): Keras is used for building neural network models.

### Database

- ![SQLite](https://img.shields.io/badge/-SQLite-003B57?style=flat&logo=sqlite&logoColor=white): SQLite is used as the database management system for storing application data.

### APIs

- Yahoo Finance API
- REST APIs

### IDE

- ![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white): Visual Studio Code is used as the primary integrated development environment (IDE) for coding.
- ![PyCharm](https://img.shields.io/badge/-PyCharm-000000?style=flat&logo=pycharm&logoColor=white): PyCharm is used as an alternative IDE for Python development.
- ![Jupyter](https://img.shields.io/badge/-Jupyter-F37626?style=flat&logo=jupyter&logoColor=white): Jupyter Notebook is used for interactive data analysis and visualization.

### Design

- ![Figma](https://img.shields.io/badge/-Figma-F24E1E?style=flat&logo=figma&logoColor=white): Figma is used for designing user interfaces and prototyping.


## Evaluation

The performance of our LSTM model is evaluated using metrics such as RMSE (Root Mean Squared Error) and MAPE (Mean Absolute Percentage Error) to measure prediction accuracy. Despite the complexity of the data, the LSTM model demonstrates promising results, providing valuable insights for investors.

## Conclusion

StockSavvyAI offers investors a powerful tool for making informed decisions in the stock market by providing accurate predictions and real-time updates. With its intuitive interface, robust technology stack, and reliable predictions, StockSavvyAI aims to assist users in navigating the dynamic landscape of stock trading effectively.

