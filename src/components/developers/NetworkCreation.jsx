import React, { Component } from 'react';

class NetworkCreation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tab-pane" id="tab2">
        Spin up a new virtualized blockchain network in just a few lines of code
        <div className="col-lg-push-2 tab_01">

          <div className="tabs_listing desktop-code-sample">
            <ol>
              <li> $ marconi branch foo</li>
              <li><span className="green_color">  >>> Success. Created branch foo. </span></li>
              <li></li>
              <li> $ marconi status --branch_name=foo</li>
              <li><span className="green_color">    >>> Branch foo: uninitialized.</span> </li>
              <li></li>
              <li> $ marconi init --config=/tmp/config.txt --branch_name=foo</li>
              <li> <span className="green_color">>>> Success. Configured branch foo.</span></li>
              <li></li>
              <li> $ marconi run --branch_name=foo</li>
              <li> <span className="green_color">>>> Success. Running branch foo.</span></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>

          <div className="tabs_listing mobile-code-sample">
            <ol>
              <li> $ marconi branch foo</li>
              <li><span className="green_color">  >>> Success. Created branch foo. </span></li>
              <li><span className="pd_15"></span></li>
              <li> $ marconi status --branch_name=foo</li>
              <li><span className="green_color">    >>> Branch foo: uninitialized.</span> </li>
              <li><span className="pd_15"></span></li>
              <li> $ marconi init --config=</li>
              <li><span className="pd_15">/tmp/config.txt --branch_name=foo</span></li>
              <li> <span className="green_color">>>> Success. Configured branch foo.</span></li>
              <li><span className="pd_15"></span></li>
              <li> $ marconi run --branch_name=foo</li>
              <li> <span className="green_color">>>> Success. Running branch foo.</span></li>
            </ol>
          </div>

        </div>
      </div>
    );
  }
}

export default NetworkCreation;