import React, { memo } from 'react';

type Props = {
    categories: string[];
    active: string;
    onChange: (category: string) => void;
};

const Tabs: React.FC<Props> = memo(({ categories, active, onChange }) => {
    return (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px'}}>
            {categories.map((cat) => (
                <button key={cat} onClick={() => onChange(cat)} style={{
                    padding: '6px 12px',
                    backgroundColor: active === cat ? '#4caf50' : '#eee',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                }}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
});

export default Tabs;