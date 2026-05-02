import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.add = async function() {
    await addDoc(collection(db, "properties"), {
        title: document.getElementById("title").value,
        location: document.getElementById("location").value,
        price: document.getElementById("price").value,
        image: document.getElementById("image").value
    });

    alert("Added!");
}