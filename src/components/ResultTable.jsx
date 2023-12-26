import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function ResultTable({inputs}) {

  const annualData = calculateInvestmentResults(inputs);
  console.log(annualData);
  let totalInterest = 0;
  let investedCapital = inputs.initialInvestment;
  const results = annualData.map((data) => {
    totalInterest += data.interest;
    investedCapital += inputs.annualInvestment;
    return {
      ...data,
      totalInterest,
      investedCapital
    }
  });

  return (
      <table id="result">
        <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {results.map((result, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>{formatter.format(result.investedCapital)}</td>
            </tr>
        ))}
        </tbody>
      </table>
  )
}