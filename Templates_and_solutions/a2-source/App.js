import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">BTI425 - Project Portal</a>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/employees">Employees</a></li>
              </ul>
            </div>
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Overview</h1>
              <div className="row">
                <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Projects</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>Project 1</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 2</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 3</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 4</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 5</td>
                              <td>Active # Days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Teams</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>Team 1</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 2</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 3</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 4</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 5</td>
                              <td># Employees</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/teams" className="btn btn-primary form-control">View All Team Data</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Employees</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>Employee 1</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 2</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 3</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 4</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 5</td>
                              <td>Position</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/employees" className="btn btn-primary form-control">View All Employee Data</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
