import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

class NetworkCreation extends Component {

  render() {
    return (
      <div id="tab2"><Trans>M3 Tab1 Description</Trans>
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

export default translate("translations")(NetworkCreation);