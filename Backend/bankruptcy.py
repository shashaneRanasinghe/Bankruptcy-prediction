from sklearn.svm import SVC, LinearSVC
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
import imageio as io
import os
import seaborn as sns
from imblearn.under_sampling import RandomUnderSampler

from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix

def predict(user_data):
    url='https://drive.google.com/file/d/16yL1nFwRWGlMsIxsIr2c9FnUveBdimBN/view?usp=sharing'
    url='https://drive.google.com/uc?id=' + url.split('/')[-2]

    df = pd.read_csv(url)
    df = df.drop([" Net Income Flag"], axis = 1)

    df = df[['Bankrupt?',
    ' Persistent EPS in the Last Four Seasons',
    ' Net Value Growth Rate'," Net Income to Stockholder's Equity",
    ' Net Value Per Share (B)',
    ' Degree of Financial Leverage (DFL)',
    ' Net Value Per Share (A)',
    ' Interest Expense Ratio',
    ' Per Share Net profit before tax (Yuan ¥)',
    ' Interest-bearing debt interest rate',
    ' Borrowing dependency',
    ' Net profit before tax/Paid-in capital',
    ' Equity to Liability',
    ' Non-industry income and expenditure/revenue']]
    
    X = df.drop(['Bankrupt?'], axis=1)
    y = df['Bankrupt?']

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=0)

    rfc = RandomForestClassifier(random_state=0)
    rfc.fit(X_train, y_train)
    rfc_pred = rfc.predict(user_data)

    return rfc_pred