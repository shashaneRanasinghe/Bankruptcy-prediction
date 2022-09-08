import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';


export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bankruptcy Prediction Model</Text>

      <Formik
        initialValues = {
          {
            "persistentEPS": 0,
            "netValueGrowthRate": 0,
            "netIncomeToStockholderEquity": 0,
            "netValuePerShareB": 0,
            "DFL": 0,
            "netValuePerShareA": 0,
            "interestExpenseRatio": 0,
            "perShareNetProfitBeforeTax": 0,
            "interestBearingDebtInterestRate": 0,
            "borrowingDependency": 0,
            "netProfitBeforeTax": 0,
            "equityToLiability": 0,
            "nonIndustryIncomeExpense": 0
        }
          }
        onSubmit = {(values) => {
          recommend(values)
        }}
        >
        {(props) => (
          <RootSiblingParent> 
          <View>

            <TextInput
              style={styles.input}
              placeholder=" Persistent EPS"
              onChangeText={props.handleChange('persistentEPS')}
              value={props.values.persistentEPS}
            />

            <TextInput
              style={styles.input}
              placeholder=" Net Value Growth Rate"
              onChangeText={props.handleChange('netValueGrowthRate')}
              value={props.values.netValueGrowthRate}
            />


            <TextInput
              style={styles.input}
              placeholder=" Net Income To Stockholder Equity"
              onChangeText={props.handleChange('netIncomeToStockholderEquity')}
              value={props.values.netIncomeToStockholderEquity}
            />

            <TextInput
              style={styles.input}
              placeholder=" Net Value Per Share B"
              onChangeText={props.handleChange('netValuePerShareB')}
              value={props.values.netValuePerShareB}
            />


            <TextInput
              style={styles.input}
              placeholder=" DFL"
              onChangeText={props.handleChange('DFL')}
              value={props.values.DFL}
            />

            <TextInput
              style={styles.input}
              placeholder=" Net Value Per Share A"
              onChangeText={props.handleChange('netValuePerShareA')}
              value={props.values.netValuePerShareA}
            />


            <TextInput
              style={styles.input}
              placeholder=" Interest Expense Ratio"
              onChangeText={props.handleChange('interestExpenseRatio')}
              value={props.values.interestExpenseRatio}
            />

            <TextInput
              style={styles.input}
              placeholder=" Per Share Net Profit Before Tax"
              onChangeText={props.handleChange('perShareNetProfitBeforeTax')}
              value={props.values.perShareNetProfitBeforeTax}
            />


            <TextInput
              style={styles.input}
              placeholder=" Interest Bearing Debt Interest Rate"
              onChangeText={props.handleChange('interestBearingDebtInterestRate')}
              value={props.values.interestBearingDebtInterestRate}
            />

            <TextInput
              style={styles.input}
              placeholder=" Borrowing Dependency"
              onChangeText={props.handleChange('borrowingDependency')}
              value={props.values.borrowingDependency}
            />


            <TextInput
              style={styles.input}
              placeholder=" Net Profit Before Tax"
              onChangeText={props.handleChange('netProfitBeforeTax')}
              value={props.values.netProfitBeforeTax}
            />

            <TextInput
              style={styles.input}
              placeholder=" Equity To Liability"
              onChangeText={props.handleChange('equityToLiability')}
              value={props.values.equityToLiability}
            />


            <TextInput
              style={styles.input}
              placeholder=" Non Industry Income Expense"
              onChangeText={props.handleChange('nonIndustryIncomeExpense')}
              value={props.values.nonIndustryIncomeExpense}
            />

            <Button style={styles.submit} title='Submit' onPress={props.handleSubmit} />
          </View>
          </RootSiblingParent>
        )}
      </Formik>
    </View>
  );
}

const recommend =async (values) => {

  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  let body = JSON.stringify({
    "persistentEPS": values.persistentEPS,
    "netValueGrowthRate": values.netValueGrowthRate,
    "netIncomeToStockholderEquity": values.netIncomeToStockholderEquity,
    "netValuePerShareB": values.netValuePerShareB,
    "DFL": values.DFL,
    "netValuePerShareA": values.netValuePerShareA,
    "interestExpenseRatio": values.interestExpenseRatio,
    "perShareNetProfitBeforeTax": values.perShareNetProfitBeforeTax,
    "interestBearingDebtInterestRate": values.interestBearingDebtInterestRate,
    "borrowingDependency": values.borrowingDependency,
    "netProfitBeforeTax": values.netProfitBeforeTax,
    "equityToLiability": values.equityToLiability,
    "nonIndustryIncomeExpense": values.nonIndustryIncomeExpense
  });

  let requestOptions = {
    method: 'POST',
    headers: headers,
    body: body,
  };

  await fetch("https://bank-risk-predictor.herokuapp.com/predict", requestOptions)
    .then(response =>
       response.json()
       )
    .then(
      result => {
        if (result.message == 0) {
          let toast = Toast.show('Not Bankrupt', {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
          });
        }else {
          let toast = Toast.show('Bankrupt', {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
          });
        }
      }
       )
    .catch(error => {
      console.log(error)
        let toast = Toast.show('Something Went Wrong.', {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
        });
      }
       );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBC94',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    margin:5,
    width:200,
  },
});
