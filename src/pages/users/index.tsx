import PageContent from '../../components/pagecontent';
import Header from '../../components/header';
import SideNavigationBar from '../../components/sidebar';
import './styles.css';

function Users() {
  return (
    <div className="users">
      <Header title='Users'/>
      <div className='d-flex flex-grow-1'>
        <SideNavigationBar />
        <PageContent title='Users' />
      </div>
    </div>
  );
}

export default Users;
