import React, {FC, useState} from 'react';
import {Button, Col, Input, Row} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchWeather} from "../../store/ducks/weatherReducer";
import "./index.scss";

const SearchBar: FC = () => {

    const [search, setSearch] = useState("");
    const isLoading = useAppSelector(state => state.weatherReducer.isLoading)
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(fetchWeather(search))
    }

    return (
        <div className={"search-bar"}>
            <Row gutter={20}>
                <Col span={19}>
                    <div className="label">Location</div>
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={"Type city..."}
                    />
                </Col>
                <Col span={5}>
                    <Button type="primary" loading={isLoading} onClick={handleSubmit}>Search</Button>
                </Col>
            </Row>
        </div>
    );
};

export default SearchBar;