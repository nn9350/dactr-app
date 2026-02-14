// API Configuration
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'
    : 'https://your-backend-url.com/api'; // Replace with your deployed backend URL

// API Helper Functions
const api = {
    // GET request
    async get(endpoint) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('API GET Error:', error);
            throw error;
        }
    },
    
    // POST request
    async post(endpoint, data) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('API POST Error:', error);
            throw error;
        }
    },
    
    // PUT request
    async put(endpoint, data) {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('API PUT Error:', error);
            throw error;
        }
    }
};

// Appointment Functions
async function submitBooking(event) {
    event.preventDefault();
    
    const bookingData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        problem: document.getElementById('problem').value
    };
    
    try {
        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="en">Booking...</span><span class="hi hidden">बुकिंग हो रही है...</span>';
        submitBtn.disabled = true;
        
        // Send to backend
        const result = await api.post('/appointments', bookingData);
        
        if (result.success) {
            console.log('✅ Appointment booked:', result.data);
            
            // Show success message
            const successMsg = document.getElementById('bookingSuccess');
            successMsg.style.display = 'block';
            
            // Reset form
            document.getElementById('bookingForm').reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        }
    } catch (error) {
        console.error('❌ Booking error:', error);
        alert('Failed to book appointment. Please try again or call the clinic directly.');
    } finally {
        // Restore button
        const submitBtn = event.target.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<span class="en">Book Appointment</span><span class="hi hidden">अपॉइंटमेंट बुक करें</span>';
        submitBtn.disabled = false;
    }
}

// Check API Health on Load
async function checkAPIHealth() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        console.log('✅ Backend API:', data.status);
        return true;
    } catch (error) {
        console.warn('⚠️ Backend API not reachable. Using offline mode.');
        return false;
    }
}

// Initialize App
window.addEventListener('DOMContentLoaded', async () => {
    // Check if backend is available
    const apiAvailable = await checkAPIHealth();
    
    if (!apiAvailable) {
        console.log('📱 Running in offline mode with localStorage');
    }
    
    // Set minimum date for appointment booking to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    
    // Restore language preference from localStorage
    const savedLang = localStorage.getItem('dactr_language');
    if (savedLang === 'hi') {
        toggleLanguage();
    }
});
