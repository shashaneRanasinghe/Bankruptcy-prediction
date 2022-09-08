import json
from logging import log
import bankruptcy

def predict(data):
    predictInput = []

# [[
    # To show in UI
#     ' Persistent EPS in the Last Four Seasons',
#     ' Net Value Growth Rate',
#     " Net Income to Stockholder's Equity",
#     ' Net Value Per Share (B)',
#     ' Degree of Financial Leverage (DFL)',
#     ' Net Value Per Share (A)',
#     ' Interest Expense Ratio',
#     ' Per Share Net profit before tax (Yuan ¥)',
#     ' Interest-bearing debt interest rate',
#     ' Borrowing dependency',
#     ' Net profit before tax/Paid-in capital',
#     ' Equity to Liability',
#     ' Non-industry income and expenditure/revenue'
#     ]]

    predictInput.append(data['persistentEPS'])
    predictInput.append(data['netValueGrowthRate'])
    predictInput.append(data['netIncomeToStockholderEquity'])
    predictInput.append(data['netValuePerShareB'])
    predictInput.append(data['DFL'])
    predictInput.append(data['netValuePerShareA'])
    predictInput.append(data['interestExpenseRatio'])
    predictInput.append(data['perShareNetProfitBeforeTax'])
    predictInput.append(data['interestBearingDebtInterestRate'])
    predictInput.append(data['borrowingDependency'])
    predictInput.append(data['netProfitBeforeTax'])
    predictInput.append(data['equityToLiability'])
    predictInput.append(data['nonIndustryIncomeExpense'])

    # print(bankruptcy.predict(predictInput))

    # relationship = [0] * 6
    # race = [0] * 5
    # sex = [0] * 2
    # country = [0] * 2
    # education = [0] * 6
    # wc = [0] * 4
    # ms = [0] * 5
    # occupation = [0] * 10

    # relationship[int(data['relationship'])-1] = 1
    # race[int(data['race'])-1] = 1
    # sex[int(data['sex'])-1] = 1
    # country[int(data['country'])-1] = 1
    # education[int(data['education'])-1] = 1
    # wc[int(data['wc'])-1] = 1
    # ms[int(data['ms'])-1] = 1
    # occupation[int(data['occupation'])-1] = 1

    # if data['country'] == 2:
    #     finalWeight = 170564.5309
    # else:
    #     finalWeight = 163137.8959

    # finalArray = relationship+race+sex+country+education+wc+ms+occupation
    # finalArray.append(data['age'])
    # finalArray.append(finalWeight)
    # finalArray.append(data['hrs'])
    # finalArray.append(data['ncg'])

    score = bankruptcy.predict([predictInput])

    response = {"status": "success", "message": int(score[0])}

    return response