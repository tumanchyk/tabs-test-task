import tabsData from '../tabs.json';

const ChartPage = () => {
    const chartImg = tabsData[2].data;
    return <section>
        <img src={chartImg} alt='chart image'/>
    </section>
}
export default ChartPage;