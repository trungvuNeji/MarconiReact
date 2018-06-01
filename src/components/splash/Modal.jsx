import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

import Separator from "../../assets/images/separator-image.png";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      organization: '',
      interest: '',
      loc: 'hero-text',
      language: i18n.language,
    };

    this.toggleJoinModal = this.toggleJoinModal.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggleJoinModal() {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('in');
  }

  handleClickOutside() {
    var modal = document.querySelector('.modal');
    
    if (modal.classList.contains('in')) {
      modal.classList.remove('in');
    }
  }

  render() {
    const joinName = i18n.t('Join Modal Name');
    const joinOrg = i18n.t('Join Modal Organization');
    const joinDesc = i18n.t('Join Modal Description');
    
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content subscribe-modal">
            <form 
              action="https://marconi.us17.list-manage.com/subscribe/post" 
              method="POST" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              noValidate>
              <input type="hidden" name="u" value="f4163dd7d40ad21ea56e32016"/>
              <input type="hidden" name="id" value="90c1bb666d"/>

              <div className="modal-header">
                <button 
                  type="button" 
                  className="close"
                  data-dismiss="modal"
                  onClick={this.toggleJoinModal}><i className="fa fa-times-circle-o"></i>
                </button>
                <h4 className="modal-title"><Trans>Join Modal Title</Trans></h4>
                <div className="separator">
                  <img src={Separator} alt="" className="img-responsive" />
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
                      name="EMAIL"
                      value={this.state.email}
                      onChange={ (e) => {this.setState ({ email: e.target.value });} } 
                      className="form-control" 
                      id="mce-EMAIL" 
                      placeholder="E-mail*"
                      autoCapitalize="off" 
                      autoCorrect="off"
                      />
                  </div>

                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </div>
                    <input 
                      type="text" 
                      name="FULLNAME" 
                      value={this.state.fullName}
                      onChange={ (e) => {this.setState ({ fullName: e.target.value });} }
                      className="form-control" 
                      id="mce-FULLNAME" 
                      placeholder={joinName}
                      />
                  </div>

                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <input 
                      type="text" 
                      name="ORG" 
                      value={this.state.organization}
                      onChange={ (e) => {this.setState ({ organization: e.target.value });} } 
                      className="form-control" 
                      id="mce-ORG" 
                      placeholder={joinOrg}
                      />
                  </div>

                  <textarea 
                    className="form-control" 
                    rows="2" 
                    form="mc-embedded-subscribe-form" 
                    name="INTEREST"
                    value={this.state.interest}
                    onChange={ (e) => {this.setState ({ interest: e.target.value });} } 
                    id="mce-INTEREST" 
                    placeholder={joinDesc}>
                  </textarea>

                  <div className="mc-field-group sign-up-url">
                    <label htmlFor="mce-SIGNUP_URL">Signup Page URL </label>
                    <input 
                      type="text" 
                      value={this.state.loc}
                      name="SIGNUP_URL" 
                      className="" 
                      id="mce-SIGNUP_URL"
                      readOnly/>
                  </div>

                  <div className="mc-field-group input-group">
                    <input 
                      type="checkbox" 
                      value="True" 
                      name="MMERGE12" 
                      id="mce-MMERGE12-0" 
                      required/>
                    <label htmlFor="mce-MMERGE12-0">
                      <span>&nbsp;</span><Trans>GDPR Confirm</Trans>
                    </label>
                  </div>

                  <div className="input-group gdpr-text">
                    <p><Trans i18nKey='GDPR Text'>I understand the Marconi Foundation will store my information to send these updates. I have read the <Link to="/privacy">Privacy Policy</Link> and can opt out of receiving products or product updates by selecting an `unsubscribe` option through an e-mail message. Upon opting out, personal information will not be collected and any previously collected personal information will be deleted.</Trans></p>
                  </div>

                  <div className="mc-field-group sub-confirm">
                    <label htmlFor="mce-MMERGE15">Subscriber's Confirmation </label>
                    <input 
                      type="text" 
                      value="" 
                      name="MMERGE15" 
                      className="" 
                      id="mce-MMERGE15"/>
                  </div>

                  <div className="mc-field-group gdpr-screen">
                    <label htmlFor="mce-MMERGE14">GDPR Consent </label>
                    <input 
                      type="url" 
                      value="https://drive.google.com/file/d/1k6RGmR7jDPQW7deCZOe2iyAfht-I8LDC/view"
                      name="MMERGE14" 
                      className="url" 
                      id="mce-MMERGE14"
                      readOnly/>
                  </div>

                </div>
              </div>

              <div className="modal-footer">
                <input 
                  type="submit" 
                  value='Join Community'
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  className="btn btn-default"
                  />
              </div>
            </form>
          </div>

          <div className="modal-content thanks-modal" id="thankyou">
            <form 
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
                  <img src={Separator} alt="" className="img-responsive" />
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

export default translate("translations")(onClickOutside(Modal));