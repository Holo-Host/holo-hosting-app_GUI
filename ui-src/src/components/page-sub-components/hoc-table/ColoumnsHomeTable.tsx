import * as React from 'react';
// import { StateProps, DispatchProps } from '../../../containers/HomeRouterContainer';
import '../../styles/page-styles/scaffold-styles.css';
import Button from '@material-ui/core/Button';
// export type Props = DispatchProps & StateProps;

const home_table_columns = (props: any, state: any,onClick:any) => {
  console.log("Coloum props: ",props)
  const table_columns = [{
    Header: (row: any) => (<h4 style={{color:'#0e094b'}}>hApps</h4>),
    accessor: 'app_hash',
    filterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
      { row.value }
      </div>
    )
    }, {
    Header: (row: any) => (<h4 style={{color:'#0e094b'}}>Status</h4>),
    accessor: 'status',
    filterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
      { row.value === "Enabled" ? <Button variant="contained" onClick={onClick}>
        Enable
      </Button> :  <Button variant="contained" onClick={onClick}>
        Disable
      </Button> }
      </div>
    )
    }]
  return table_columns;
};

export default home_table_columns;
