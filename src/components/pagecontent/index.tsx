import Paragraph from '../Paragraph'
import Title from '../Title'
import './styles.css'
import DinamicTable from './table'

const PageContent: React.FC = () => {
    return(
        <div className="page-content w-100">
            <div className='module-container'>
                <Title>Dashboards</Title>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod pariatur commodi a doloremque beatae quos. Magni, enim error? Numquam in alias ducimus omnis magnam adipisci quos nostrum aspernatur! Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod pariatur commodi a doloremque beatae quos. Magni, enim error? Numquam in alias ducimus omnis magnam adipisci quos nostrum aspernatur! Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod pariatur commodi a doloremque beatae quos. Magni, enim error? Numquam in alias ducimus omnis magnam adipisci quos nostrum aspernatur! Quaerat.</Paragraph>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod pariatur commodi a doloremque beatae quos. Magni, enim error? Numquam in alias ducimus omnis magnam adipisci quos nostrum aspernatur! Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod pariatur commodi a doloremque beatae quos. Magni, enim error? Numquam in alias ducimus omnis magnam adipisci quos nostrum aspernatur! Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod pariatur commodi a doloremque beatae quos. Magni, enim error? Numquam in alias ducimus omnis magnam adipisci quos nostrum aspernatur! Quaerat.</Paragraph>
                <DinamicTable />
            </div>
        </div>
    )
}

export default PageContent