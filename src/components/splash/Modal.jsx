import React, { Component } from 'react';
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
      language: i18n.language,
    };

    this.toggleJoinModal = this.toggleJoinModal.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggleJoinModal() {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('in');
  }

  joinName() {
    // var lang = this.state.language;
    return <Trans>Join Modal Name</Trans>;
  }

  joinOrg() {
    return <Trans>Join Modal Organization</Trans>;
  }

  joinDesc() {
    return <Trans>Join Modal Description</Trans>;
  }

  handleClickOutside() {
    var modal = document.querySelector('.modal');
    
    if (modal.classList.contains('in')) {
      modal.classList.remove('in');
    }
  }

  render() {
    
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
                        placeholder='Full Name*'
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
                      placeholder='Organization'
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
                    placeholder='why are you interested?'>
                  </textarea>
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

export default translate("translations")(onClickOutside(Modal));