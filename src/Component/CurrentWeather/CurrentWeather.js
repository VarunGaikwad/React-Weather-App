import "./CurrentWeather.css"

export default function CurrentWeather() {
    return (
        <div className="Weather">
            <div class="Top">
                <div><p className="cityName">
                    Pune
                </p>
                    <p className="cityWeather">
                        Sunny
                    </p></div>

                <img alt="Weather-Icon" className="weatherIcon" src="icons/01d.png" />
            </div>
            <div className="Bottom">
                <p className="Temperature">27°C</p>
                <div className="Details">
                    <div className="parameterRow">
                        <span className="parameterLabel">
                            Details
                        </span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">
                            Feels Like
                        </span>
                        <span className="parameterValue">
                            27°C
                        </span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">
                            Wind
                        </span>
                        <span className="parameterValue">
                            2 m/s
                        </span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">
                            Humidity
                        </span>
                        <span className="parameterValue">
                            15%
                        </span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">
                            Pressure
                        </span>
                        <span className="parameterValue">
                            15 hpa
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
