import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const SingleDino = ({ dino }) => {
  return (
    <div className="single-dino">
      <h1>{dino.name}</h1>
      <div className="intro-block">
        <img
          className="dino-image-large"
          src={require(`./public/images/${dino.name}.jpg`)}
        />
        <ul>{dino.info.map(point => <li className='dino-tips'>{point}</li>)}</ul>
      </div>
      <ReactTable
        className="table"
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
                accessor: "health.W"
              },
              {
                Header: "T",
                accessor: "health.T"
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
                accessor: "stamina.W"
              },
              {
                Header: "T",
                accessor: "stamina.T"
              }
            ]
          },
          {
            Header: "Oxygen",
            columns: [
              {
                Header: "L1",
                accessor: "oxygen.L1"
              },
              {
                Header: "W",
                accessor: "oxygen.W"
              },
              {
                Header: "T",
                accessor: "oxygen.T"
              }
            ]
          },
          {
            Header: "Food",
            columns: [
              {
                Header: "L1",
                accessor: "food.L1"
              },
              {
                Header: "W",
                accessor: "food.W"
              },
              {
                Header: "T",
                accessor: "food.T"
              }
            ]
          },
          {
            Header: "Weight",
            columns: [
              {
                Header: "L1",
                accessor: "weight.L1"
              },
              {
                Header: "W",
                accessor: "weight.W"
              },
              {
                Header: "T",
                accessor: "weight.T"
              }
            ]
          },
          {
            Header: "Base Damage",
            columns: [
              {
                Header: "L1",
                accessor: "base damage.L1"
              },
              {
                Header: "W",
                accessor: "base damage.W"
              },
              {
                Header: "T",
                accessor: "base damage.T"
              }
            ]
          }
        ]}
        defaultPageSize={1}
        Footer="undefined"
        previousText=""
        nextText=""
        className="-striped -highlight"
        showPagination="false"
        showPageSizeOptions="false"
        showPageJump="false"
        showPaginationBottom="false"
      />
      <br />
    </div>
  );
};

export default SingleDino;
