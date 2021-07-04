import { StyledButton } from './styles';

type Props = {
    onClick?: any;
    children?: any;
}

export default function AdminDefaultButton({onClick, children}: Props) {
    return(
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}