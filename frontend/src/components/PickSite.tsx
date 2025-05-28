import React from 'react';

const PickSiteDefaultsButton: React.FC = () => {
  const orgId = 'chefdesk'; // Replace with dynamic orgId if needed

  const handleClick = async () => {
    const url = `https://pangolin.chefdesk.in/api/v1/org/${orgId}/pick-site-defaults`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-CSRF-Token': 'x-csrf-protection',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Site Defaults Response:', data);
    } catch (error) {
      console.error('❌ Error fetching site defaults:', error);
    }
  };

  return (
    <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Fetch Site Defaults
    </button>
  );
};

export default PickSiteDefaultsButton;
