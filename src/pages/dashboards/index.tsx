import SideNavigationBar from '../../components/sidebar/index';
import Header from '../../components/header';
import './styles.css'
import PageContent from '../../components/pagecontent';

const Dashboards: React.FC = () => {
  return (
    <div className="dashboards">
      <Header title='Dashboards'/>
      <div className='d-flex flex-grow-1'>
        <SideNavigationBar />
        <PageContent title='Dashboards' />
      </div>
    </div>
  );
}

export default Dashboards;
