'use client';

import { Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import type { UploadProps } from 'antd';
import request from '@/lib/request';
import { get } from 'lodash';
import Image from 'next/image';

interface ImageUploadProps {
    value?: string; // Form value (image URL)
    onChange?: (url: string) => void; // Function to update form state
}

const uploadImageToServer = async (base64: string): Promise<string> => {
    const response = await request.post('/SystemC/UploadPhoto', {
        base64,
    });
    if (!response.data) throw new Error('Upload failed');
    return get(response, 'data.url');
};

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
    // Mutation to handle image upload
    const mutation = useMutation({
        mutationFn: uploadImageToServer,
        onSuccess: (url) => {
            if (onChange) onChange(url);
        },
    });

    // Convert file to Base64 & upload
    const handleUpload: UploadProps['beforeUpload'] = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64 = reader.result as string;
            mutation.mutate(base64);
        };
        return false; // Prevent default upload behavior
    };

    return (
        <Upload showUploadList={false} beforeUpload={handleUpload}>
            <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                {value ? (
                    <Image
                        src={value}
                        alt="Uploaded"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover', borderRadius: 5, maxHeight: '100px', minHeight: '100px' }}
                    />
                ) : (
                    <CloudUploadOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                )}
            </div>
        </Upload>
    );
};

export default ImageUpload;
