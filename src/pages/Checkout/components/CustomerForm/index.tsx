import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import cep from 'cep-promise'
import { CustomerTitle, FormContainer, FormRow, MaskedInput, NormalInput, PaymentContainer, RadioInput, RadioLabel } from './styles'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

const CustomerFormValidationSchema = zod.object({
	cep: zod.string().refine(async (cepVal) => await isCepValid(cepVal), { message: "CEP Inválido" }),
	street: zod.string().refine((value) => value.length > 0, { message: "Campo obrigatório" }),
	stNumber: zod.number({ invalid_type_error: "Campo obrigatório" }).refine((value) => value.toString().length > 0, { message: "Campo obrigatório" }),
	stComplement: zod.string().optional(),
	district: zod.string().refine((value) => value.length > 0, { message: "Campo obrigatório" }),
	city: zod.string().refine((value) => value.length > 0, { message: "Campo obrigatório" }),
	uf: zod.string().refine((value) => value.length > 0 && value.length < 3, { message: "Campo obrigatório" }),
})

type CustomerValidationSchema = zod.infer<typeof CustomerFormValidationSchema>

async function isCepValid(cepVal: string) {
	let isValid = true;

	await cep(cepVal).catch(() => isValid = false)

	return isValid
}

export function CustomerForm() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<CustomerValidationSchema>({
		resolver: zodResolver(CustomerFormValidationSchema)
	})

	function handleCustomerForm(data: any) {

	}

	return (
		<form onSubmit={handleSubmit(handleCustomerForm)} action="#" >
			<FormContainer>
				<CustomerTitle iconColor='yellow-dark'>
					<div>
						<MapPinLine size={22} />
						<span>Endereço de Entrega</span>
					</div>
					<span>Informe o endereço onde deseja receber seu pedido</span>
				</CustomerTitle>

				<FormRow>
					<NormalInput width={33} type="text" id='cep' placeholder='CEP' {...register('cep')} />
					{errors.cep?.message && <span>{errors.cep?.message}</span>}
				</FormRow>

				<FormRow>
					<NormalInput width={100} type="text" id='street' placeholder='Rua' {...register('street')} />
					{errors.street?.message && <span>{errors.street?.message}</span>}
				</FormRow>

				<FormRow>
					<NormalInput width={33} type="text" id='stNumber' placeholder='Número' {...register('stNumber')} />
					{errors.stNumber?.message && <span>{errors.stNumber?.message}</span>}

					<NormalInput width={66} type="text" id='stComplement' placeholder='Complemento' {...register('stComplement')} />
					{errors.stComplement?.message && <span>{errors.stComplement?.message}</span>}
				</FormRow>

				<FormRow>
					<NormalInput width={33} type="text" id='district' placeholder='Bairro' {...register('district')} />
					{errors.district?.message && <span>{errors.district?.message}</span>}

					<NormalInput width={54} type="text" id='city' placeholder='Cidade' {...register('city')} />
					{errors.city?.message && <span>{errors.city?.message}</span>}

					<MaskedInput width={10} mask="aa" maskChar={null} type="text" id='uf' placeholder='UF' {...register('uf')} />
					{errors.uf?.message && <span>{errors.uf?.message}</span>}
				</FormRow>
			</FormContainer>

			<PaymentContainer>
				<CustomerTitle iconColor='purple'>
					<div>
						<CurrencyDollar size={22} />
						<span>Endereço de Entrega</span>
					</div>
					<span>Informe o endereço onde deseja receber seu pedido</span>
				</CustomerTitle>

				<FormRow>
					<RadioInput type="radio" id='cc' name='paymentType' />
					<RadioLabel htmlFor="cc"><CreditCard size={16} /> CARTÃO DE CRÉDITO</RadioLabel>

					<RadioInput type="radio" id='dc' name='paymentType' />
					<RadioLabel htmlFor="dc"><Bank size={16} /> CARTÃO DE DÉBITO</RadioLabel>

					<RadioInput type="radio" id='money' name='paymentType' />
					<RadioLabel htmlFor="money"><Money size={16} /> DINHEIRO</RadioLabel>
				</FormRow>
			</PaymentContainer>
		</form >
	)
}





