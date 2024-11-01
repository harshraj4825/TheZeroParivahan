
    function showForm(formId) {
        // Hide all forms
        document.querySelectorAll('form').forEach(form => form.classList.add('hidden-form'));
        // Show selected form
        document.getElementById(formId).classList.remove('hidden-form');
    }

    function updateShuttleOptions() {
        const routeSelect = document.getElementById('shuttle-form-route').value;
        const pickupPointSelect = document.getElementById('pickupPoint');
        const dropPointSelect = document.getElementById('dropPoint');

        const selectedRouteStops = routeShuttleOptions[routeSelect];

        pickupPointSelect.innerHTML = '';
        dropPointSelect.innerHTML = '';

        selectedRouteStops.forEach((stop, index) => {
            const pickupOption = document.createElement('option');
            pickupOption.value = index;
            pickupOption.text = `${stop.stop} - ${stop.time}`;
            pickupPointSelect.appendChild(pickupOption);

            const dropOption = document.createElement('option');
            dropOption.value = index;
            dropOption.text = `${stop.stop} - ${stop.time}`;
            dropPointSelect.appendChild(dropOption);
        });
    }

    const routeShuttleOptions = {
        route1: [
            { stop: 'Stop A', time: '08:00 AM' },
            { stop: 'Stop B', time: '08:30 AM' },
            { stop: 'Stop C', time: '09:00 AM' },
            { stop: 'Stop D', time: '09:30 AM' },
            { stop: 'Stop E', time: '10:00 AM' }
        ],
        route2: [
            { stop: 'Stop F', time: '08:00 AM' },
            { stop: 'Stop G', time: '08:30 AM' },
            { stop: 'Stop H', time: '09:00 AM' },
            { stop: 'Stop I', time: '09:30 AM' },
            { stop: 'Stop J', time: '10:00 AM' }
        ]
    };

    const routePrices = {
        route1: {
            'CityA-CityB': 100,
            'CityA-CityC': 150,
            'CityA-CityD': 200,
            'CityA-CityE': 250
            // Add more pairs as needed
        },
        route2: {
            'CityF-CityG': 120,
            'CityF-CityH': 180,
            'CityF-CityI': 240,
            'CityF-CityJ': 300
            // Add more pairs as needed
        }
    };
    
    function updatePrice() {
        const route = document.getElementById('route').value;
        const pickupPoint = document.getElementById('pickupPoint').value;
        const dropPoint = document.getElementById('dropPoint').value;
    
        if (route && pickupPoint && dropPoint) {
            const routePriceKey = `${pickupPoint}-${dropPoint}`;
            const price = routePrices[route][routePriceKey];
            
            if (price) {
                document.getElementById('finalPriceWithoutDiscount').textContent = price;
                document.getElementById('finalPriceWithDiscount').textContent = price;
                document.getElementById('couponStatus').textContent = ''; // Reset coupon status
            } else {
                document.getElementById('finalPriceWithoutDiscount').textContent = 'N/A';
                document.getElementById('finalPriceWithDiscount').textContent = 'N/A';
            }
        }
    }
