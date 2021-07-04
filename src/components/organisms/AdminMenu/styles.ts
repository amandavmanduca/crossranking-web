import styled from 'styled-components';

export const StyledMenu = styled.div`
    margin: 0;
    padding: 0;
    height: 110px;
    padding: 20px 0px;
    width: 100%;
    background-color: #0056b8;
    display: flex;
    justify-content: space-between;
    align-content: center;
    
    @media (max-width: 600px) {
        height: 100%;
        flex-wrap: wrap;
        padding: 20px;
        justify-content: flex-end;
        margin-bottom: 1px solid;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: flex;
    }
`;

export const AdminSubMenuStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    width: 100%;

    @media (max-width: 600px) {
        display: grid;

        img, .title {
            display: none;
        }
    }
`;