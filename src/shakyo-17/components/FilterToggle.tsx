import React from 'react';
type Props = {
    checked: boolean;
    onChange: () => void;
};

const FilterToggle: React.FC<Props> = ({ checked, onChange }) => {
    return (
        <label style={{ display: 'block', marginBottom: 16 }}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            お気に入りのみ表示
        </label>
    );
};

export default FilterToggle;