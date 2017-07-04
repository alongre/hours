import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './tableView.scss';

export default class TableView extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: false
  }
  render() {
    return (
      <MuiThemeProvider>
          <Table 
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.props.selectable}
              multiSelectable={this.props.multiSelectable}
          >
            <TableHeader
                displaySelectAll={this.props.showCheckboxes}
                adjustForCheckbox={this.props.showCheckboxes}
                enableSelectAll={this.props.enableSelectAll}
            >
            <TableRow displayBorder>
                {
                   this.props.tableHeaders.map(header =>
                    <TableHeaderColumn tooltip={header}>
                        {header}
                    </TableHeaderColumn>
                    )
                }
            </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={this.props.showCheckboxes}
                showRowHover={this.props.showRowHover}
            >
             {
                this.props.tableData.map((data, index) =>
                <TableRow 
                    key={index} 
                    className="tableRow"
                >
                  {
                      this.props.tableHeaders.map(header =>
                        <TableRowColumn>
                            {data[header]}
                        </TableRowColumn>
                )}
                </TableRow>
              )
            }
            </TableBody>
        </Table>
     </MuiThemeProvider>
    );
  }
}


TableView.propTypes = {
  enableSelectAll: React.PropTypes.bool.isRequired,
  multiSelectable: React.PropTypes.bool.isRequired,
  selectable: React.PropTypes.bool.isRequired,
  showCheckboxes: React.PropTypes.bool.isRequired,
  showRowHover: React.PropTypes.bool.isRequired,
  tableData: React.PropTypes.arrayOf(Object).isRequired,
  tableHeaders: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
