import { isObject } from 'lodash';

export const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
};

export const isValidJson = (str: string) => {
    try {
        const parsed = JSON.parse(str);
        return isObject(parsed); // JSON obyekt ekanligini tekshiradi
    } catch (e: unknown) {
        console.log(e);
        return false;
    }
};
