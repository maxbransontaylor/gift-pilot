async function deleteFormHandler(event) {
    event.preventDefault();

    // retrieves item id
    const id = document.querySelector(".gift-id").textContent
    console.log(id)
    
    const response = await fetch(`/api/listItems/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-gift-btn').addEventListener('click', deleteFormHandler);
