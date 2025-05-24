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
                <input
                    type="text"
                    placeholder={t('namePlaceholder')}
                    {...register('name', { required: t('nameRequired') })}
                    style={{
                        width: '100%',
                        padding: '14px 16px',
                        fontSize: '16px',
                        borderRadius: '12px',
                        backgroundColor: '#f3f4f6',
                        border: 'none',
                        color: '#1f2937',
                        fontWeight: 500,
                        outline: 'none',
                    }}
                />
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

            <button type="submit" className="transitio mt-6 w-full rounded-lg bg-[#ffcf00] py-3 font-semibold text-black hover:bg-[#ffcf00]">
                {t('submit')}
            </button>

            <p className="text-sm text-gray-500">{t('note')}</p>
        </form>
    );
}
