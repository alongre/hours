import React, { Component } from 'react';
import TableView from '../../common/ui/tableView';

export class Month extends Component {

  componentDidMount() {
    this.props.showDaysInCurrentMonth();
  }  
  render() {
    return (
      <div className="Month">
       <TableView
           enableSelectAll={true}
           multiSelectable={true}
           selectable={true}
           showCheckboxes={true}
           showRowHover={true}
           tableHeaders={this.columnHeaders(this.props.daysInCurrentMonth)}
           tableData={this.props.daysInCurrentMonth}
       />
      </div>
    );
  }

  columnHeaders = (data) => {
    if (data.length === 0) return [];
    const headers = Object.keys(data[0]);
    headers.push('Start');
    headers.push('End');
    headers.push('Total');
    headers.push('Comment');
    return headers;
  }
}

Month.propTypes = {
  daysInCurrentMonth: React.PropTypes.arrayOf(Object).isRequired,
  showDaysInCurrentMonth: React.PropTypes.func.isRequired
};
