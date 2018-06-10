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
        <div className = 'dino-list' >
        {dino.info.map(dino => {
          for (let key in dino) {
return (
  <div >
  <ul>
<h4 className = 'dinolist-heading'>{key}</h4>
<li>{dino[key]}</li>
</ul>
</div>
          )
         
        }
      
      })}
        </div>
      </div>
      <h2>Key:</h2>
      W is the increase per level in the wild<br/>
      T - is the increase per level domesticated / tamed in percent of the value when the creature was just tamed <br/>
For example, if an Ankylosaurus has 2000 healthpoints after taming, the increase per level is 124 (6.2% of 2000). <br/>
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
