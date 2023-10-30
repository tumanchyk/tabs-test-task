import "../index.css";
import tabsData from '../tabs.json';

const TablePage = () => {
    const tableData = tabsData[1].data;
    return <section>
    <div className="tbl-header">
    <table cellPadding="0" cellSpacing="0" border="0">
        <thead>
        <tr>
            {tableData.headers.map(head => {
                return <th>{head}</th>
            })}
        </tr>
      </thead>
    </table>
  </div>
    <div className="tbl-content">
    <table cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        {tableData.rows.map(({code, company, price, change, change$}) => {
            return <tr>
                <td>{code}</td>
                <td>{company}</td>
                <td>{price}</td>
                <td>{change}</td>
                <td>{change$}</td>
                </tr>
            })}
        <tr>
          <td>AAC</td>
          <td>AUSTRALIAN COMPANY </td>
          <td>$1.38</td>
          <td>+2.01</td>
          <td>-0.36%</td>
        </tr>
        <tr>
          <td>AAD</td>
          <td>AUSENCO</td>
          <td>$2.38</td>
          <td>-0.01</td>
          <td>-1.36%</td>
        </tr>
      </tbody>
    </table>
    </div>
    </section>
}
export default TablePage;