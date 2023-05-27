import styled, { css } from "styled-components";
import InputMask from 'react-input-mask'
import { defaultTheme } from "../../../../styles/themes/default";

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	background-color: ${(props) => props.theme["base-card"]};
	border-radius: 6px;
`

interface CustomerTitleProps {
	iconColor: keyof typeof defaultTheme
}

export const CustomerTitle = styled.div<CustomerTitleProps>`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	div {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		
		svg {
			color: ${(props) => props.theme[props.iconColor]};
		}

		span {
			color: ${(props) => props.theme["base-subtitle"]};
		}
	}

	> span {
		margin-left: 1.65rem;
		color: ${(props) => props.theme["base-text"]};
		font-size: 0.875rem;
	}
`

export const FormRow = styled.div`
	display: flex;
	width: 100%;
	gap: 0.75rem;

	+ div {
		margin-top: 1rem;
	}
`

interface InputProps {
	width: number
	secondLabel?: string
}

const InputPattern = css<InputProps>`
	width: ${(props) => props.width}%;
	padding: 0.75rem;
	border: 1px solid ${(props) => props.theme["base-button"]};
	border-radius: 4px;
	background-color: ${(props) => props.theme["base-input"]};

	&::placeholder {
		color: ${(props) => props.theme["base-label"]};
		font-size: 0.875rem;
	}
`

export const NormalInput = styled.input`
	${InputPattern}
`

export const MaskedInput = styled(InputMask)`
	${InputPattern}
`

export const PaymentContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.75rem;
	padding: 2.5rem;
	background-color: ${(props) => props.theme["base-card"]};
	border-radius: 6px;
`

export const RadioInput = styled.input`
	display: none;

	&:checked + label {
		background-color: ${(props) => props.theme["purple-light"]};
		border: 1px solid ${(props) => props.theme.purple};
		color: ${(props) => props.theme["base-text"]};
	}
`

export const RadioLabel = styled.label`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 0.75rem;
	padding: 1rem;
	border: 1px solid transparent;
	border-radius: 6px;
	background-color: ${(props) => props.theme["base-button"]};
	color: ${(props) => props.theme["base-text"]};
	font-size: 0.75rem;
	cursor: pointer;

	~ label {
		margin-left: 0.75rem;
	}

	svg {
		color: ${(props) => props.theme.purple};
	}

	&:hover {
		background-color: ${(props) => props.theme["base-hover"]};
		color: ${(props) => props.theme["base-subtitle"]};
	}
`