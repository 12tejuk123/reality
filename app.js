import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadProperties() {

    const snap = await getDocs(collection(db, "properties"));

    const rzoneGrid = document.getElementById("rzoneProjects");
    const naGrid = document.getElementById("naProjects");

    rzoneGrid.innerHTML = "";
    naGrid.innerHTML = "";

    snap.forEach(doc => {
        let p = doc.data();

        let card = `
        <div class="card">
            <img src="${p.image}">
            <div class="card-body">
                <h3>${p.title}</h3>
                <p>${p.location}</p>
                <p class="price">₹ ${p.price.toLocaleString()}</p>
                <button class="btn" onclick="contact('${p.title}')">Enquire</button>
            </div>
        </div>
        `;

        if (p.type === "rzone") {
            rzoneGrid.innerHTML += card;
        } else if (p.type === "na") {
            naGrid.innerHTML += card;
        }
    });
}

// WHATSAPP CONTACT
window.contact = function(title) {
    let msg = `Hello, I am interested in ${title}`;
    window.open(`https://wa.me/919075172323?text=${encodeURIComponent(msg)}`);
}

loadProperties();