import { useForm, Controller } from 'react-hook-form';
import CustomPhoneInput from '../shared/InputMusk';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
    onSubmit: (data: { name: string; phone: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
    const t = useTranslations();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ name: string; phone: string }>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4 space-y-4">
            <div>
                <input type="text" placeholder={t('namePlaceholder')} {...register('name', { required: t('nameRequired') })} />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div>
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: t('phoneRequired') }}
                    render={({ field }) => <CustomPhoneInput value={field.value || ''} onChange={field.onChange} />}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <button
                type="submit"
                className="transitio mt-4 w-full cursor-pointer rounded-lg bg-[#ffcf00] py-2 font-semibold text-black hover:bg-[#ffcf00] md:mt-6 md:py-3"
            >
                {t('submit')}
            </button>

            <p className="text-sm text-gray-500">{t('note')}</p>
        </form>
    );
}
