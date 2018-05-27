import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

class NetworkAdmin extends Component {

  render() {
    return (
      <div id="tab1"><Trans>M3 Tab2 Description</Trans>
        <div className="col-lg-push-2 tab_02">

          <div className="tabs_listing desktop-code-sample">
            <ol>
              <li> Contract <span className="blue_color_02"> IntranetFirewall </span>{'{'}</li>
              <li><span className="pd_15">Init(<span className="orange_color">Address</span> target_address) {'{'}</span>
              </li>
              <li><span className="pd_30">  <span className="orange_color">TunnelRef</span> handle = <span className="blue_color">mOpen</span>(target_address);</span>
              </li>
              <li> <span className="pd_30">  <span className="blue_color">mApply</span>(handle, {'{'}AllowOnlyCorpOrHTTPS{'}'});</span>
              </li>
              <li><span className="pd_15">{'}'}</span></li>
              <li>{'}'}</li>
              <li></li>
              <li> Status <span className="blue_color_02">AllowOnlyCorpOrHTTPS</span>(<span className="orange_color">PacketRef</span> packet) {'{'}</li>
              <li><span className="blue_color_01 pd_15"> if</span> (packet.src().port() != <span className="red_color">443 </span>&&</li>
              <li> <span className="pd_45">!packet.src().url().as_string().match(<span className="green_color">'intranet.example.com'</span>)) </span>{'{'}</li>
              <li> <span className="blue_color_01 pd_30">return</span> Status::<span className="red_color">UNSAFE</span>;</li>
              <li><span className="pd_15">{'}'}</span></li>
              <li><span className="blue_color_01 pd_15">return</span> Status::<span className="red_color">OK</span>;</li>
              <li>{'}'}</li>
            </ol>
          </div>

          <div className="tabs_listing mobile-code-sample">
            <ol>
              <li> Contract <span className="blue_color_02"> IntranetFirewall </span>{'{'}</li>
              <li><span className="pd_15">Init(<span className="orange_color">Address</span> target_address) {'{'}</span>
              </li>
              <li><span className="pd_30"><span className="orange_color">TunnelRef</span> handle = <span className="blue_color">mOpen</span>(target_address);</span>
              </li>
              <li><span className="pd_30">  <span className="blue_color">mApply</span>(handle, {'{'}AllowOnlyCorpOrHTTPS{'}'});</span>
              </li>
              <li><span className="pd_15">{'}'}</span></li>
              <li>{'}'}</li>
              <li><span className="pd_15"></span></li>
              <li>Status <span className="blue_color_02">AllowOnlyCorpOrHTTPS</span>(<span className="orange_color">PacketRef</span> packet) {'{'}</li>
              <li><span className="blue_color_01 pd_15"> if</span> (packet.src().port() != <span className="red_color">443 </span>&&</li>
              <li> <span className="pd_45">!packet.src().url().as_string()</span></li>
              <li> <span className="pd_45">.match(<span className="green_color">'intranet.foo.com'</span>)) </span>{'{'}</li>
              <li> <span className="blue_color_01 pd_30">return</span> Status::<span className="red_color">UNSAFE</span>;</li>
              <li><span className="pd_15">{'}'}</span></li>
              <li><span className="blue_color_01 pd_15">return</span> Status::<span className="red_color">OK</span>;</li>
              <li>{'}'}</li>
            </ol>
          </div>
        </div>

      </div>
    );
  }
}

export default translate("translations")(NetworkAdmin);