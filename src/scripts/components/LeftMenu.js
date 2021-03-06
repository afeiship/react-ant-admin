import { Menu, Icon } from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;

export default class extends React.Component {
  render() {
    return (
      <aside className="left-menu">
        <Link to='/user' activeClassName="active">
          <Icon type="user" />
          用户管理
        </Link>
        <Link to='/option' activeClassName="active">
          <Icon type="setting" />
          系统设置
        </Link>
        <Link to='/tag' activeClassName="active">
          <Icon type="tags" />
          标签管理
        </Link>
        <Link to='/wiki' activeClassName="active">
          <Icon type="link" />
          词条管理
        </Link>
        <Link to='/cate' activeClassName="active">
          <Icon type="bars" />
          分类管理
        </Link>
        <Link to='/image' activeClassName="active">
          <Icon type="file-jpg" />
          图片管理
        </Link>
        <Link to='/qa' activeClassName="active">
          <Icon type="question-circle-o" />
          问答管理
        </Link>
        <Link to='/article' activeClassName="active">
          <Icon type="book" />
          文章管理
        </Link>
      </aside>
    )
  }
}
