import Table from '../components/Table'
import '../App.css'
import logo from '../assets/vite.svg'
import Button from '../components/Button'
import Icon from '../components/Icon'
import { IoIosPersonAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function Home() {

  

  const navigate = useNavigate()
  return (
    <>
      <div className="main-div">
        <div className="header">
          <div className="logo">
            <Icon src={logo} alt='logo'></Icon>
          </div>
          <div className="btn-cls">
            <Button type='button' text='ADD' icon={IoIosPersonAdd} className='btn' onclick={() => {
              navigate('/add');
            }}></Button>
          </div>
        </div>

        <div className="body">
          <div>
            <Table></Table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;