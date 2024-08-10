const checkIfLoggedIn = async () => {
    if (window.location.href.includes('login.html')) {
        try {
            const token = localStorage.getItem('adminToken');
            if (token) {
                const headers = {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                };
                const response = await axios.get('http://localhost:8088/validateToken', { headers });

                if (response.status === 200 && response.data === true) {
                    window.location.href = 'PAdmin.html';
                }
            }
        } catch (error) {
            
        }
    } else {
        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                window.location.href = 'login.html';
                return;
            }

            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };
            const response = await axios.get('http://localhost:8088/validateToken', { headers });

            if (response.status !== 200 || response.data !== true) {
                localStorage.removeItem('adminToken');
                window.location.href = 'login.html';
                return;
            }
        } catch (error) {
            localStorage.removeItem('adminToken');
            window.location.href = 'login.html';
            return;
        }
    }
}

checkIfLoggedIn();