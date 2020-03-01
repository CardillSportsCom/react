/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample1,
  orangeChart,
  greenChart,
  purpleChart,
  blueChart,
  pointsChartData
} from "variables/charts.jsx";

const Dashboard = () => {
  const API_URL = "https://api-cardillsports-st.herokuapp.com";
  const [statsData, setStatsData] = useState([]);
  const [bigChartData, setBigChartData] = useState("data1");
  const [errors, setErrors] = useState(null);

  const foo = [];
  const bar = [];

  const token = localStorage.getItem("idToken");
  const playerId = localStorage.getItem("playerId");

  async function fetchData() {
    const res = await fetch(API_URL + "/stat/cumulative/player/" + playerId, {
      headers: new Headers({
        Authorization: token
      })
    });

    res
      .json()
      .then(res => setStatsData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

const months =["JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  function getPointsData() {
    if (statsData.length === 0) return [];

    var pointsData = statsData.cumulativeStats.points;

    var x = [];
    var y = [];

    for (let i = 0; i < pointsData.length; i++) {
      var dateObj = new Date(pointsData[i].date);
      var dateString = months[dateObj.getMonth()] + " " + dateObj.getDate();
      
      x.push(dateString);
      //x.push(pointsData[i].date);
      y.push(pointsData[i].value);
    }

    return {
      x: x,
      y: y,
      total: y[y.length -1]
    };
  }

  const pointsData = getPointsData();

  return (
    <>
      <div className="content">
        {JSON.stringify(statsData)}
        <Row>
          <Col xs="12">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <Button
                color="primary"
                id="0"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data1"
                })}
                onClick={() => setBigChartData("data1")}
              >
                <input defaultChecked name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  This Season
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02" />
                </span>
              </Button>
              <Button
                color="primary"
                id="1"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data2"
                })}
                onClick={() => setBigChartData("data2")}
              >
                <input name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  All Time
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-gift-2" />
                </span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h1>Stats</h1>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-title">Wins</h5>
                    <CardTitle tag="h2">
                      <i className="tim-icons icon-trophy text-primary" /> 32
                    </CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={orangeChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-title">Points</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-coins text-info" /> {pointsData.total}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={
                      pointsChartData(
                        pointsData.x,
                        pointsData.y
                      ).data
                    }
                    options={blueChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-title">Assists</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-heart-2 text-success" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={greenChart.data} options={greenChart.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-title">Rebounds</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-trash-simple text-warning" />{" "}
                  763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={purpleChart.data} options={purpleChart.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-title">Steals</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-lock-circle text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={blueChart.data} options={blueChart.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-title">Blocks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-app text-success" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={greenChart.data} options={greenChart.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-title">Turnovers</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-alert-circle-exc text-warning" />{" "}
                  763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line data={purpleChart.data} options={purpleChart.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
