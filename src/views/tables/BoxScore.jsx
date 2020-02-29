import React, { useState, useEffect } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import SortingTable from "components/SortingTable/SortingTable.jsx";

import { ClapSpinner } from "react-spinners-kit";

const BoxScore = () => {
  const API_URL = "https://api-cardillsports-st.herokuapp.com";
  const [tableData, setTableData] = useState([]);
  const [gameIndex, setGameIndex] = useState(0);
  const [errors, setErrors] = useState(null);

  const token = localStorage.getItem("idToken");

  function transform(data, index) {
    var result = [];

    if (data.length === 0) return result;

    const gameDays = data["gameDays"];
    const lastGameDay = gameDays[index];
    const gameDayTotals = lastGameDay["gameDayStatTotals"];

    for (var i in gameDayTotals) {
      const playerTotal = gameDayTotals[i];
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
      .then(res => setTableData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function getTable() {
    return (
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
        tbody={transform(tableData, gameIndex)}
      />
    );
  }

  function getDate() {

    if (tableData.length === 0) return '';

    const gameDays = tableData["gameDays"];
    const gameDay = gameDays[gameIndex];
    
    return gameDay.gameDate;

  }

  const spinner = <ClapSpinner size={30} frontColor="#f88c1d" />;

  function onPrevClicked() {
    setGameIndex(Math.max(0, gameIndex - 1));
  }
  function onNextClicked() {
    setGameIndex(Math.min(10, gameIndex + 1));
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">{"Box Score: " + getDate()}</CardTitle>
                <button
                  className="btn btn-primary animation-on-hover"
                  type="button"
                  onClick={onPrevClicked}
                >
                  Previous
                </button>

                <button
                  className="btn btn-primary animation-on-hover"
                  type="button"
                  onClick={onNextClicked}
                >
                  Next
                </button>
              </CardHeader>
              <CardBody>
                {tableData.length !== 0 ? getTable() : spinner}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BoxScore;
