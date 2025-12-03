# Student Exam Performance Prediction

##  Overview
This project is an **End-to-End Machine Learning** solution for predicting student exam performance based on various factors like gender, parental education, and test preparation course completion. The model is trained using multiple regression algorithms, and hyperparameter tuning is performed to achieve the best performance.

## Features
- **End-to-End Machine Learning Pipeline**
- **Exploratory Data Analysis (EDA)**
- **Data Preprocessing & Transformation**
- **Multiple Regression Models with Hyperparameter Tuning**
- **Automated Model Selection based on Performance Metrics**
- **Web Interface for Predictions (Flask-based UI)**

---

## Project Structure
```
endtoendmlproject-main
├── app.py                     # Flask Application
├── artifacts                  # Stores processed data & models
│   ├── data.csv
│   ├── model.pkl
│   ├── preprocessor.pkl
│   ├── test.csv
│   └── train.csv
├── catboost_info              # CatBoost Training Logs
│   ├── catboost_training.json
│   ├── learn
│   │   └── events.out.tfevents
│   ├── learn_error.tsv
│   └── time_left.tsv
├── Notebook                   # Jupyter Notebooks for EDA & Training
│   ├── 1 . EDA STUDENT PERFORMANCE .ipynb
│   ├── 2. MODEL TRAINING.ipynb
│   └── data
│       └── stud.csv
├── README.md                  # Project Documentation
├── requirements.txt           # Required Libraries
├── setup.py                   # Setup for packaging the project
├── src                        # Source Code
│   ├── components             # Data Processing & Model Training
│   │   ├── data_ingestion.py
│   │   ├── data_transformation.py
│   │   ├── __init__.py
│   │   └── model_trainer.py
│   ├── exception.py           # Custom Exception Handling
│   ├── __init__.py
│   ├── logger.py              # Logging
│   ├── pipeline               # ML Pipelines
│   │   ├── __init__.py
│   │   ├── predict_pipeline.py
│   │   └── train_pipeline.py
│   └── utils.py               # Utility Functions
├── static                     # CSS & JS for UI
│   ├── script.js
│   └── style.css
└── templates                  # HTML Templates
    ├── home.html
    └── index.html
```

---

## Installation
### Prerequisites
- Python 3.8+
- Virtual Environment (Recommended)
- Libraries listed in `requirements.txt`

### Setup Instructions
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Sanskar-Jayale/endtoendmlproject.git
   cd endtoendmlproject-main
   ```
2. **Create & Activate Virtual Environment:**
   ```sh
   python -m venv venv
   source venv/bin/activate  # For macOS/Linux
   venv\Scripts\activate     # For Windows
   ```
3. **Install Dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
4. **Run the Flask Application:**
   ```sh
   python app.py
   ```
5. **Access the Web App:**
   Open `http://127.0.0.1:5000/` in your browser.

---

## Machine Learning Workflow
### **1️ Data Preprocessing**
- Data is ingested and split into training and testing sets.
- Missing values are handled, categorical variables are encoded, and feature scaling is applied.

### **2️ Model Training with Hyperparameter Tuning**
The following regression models are evaluated:
- Random Forest
- Decision Tree
- Gradient Boosting
- Linear Regression
- XGBoost
- CatBoost
- AdaBoost

**Hyperparameter tuning** is performed for optimal performance using predefined parameter grids.

### **3️ Model Selection & Evaluation**
- The best model is selected based on the highest R² score.
- If no model achieves an R² score > 0.6, an exception is raised.
- The selected model is saved as `model.pkl`.

---

## Results & Performance
The model selection process evaluates multiple regression models and selects the best one based on performance. The performance is measured using:
- **R² Score**
- **Mean Absolute Error (MAE)**
- **Root Mean Squared Error (RMSE)**

---

## Web Interface (Flask App)
- Users can enter their details in the UI and get predictions for their **Math Score**.
- The backend processes the data, applies transformations, and returns the prediction.

---

## Future Improvements
- **Deploy the model using Docker & AWS/GCP**
- **Enhance UI with a better design**
- **Improve model performance with additional features**
- **Add Explainability (SHAP Analysis)**

---

## Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## License
This project is licensed under the **MIT License**.

---

## Contact
For any inquiries or issues, please reach out via **[your email or GitHub profile]**.

---

