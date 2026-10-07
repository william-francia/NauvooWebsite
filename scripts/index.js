document.addEventListener("DOMContentLoaded", () => {
    const companiesContainer = document.getElementById("companiesworkwithid");
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");
    if (currentYear) currentYear.textContent = new Date().getFullYear();
    if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;
    if (!companiesContainer) return;

    fetch("data/company.json")
        .then((response) => {
            if (!response.ok) throw new Error("No se pudieron cargar las marcas.");
            return response.json();
        })
        .then((companies) => {
            companies.forEach((company) => {
                const card = document.createElement("a");
                card.className = "company-card";
                card.href = company["website URLs"];
                card.target = "_blank";
                card.rel = "noopener noreferrer";
                card.setAttribute("aria-label", `Visitar el sitio de ${company.names}`);

                const image = document.createElement("img");
                image.src = company["image or icon file names"];
                image.alt = company.names;
                image.loading = "lazy";

                const name = document.createElement("strong");
                name.textContent = company.names;

                const description = document.createElement("span");
                description.className = "company-description";
                description.textContent = company.description;

                const visit = document.createElement("span");
                visit.className = "company-visit";
                visit.textContent = "Visitar marca →";

                card.append(image, name, description, visit);
                companiesContainer.append(card);
            });
        })
        .catch((error) => {
            console.error("Error cargando las marcas:", error);
            const message = document.createElement("p");
            message.className = "company-error";
            message.textContent = "Las marcas no están disponibles en este momento.";
            companiesContainer.append(message);
        });
});
