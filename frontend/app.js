'use strict'

document.loadCards = async () => {
    const response = await fetch("/api/cards");
    return await response.json();
}