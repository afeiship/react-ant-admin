import { hashHistory } from 'react-router';
import http from 'services/http';
import { Form, Icon, Input, Button } from 'antd';
import UserForm from './_form';


export default class extends UserForm {
  constructor(props){
    super(props);
    this._formType='add';
  }
  handleSubmit(){
    this.create(function(){
        hashHistory.goBack();
    });
  }
}
