
        async function handleSubmit(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const service = document.getElementById("service").value;
            const priority = document.getElementById("priority").value;

            const createDate = new Date();
            const daysToAdd = priority === "low" ? 12 : priority === "standard" ? 7 : 5;
            const pickupDate = new Date(createDate);
            pickupDate.setDate(pickupDate.getDate() + daysToAdd);

            const registration = {
                name,
                email,
                phone,
                service,
                priority,
                create_date: createDate.toISOString(),
                pickup_date: pickupDate.toISOString(),
            };

            try {
                const response = await fetch("http://localhost:5000/api/registration", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(registration),
                });

                if (response.ok) {
                    alert("Anmeldung erfolgreich");
                } else {
                    alert("nop");
                }
            } catch (error) {
                console.error("Error:", error);
                alert(" server nop");
            }
        }
    