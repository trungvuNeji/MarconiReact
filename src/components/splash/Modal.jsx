import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
// import i18n from '../../utils/i18n';

class Modal extends Component {

  render() {
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content subscribe-modal">
            <form 
              action="https://marconi.us17.list-manage.com/subscribe/post?u=f4163dd7d40ad21ea56e32016&amp;id=90c1bb666d" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              noValidate>

              <div className="modal-header">
                <button 
                  type="button" 
                  className="close"
                  data-dismiss="modal"><i className="far fa-times-circle"></i>
                </button>
                <h4 className="modal-title"><Trans>Join Modal Title</Trans></h4>
                <div className="separator">
                  <img src="assets/images/separator-image.png" alt="" className="img-responsive" />
                </div>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <input 
                      type="email" 
                      value="" 
                      name="EMAIL"
                      className="form-control" 
                      id="mce-EMAIL" 
                      placeholder="E-mail*"
                      />
                  </div>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </div>
                    <input 
                      type="text" 
                      value="" 
                      name="FULLNAME" 
                      className="form-control" 
                      id="mce-FULLNAME" 
                      placeholder={<Trans>Join Modal Name</Trans>}
                      />
                  </div>
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <input 
                      type="text" 
                      value="" 
                      name="ORG" 
                      className="form-control" 
                      id="mce-ORG" 
                      placeholder={<Trans>Join Modal Organization</Trans>}
                      />
                  </div>
                  <textarea 
                    className="form-control" 
                    rows="2" 
                    form="mc-embedded-subscribe-form" 
                    name="INTEREST" 
                    id="mce-INTEREST" 
                    placeholder={<Trans>Join Modal Description</Trans>}>
                  </textarea>
                </div>
              </div>

              <div className="modal-footer">
                <input 
                  type="submit" 
                  value={<Trans>CTA 1</Trans>} 
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  className="btn btn-default"
                  />
              </div>
            </form>
          </div>

          <div className="modal-content thanks-modal" id="thankyou">
            <form 
              action="https://marconi.us17.list-manage.com/subscribe/post?u=f4163dd7d40ad21ea56e32016&amp;id=90c1bb666d" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              >

              <div className="modal-header">
                <button 
                  type="button" 
                  className="close" 
                  data-dismiss="modal">&times;
                </button>
                <h2 className="modal-title"><Trans>Thanks Modal title</Trans></h2>
                <div className="separator">
                  <img src="assets/images/separator-image.png" alt="" className="img-responsive" />
                </div>
              </div>
              <div className="modal-body">
                <h4 className="modal-title"><Trans>Thanks Modal welcome</Trans></h4>
              </div>
            </form>
          </div>

        </div>
      </div> 
    );
  }
}

export default translate("translations")(Modal);