import React, { useState, useEffect } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import SortingTable from "components/SortingTable/SortingTable.jsx";

const BoxScore = authUser => {
  const API_URL = "https://api-cardillsports-st.herokuapp.com";
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState(null);

  const token = localStorage.getItem("idToken");

  const tableData2 = [
    {
      data: [
        { text: "Anuisa Rice" },
        { text: "Nigddder" },
        { text: "Oud-Turnhout" },
        { className: "text-center", text: "$36,738" }
      ]
    }
  ];

  function transform(data) {
    var result = [];

    if (data == null) return result;

    const gameDays = data["gameDays"];
    const lastGameDay = gameDays[0];
    const gameDayTotals = lastGameDay["gameDayStatTotals"];

    for (var i in gameDayTotals) {
      const playerTotal = gameDayTotals[i];
      console.log(playerTotal);
      var tableRow = {};
      var tableRowData = [];

      tableRowData.push({ text: playerTotal.player.firstName });
      tableRowData.push({ text: playerTotal.playerTotalStats.gamesWon });
      tableRowData.push({ text: playerTotal.playerTotalStats.FGM });
      tableRowData.push({ text: playerTotal.playerTotalStats.assists });
      tableRowData.push({ text: playerTotal.playerTotalStats.rebounds });
      tableRowData.push({ text: playerTotal.playerTotalStats.steals });
      tableRowData.push({ text: playerTotal.playerTotalStats.blocks });
      tableRowData.push({ text: playerTotal.playerTotalStats.turnovers });
      
      tableRow["data"] = tableRowData;

      tableRowData.push();

      result.push(tableRow);
    }

    console.log(result);
    return result;
  }

  async function fetchData() {
    const res = await fetch(API_URL + "/stat/score/5ac6aaefe8da8276a88ffc07", {
      headers: new Headers({
        Authorization: token
      })
    });

    res
      .json()
      .then(res => setTableData(transform(res)))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const table = (
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
      tbody={tableData}
    />
  );

  return (
    <>
      <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Box Score</CardTitle>
              </CardHeader>
              <CardBody>{tableData.length !== 0 ? table : null}</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BoxScore;
