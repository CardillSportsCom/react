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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col} from "reactstrap";



class LeagueLeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
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
                    active: this.state.bigChartData === "data1"
                  })}
                  onClick={() => this.setBgChartData("data1")}
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
                    active: this.state.bigChartData === "data2"
                  })}
                  onClick={() => this.setBgChartData("data2")}
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
              <h1>League Leaders</h1>
            </Col>
          </Row>
        
       <Row>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Wins</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Points</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Assists</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Rebounds</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Steals</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Blocks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="3">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Turnovers</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/US.png")}
                                />
                              </div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/DE.png")}
                                />
                              </div>
                            </td>
                            <td>Germany</td>
                            <td className="text-right">1.300</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/AU.png")}
                                />
                              </div>
                            </td>
                            <td>Australia</td>
                            <td className="text-right">760</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/GB.png")}
                                />
                              </div>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right">690</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="flag">
                                <img
                                  alt="..."
                                  src={require("./../assets/img/RO.png")}
                                />
                              </div>
                            </td>
                            <td>Romania</td>
                            <td className="text-right">600</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          
          </Row>
        </div>
      </>
    );
  }
}

export default LeagueLeaders;
