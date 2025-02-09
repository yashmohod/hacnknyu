export default function fetchApiData(e) {

    const response = fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2'); // Replace with your API endpoint

    response
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}