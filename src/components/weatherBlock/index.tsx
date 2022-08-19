import React, {FC} from 'react';
import moment from "moment";
import {useAppSelector} from "../../hooks/redux";
import {Spin} from "antd";
import "./index.scss";

const WeatherBlock: FC = () => {

    const {data, isLoading, isError} = useAppSelector(state => state.weatherReducer)

    if (isLoading) {
        return <Spin size={"large"} className={"loader"}/>
    }

    if (isError) {
        return <p>{isError}</p>
    }

    return (
        <>
            {
                data &&
                <section className={"weather-block"}>
                    <div className="grid-wrap">
                        <img
                            src={require(`../../assets/images/${data.main}.svg`)}
                            alt={data.main}
                            className="icon"
                        />
                        <div className="inner-wrap">
                            <div className="temp">{Math.round(data.temp)}</div>
                            <div className="description">{data.main}</div>
                            <div className="date">{moment().format("Do, MMMM YY")}</div>
                        </div>
                    </div>
                </section>
            }
        </>

    );
};

export default WeatherBlock;