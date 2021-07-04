import { Popconfirm, Tooltip } from 'antd';
import { destroyCookie, parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import logo from '../../../assets/logo.png';
import { Admin } from '../../../generated/graphql';
import { StyledMenu, AdminSubMenuStyle, MobileMenu } from './styles';
import Title from '../../atoms/Title';


export default function AdminMenu() {
    const cookieAdmin = parseCookies()['@crossranking:admin'];
    const cookieToken = parseCookies()['@crossranking:token'];
    const history = useHistory()

    const [loggedAdmin, setLoggedAdmin] = useState<Admin>(
        JSON.parse(cookieAdmin ?? '{}'),
    );

    useEffect(() => {
        if(!cookieToken) {
            history.push('/admin/login');
        }
    })

    function handleLogout() {
        destroyCookie(null, '@crossranking:admin');
        destroyCookie(null, '@crossranking:token');
        history.push('/admin/login');
    }

    return(
        <StyledMenu>
            <MobileMenu>
                <h4 style={{margin: 0, padding: 0, marginLeft: '40px', alignSelf: 'center'}}>CrossRanking</h4>
                <img style={{padding: '0 20px', width: "70px"}} src={logo} />
            </MobileMenu>
            <AdminSubMenuStyle>
                <h1 className="title" style={{margin: 0, padding: 0,marginLeft: '40px', alignSelf: 'center'}}>CrossRanking</h1>
                <img style={{padding: '0 20px'}} src={logo} />
                <Link style={{alignSelf: 'center', padding: '0 10px'}} to="/admin/box">
                    <Title title="Box" fontSize="20px" color="white" />
                </Link>
                <Link style={{alignSelf: 'center', padding: '0 10px'}} to="/admin/competitions">
                    <Title title="Competições" fontSize="20px" color="white" />
                </Link>
                <Link style={{alignSelf: 'center', padding: '0 10px'}} to="/admin/athletes">
                    <Title title="Atletas" fontSize="20px" color="white" />
                </Link>
                <Link style={{alignSelf: 'center', padding: '0 10px'}} to="/admin/competitions-rank">
                    <Title title="Ranks" fontSize="20px" color="white" />
                </Link>
                <Link style={{alignSelf: 'center', padding: '0 10px'}} to="/admin/admins">
                    <Title title="Admins" fontSize="20px" color="white" />
                </Link>
            </AdminSubMenuStyle>
            <Popconfirm
                title={'Você deseja sair?'}
                onConfirm={() => handleLogout()}
                placement={'bottom'}
            >
                <Tooltip
                    title={'Sair'}
                    placement={'left'}
                >
                    <div
                        style={{
                            paddingRight: '40px',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <h3 style={{alignSelf: 'flex-end', margin: 0, padding: 0, color: 'white'}}>{loggedAdmin?.name}</h3>
                        <h4 style={{alignSelf: 'flex-end', margin: 0, padding: 0, color: 'white'}}>{loggedAdmin?.email}</h4>
                    </div>
                </Tooltip>
            </Popconfirm>
        </StyledMenu>
    )
}