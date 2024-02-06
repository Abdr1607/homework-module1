var partnersList = [
    { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
    { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
    { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
    { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
    { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
    { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
];

var partners = document.getElementById("partners");

partnersList.forEach(function(partner) {
    var listItem = document.createElement("li");
    listItem.className = "partner";

    var partnerImage = document.createElement("img");
    partnerImage.src = partner.src;
    partnerImage.alt = partner.alt;

    listItem.appendChild(partnerImage);
    partners.appendChild(listItem);
});