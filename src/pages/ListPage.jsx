import tabsData from '../tabs.json';

const ListPage = () => {
    const listData = tabsData[0].data;
    return <section>
        <h1>How to clean your fish tank</h1>
        <ol role="list">
            {listData.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ol>
    </section>
}
export default ListPage;