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
import React, { useState } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import SortingTable from "components/SortingTable/SortingTable.jsx";

const API_URL = "https://api-cardillsports-st.herokuapp.com";

class RegularTables extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("idToken");

    const [data, setData] = useState(null);
    const [tableData, setTableData] = useState(null);

    fetch(API_URL + "/stat/score/5ac6aaefe8da8276a88ffc07", {
      headers: new Headers({
        Authorization: token
      })
    })
      .then(response => response.json())
      .then(res => {
        setData(res);

        const tableData = [
          {
            data: [
              { text: "Anuisa Rice" },
              { text: "Nigddder" },
              { text: "Oud-Turnhout" },
              { className: "text-center", text: "$36,738" }
            ]
          }
        ];

        setTableData(tableData);
      });
  }

  transform(data) {
    var result = [];

    if (data == null) return result;

    // const gameDays = data["gameDays"];
    // const lastGameDay = gameDays[0];
    // const gameDayTotals = lastGameDay["gameDayStatTotals"];

    // for (var i in gameDayTotals) {
    //   const playerTotal = gameDayTotals[i];

    //   var tableRow = {};
    //   var tableRowData = [];

    //   tableRowData.push({ text: "Vithushan" });
    //   tableRowData.push({ text: "Vithushan" });
    //   tableRowData.push({ text: "Vithushan" });
    //   tableRowData.push({ text: "Vithushan" });
    //   tableRowData.push({ text: "Vithushan" });

    //   tableRow["data"] = tableRowData;

    //   tableRowData.push();

    //   result.push(tableRow);
    // }

    console.log(result);
    return [
      {
        data: [
          { text: "Vithushan Rice" },
          { text: "Nigddder" },
          { text: "Oud-Turnhout" },
          { className: "text-center", text: "$36,738" }
        ]
      }
    ];
  }

  render() {
    console.log(this.state.data);
    var tableData = this.transform(this.state.data);

    return (
      <>
        <div className="content">
          <Row>
            <Col className="mb-5" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Box Score</CardTitle>
                </CardHeader>
                <CardBody>
                  <SortingTable
                    thead={[
                      { text: "Name" },
                      { text: "Wins" },
                      { text: "Points" },
                      { text: "Assists" },
                      { text: "Rebounds" },
                      { text: "Steals" },
                      { text: "Blocks" },
                      { text: "Turnovers" }
                    ]}
                    tbody={this.state.tableData}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
