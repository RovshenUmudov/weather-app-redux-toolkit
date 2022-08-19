import React from 'react';
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import WeatherBlock from "./components/weatherBlock";
import SearchBar from "./components/searchBar";

const App = () => {

    return (
        <Layout className={'layout'}>
            <Content className={'main-content'}>
                <SearchBar />
                <WeatherBlock />
            </Content>
        </Layout>
    );
};

export default App;