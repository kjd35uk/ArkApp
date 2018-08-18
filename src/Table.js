import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import DinoList from "./data/DinoList";

class Table extends React.Component {
  render() {
    const data = DinoList;
  return (
    <div>TABLE HERE
       <ReactTable
          // data={data}
          columns={[
            {
              Header: "Health",
              columns: [
                {
                  Header: "L1",
                  accessor: "Health.L1"
                },
                {
                  Header: "W",
                  accessor: "Health.W",
                },
                {
                  Header: "T",
                  accessor: "Health.T",
                }
              ]
            },
            {
              Header: "Stamina",
              columns: [
                {
                  Header: "L1",
                  accessor: "Stamina.L1"
                },
                {
                  Header: "W",
                  accessor: "Stamina.W",
                },
                {
                  Header: "T",
                  accessor: "Stamina.T",
                }
              ]
            },
            {
              Header: 'Oxygen',
              columns: [
                {
                  Header: "L1",
                  accessor: "Oxygen.L1"
                },
                {
                  Header: "W",
                  accessor: "Oxygen.W",
                },
                {
                  Header: "T",
                  accessor: "Oxygen.T",
                }
              ]
            },
            {
              Header: 'Food',
              columns: [
                {
                  Header: "L1",
                  accessor: "Food.L1"
                },
                {
                  Header: "W",
                  accessor: "Food.W",
                },
                {
                  Header: "T",
                  accessor: "Food.T",
                }
              ]
            },
            {
              Header: 'Weight',
              columns: [
                {
                  Header: "L1",
                  accessor: "Weight.L1"
                },
                {
                  Header: "W",
                  accessor: "Weight.W",
                },
                {
                  Header: "T",
                  accessor: "Weight.T",
                }
              ]
            },
            // {
            //   Header: 'Base Damage',
            //   columns: [
            //     {
            //       Header: "L1",
            //       accessor: "Base Damage.L1"
            //     },
            //     {
            //       Header: "W",
            //       accessor: "Base Damage.W",
            //     },
            //     {
            //       Header: "T",
            //       accessor: "Base Damage.T",
            //     }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
    </div>
  )
}
}

export default Table;