import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const SingleDino = ({ dino }) => {
  return (
    <div className="single-dino">{dino.name}
     <ReactTable className = 'table'
          data={[dino]}
          columns={[
            {
              Header: "Health",
              columns: [
                {
                  Header: "L1",
                  accessor: "health.L1"
                },
                {
                  Header: "W",
                  accessor: "health.W",
                },
                {
                  Header: "T",
                  accessor: "health.T",
                }
              ]
            },
            {
              Header: "Stamina",
              columns: [
                {
                  Header: "L1",
                  accessor: "stamina.L1"
                },
                {
                  Header: "W",
                  accessor: "stamina.W",
                },
                {
                  Header: "T",
                  accessor: "stamina.T",
                }
              ]
            },
            {
              Header: 'Oxygen',
              columns: [
                {
                  Header: "L1",
                  accessor: "oxygen.L1"
                },
                {
                  Header: "W",
                  accessor: "oxygen.W",
                },
                {
                  Header: "T",
                  accessor: "oxygen.T",
                }
              ]
            },
            {
              Header: 'Food',
              columns: [
                {
                  Header: "L1",
                  accessor: "food.L1"
                },
                {
                  Header: "W",
                  accessor: "food.W",
                },
                {
                  Header: "T",
                  accessor: "food.T",
                }
              ]
            },
            {
              Header: 'Weight',
              columns: [
                {
                  Header: "L1",
                  accessor: "weight.L1"
                },
                {
                  Header: "W",
                  accessor: "weight.W",
                },
                {
                  Header: "T",
                  accessor: "weight.T",
                }
              ]
            },
            {
              Header: 'Base Damage',
              columns: [
                {
                  Header: "L1",
                  accessor: "base damage.L1"
                },
                {
                  Header: "W",
                  accessor: "base damage.W",
                },
                {
                  Header: "T",
                  accessor: "base damage.T",
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
    </div>
  );
};

export default SingleDino;
