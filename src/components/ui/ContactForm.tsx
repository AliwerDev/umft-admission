import { useForm, Controller } from 'react-hook-form';
import CustomPhoneInput from '../shared/InputMusk';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ContactFormProps {
    onSubmit: (data: { first_name: string; phone_number: string }) => void;
    isLoading: boolean;
}

export default function ContactForm({ onSubmit, isLoading }: ContactFormProps) {
    const t = useTranslations();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ first_name: string; phone_number: string }>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4 space-y-4">
            <div>
                <input type="text" placeholder={t('namePlaceholder')} {...register('first_name', { required: t('nameRequired') })} />
                {errors.first_name && <p className="mt-1 text-sm text-red-500">{errors.first_name.message}</p>}
            </div>

            <div>
                <Controller
                    name="phone_number"
                    control={control}
                    rules={{ required: t('phoneRequired') }}
                    render={({ field }) => <CustomPhoneInput value={field.value || ''} onChange={field.onChange} />}
                />
                {errors.phone_number && <p className="mt-1 text-sm text-red-500">{errors.phone_number.message}</p>}
            </div>

            <button
                type="submit"
                className="transitio mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#de5c25] py-2 font-semibold text-white hover:bg-[#de5c25] md:mt-6 md:py-3"
                disabled={isLoading}
            >
                {isLoading && <Image src={'/images/loader.png'} width={20} height={20} className="h-5 w-5 animate-spin" alt="loader" />}
                {t('submit')}
            </button>

            <p className="text-sm text-gray-500">{t('note')}</p>
        </form>
    );
}
