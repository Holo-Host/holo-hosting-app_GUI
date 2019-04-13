import * as React from 'react';
// import { StateProps, DispatchProps } from '../../../containers/HomeRouterContainer';
import '../../styles/page-styles/scaffold-styles.css';
import Button from '@material-ui/core/Button';
// export type Props = DispatchProps & StateProps;

const home_table_columns = (props: any, state: any) => {
  const onClickEnable = (event:any) => {
    console.log("*TODO : Send a request to the Interceptor to Enable*")
  }

  const onClickDisable = (event:any) => {
    console.log("*TODO : Send a request to the Interceptor to Disable*")
  }

  const onClickView = (event:any) => {
    console.log("*TODO : View Details*")
    props.get_app_details_from_hstore({app_hash:event.original.app_bundle.happ_hash})
  }

  const table_columns = [{
    Header: (row: any) => (<h4 style={{color:'#0e094b', fontSize:'1em'}}>hApps</h4>),
    accessor: 'app_hash',
    filterAll: true,
    Cell: (row: any) => (
      <div >
        <h3 style={{fontSize:'1.5rem'}}>{ row.value }</h3>
      </div>
    )
    },
    {
    Header: (row: any) => (<h4 style={{color:'#0e094b'}}>Status</h4>),
    accessor: 'Details',
      filterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
      <Button variant="contained" value={row} onClick={onClickView.bind(props,row)}>
        View
      </Button>
      </div>
    )
  },
   {
    Header: (row: any) => (<h4 style={{color:'#0e094b'}}>Status</h4>),
    accessor: 'status',
    filterAll: true,
    Cell: (row: any) => (
      <div style={{ padding: '5px' }}>
      { row.value === "Enabled" ? <Button variant="contained" onClick={onClickEnable.bind(props,row)}>
        Disable
      </Button> :  <Button variant="contained" value={row} onClick={onClickDisable.bind(props,row)}>
        Enable
      </Button> }
      </div>
    )
  }]
  return table_columns;
};

export default home_table_columns;
