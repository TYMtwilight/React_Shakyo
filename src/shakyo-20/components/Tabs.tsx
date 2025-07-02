import React, { memo } from 'react';

type Props = {
    categories: string[];
    active: string;
    onChange: (tab: string) => void;
};

const Tabs: React.FC<Props> = memo(({ categories, active, onChange }) => {
    return (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px'}}>
            {categories.map((category) => {
                return (
                    <button key={category} style={{background: 'skyblue', border: 'none' }} onClick={() => onChange(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
});

export default Tabs;