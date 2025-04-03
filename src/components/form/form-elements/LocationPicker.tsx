'use client';

import { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { isNumber } from 'lodash';
import { isValidJson } from '@/helpers';

interface LocationPickerProps {
    onChange?: (coords: string) => void;
    value?: string;
    disabled?: boolean;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onChange, value: cordsString, disabled }) => {
    const [coords, setCoords] = useState<number[]>([41.2995, 69.2401]); // Toshkent koordinatalari

    const handleMapClick = (e: any) => {
        if (disabled) return;
        const newCoords = e.get('coords');
        setNewCords(newCoords);
    };

    const setNewCords = (cords: number[]) => {
        setCoords(cords);
        const cordsObj = { long: cords[0], lat: cords[1] };
        onChange?.(JSON.stringify(cordsObj));
    };

    useEffect(() => {
        if (cordsString && isValidJson(cordsString)) {
            const cordsObj = JSON.parse(cordsString || '{}');
            const long = +cordsObj.long;
            const lat = +cordsObj.lat;

            if (isNumber(long) && isNumber(lat) && (long !== coords[0] || lat !== coords[1])) setCoords([cordsObj.long, cordsObj.lat]);
        } else if (!cordsString) setNewCords(coords);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cordsString]);

    return (
        <YMaps>
            <Map defaultState={{ center: coords, zoom: 12 }} width="100%" height="250px" onClick={handleMapClick}>
                <Placemark
                    geometry={coords}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: '/images/placemark.svg',
                        iconImageSize: [30, 60],
                        iconImageOffset: [-15, -60],
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default LocationPicker;
