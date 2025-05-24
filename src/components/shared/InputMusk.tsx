'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';

type Props = {
    value?: string;
    onChange?: (value: string) => void;
};

export default function CustomPhoneInput({ value, onChange }: Props) {
    return (
        <PhoneInput
            country="uz"
            onlyCountries={['uz']}
            value={value}
            onChange={onChange}
            disableDropdown={true}
            enableAreaCodes={true}
            specialLabel=""
            disableCountryCode={false}
            masks={{ uz: '(..) ...-..-..' }}
            placeholder="(__) ___-__-__"
            countryCodeEditable={false}
            inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
            }}
            inputStyle={{
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
            buttonStyle={{ display: 'none' }}
            containerStyle={{
                width: '100%',
                borderRadius: '12px',
                backgroundColor: '#f3f4f6',
            }}
        />
    );
}
